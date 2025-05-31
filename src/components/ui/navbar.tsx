"use client";

import Link from "next/link";
import YourGptLogo from "../logos/yourgpt-logo";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import { usePathname } from "next/navigation";
import GitHubLogo from "../logos/github-logo";

const links = [
  {
    label: "Components",
    href: "/components",
  },
  {
    label: "Blocks",
    href: "/blocks",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="border border-dotted">
      <div className="container mx-auto flex items-center justify-between h-header">
        <Link href="/" className="font-semibold flex items-center gap-2">
          <YourGptLogo />
          UI
        </Link>

        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className={cn("text-sm transition-colors font-medium text-muted-foreground hover:text-foreground p-2", isActive(link.href) && "text-foreground")}>
              {link.label}
            </Link>
          ))}
          <Link href="https://github.com/YourGPT/yourgpt-ui" target="_blank" className="text-sm transition-colors font-medium text-muted-foreground hover:text-foreground">
            <GitHubLogo className="size-5" />
          </Link>

          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
