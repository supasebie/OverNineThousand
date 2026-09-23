/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { hooks } from "@/config/hooks";
import { HooksList } from "@/components/hooks/hooks-list";
import { HooksBreadcrumb } from "@/components/hooks/hooks-breadcrumb";

export default function HooksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen font-mono">
      <SidebarProvider>
        <Sidebar variant="inset">
          <SidebarHeader className="px-2 mt-2">
            <Link href="/react-hooks" className="flex items-center gap-2 mb-4 text-orange-500">
              <Terminal className="w-5 h-5" />
              <span className="text-sm">React Hooks</span>
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center gap-2 text-sm hover:text-orange-500 transition-colors">
                <span>←</span>
                <span>Portfolio</span>
              </Link>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <HooksList hooks={hooks as any} />
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="p-3">
            <div className="flex mb-4 items-center">
              <HooksBreadcrumb />
            </div>
            <div className="p-2">{children}</div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
