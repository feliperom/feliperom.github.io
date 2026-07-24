import { RootRedirect } from "@/components/layout/RootRedirect";

// Static shell served at "/"; a tiny client redirect routes to /pt or /en
// based on the browser language. The selector stays visible on every page.
export default function RootPage() {
  return <RootRedirect />;
}
