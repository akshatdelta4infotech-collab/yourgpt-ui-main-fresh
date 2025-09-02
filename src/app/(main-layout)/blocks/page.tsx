<<<<<<< HEAD
export default function BlocksPage() {
  return <div className="p-12 text-center text-muted-foreground">Coming soon...</div>;
=======
import CtaSections from "../components/CtaSections";
import Landingpageone from "../components/Landingpageone";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Dividing line below navbar */}
      <div className="w-full h-px bg-border fixed top-12 left-0 z-[80]"></div>

      {/* Pattern bar - full viewport width, fixed at top */}
      <div
        className="fixed top-12 left-0 w-screen h-7 z-[70] border-b border- border-dotted border-border"
        style={{
          backgroundImage: `repeating-linear-gradient(
            135deg, 
            color-mix(in srgb, var(--foreground) 5%, transparent) 0px,
            color-mix(in srgb, var(--foreground) 5%, transparent) 1px,
            transparent 1px,
            transparent 6px
          )`,
          backgroundColor: "var(--background)",
        }}
      ></div>

      {/* Content wrapper with proper spacing */}
      <div className="relative pt-6 overflow-x-hidden">
        {/* Content with full width - components handle their own layout */}
        <div className="w-full overflow-x-hidden">
          {/* Render your section components - they handle their own padding */}
          <CtaSections />
          <CtaSections variant="email" />
          <CtaSections />
          <CtaSections variant="cta" />
          <CtaSections variant="cta2" />
          <Landingpageone />

          {/* Footer Divider */}
          <div className="mx-[8vw] mt-16 mb-16">
            <hr className="border-t border-border" />
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> 36d3f59 (Initial commit)
}
