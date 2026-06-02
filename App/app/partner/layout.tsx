import { WorkspaceShell } from "@/app/ui/workspace-shell";

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WorkspaceShell role="partner">{children}</WorkspaceShell>;
}
