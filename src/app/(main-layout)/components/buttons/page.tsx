import { Button } from "@/components/ui/button";

export default function ButtonsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">Buttons</h1>
        <p className="text-gray-600 mb-8">A collection of button components with different variants and sizes.</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-4">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg">Large</Button>
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Button States</h2>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
