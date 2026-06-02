import { WorkspaceShell } from "@/app/ui/workspace-shell";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WorkspaceShell role="admin">{children}</WorkspaceShell>;
}
