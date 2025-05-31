import Link from "next/link";

const components = [
  {
    name: "Buttons",
    description: "Button components with different variants and sizes.",
    href: "/components/buttons",
  },
  {
    name: "Modals",
    description: "Modal dialog components for different use cases.",
    href: "/components/modals",
  },
  {
    name: "Alerts",
    description: "Alert components for different types of notifications.",
    href: "/components/alerts",
  },
];

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">Components</h1>
        <p className="text-gray-600 mb-8">Browse our collection of reusable UI components built with Tailwind CSS.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <Link key={component.href} href={component.href} className="block p-6 rounded-lg border  transition-colors hover:border-muted">
            <h2 className="font-semibold mb-2">{component.name}</h2>
            <p className=" text-sm text-muted-foreground">{component.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
