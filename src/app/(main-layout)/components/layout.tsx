import { ReactNode } from "react";
import { ComponentsSidebar } from "./components-sidebar";

interface ComponentsLayoutProps {
  children: ReactNode;
}

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <ComponentsSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
