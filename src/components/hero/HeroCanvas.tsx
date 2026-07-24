"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Abstract digital lattice: a field of points on a subtly waving grid that
 * leans toward the pointer. Light, DPR-capped, disposed on unmount. Rendered
 * only after a WebGL check; a static monogram is shown otherwise.
 */
export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    const SIZE = 46;
    const GAP = 0.34;
    const count = SIZE * SIZE;
    const positions = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    let i = 0;
    for (let x = 0; x < SIZE; x++) {
      for (let y = 0; y < SIZE; y++) {
        const px = (x - SIZE / 2) * GAP;
        const py = (y - SIZE / 2) * GAP;
        positions[i] = px;
        positions[i + 1] = py;
        positions[i + 2] = 0;
        base[i] = px;
        base[i + 1] = py;
        base[i + 2] = 0;
        i += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xb6ff4a, size: 0.035, transparent: true, opacity: 0.9 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const pointer = new THREE.Vector2(0, 0);
    const target = new THREE.Vector2(0, 0);
    const onMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      target.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);

    const clock = new THREE.Clock();
    let frame = 0;

    const render = () => {
      const t = clock.getElapsedTime();
      pointer.lerp(target, 0.05);

      const attr = geometry.getAttribute("position") as THREE.BufferAttribute;
      for (let j = 0; j < count; j++) {
        const ix = j * 3;
        const bx = base[ix];
        const by = base[ix + 1];
        const wave = Math.sin(bx * 0.6 + t) * 0.25 + Math.cos(by * 0.6 + t * 0.8) * 0.25;
        const lean = (bx * pointer.x + by * pointer.y) * 0.06;
        attr.array[ix + 2] = wave + lean;
      }
      attr.needsUpdate = true;

      points.rotation.x = THREE.MathUtils.lerp(points.rotation.x, pointer.y * 0.35 - 0.35, 0.05);
      points.rotation.y = THREE.MathUtils.lerp(points.rotation.y, pointer.x * 0.45, 0.05);

      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };

    if (prefersReduced) {
      renderer.render(scene, camera);
    } else {
      frame = requestAnimationFrame(render);
    }

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, [prefersReduced]);

  return <div ref={mountRef} className="absolute inset-0 h-full w-full" aria-hidden />;
}
