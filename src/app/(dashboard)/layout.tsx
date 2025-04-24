import { Toaster } from "sonner";
import { Header } from "../components/dashboard/header";
import { Sidebar } from "../components/dashboard/sidebar";
import { ThemeProvider } from "../components/theme-provider";
import "../styles/dashboard.css";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto bg-muted/10 p-6">
            {children}
          </main>
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
