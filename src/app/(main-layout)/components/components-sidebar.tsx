"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const components = [
  { name: "Buttons", href: "/components/buttons" },
  { name: "Modals", href: "/components/modals" },
  { name: "Alerts", href: "/components/alerts" },
];

export function ComponentsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-aside border-r border-dotted  min-h-screen px-2 py-4 ">
      <h2 className="font-semibold text-sm mb-3 pl-1">Core</h2>
      <nav className="space-y-1">
        {components.map((component) => {
          const isActive = pathname === component.href;
          return (
            <Link
              key={component.href}
              href={component.href}
              className={`block px-2 py-2 rounded-md text-sm ${isActive ? "bg-secondary text-secondary-foreground font-medium" : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"}`}
            >
              {component.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
