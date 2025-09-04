"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import components to avoid SSR issues
const Landingpageone = dynamic(
  () => import("../../(main-layout)/components/Landingpageone"),
  { ssr: false }
);
const Landingpagetwo = dynamic(
  () => import("../../(main-layout)/components/Landingpagetwo"),
  { ssr: false }
);
const Landingpagethree = dynamic(
  () => import("../../(main-layout)/components/Landingpagethree"),
  { ssr: false }
);
const CtaSections = dynamic(
  () => import("../../(main-layout)/components/CtaSections"),
  { ssr: false }
);

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-foreground"></div>
  </div>
);

// Wrapper component that forces preview mode and hides headers
const PreviewWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <style jsx global>{`
        /* Hide PreviewCodeHeader completely */
        header {
          display: none !important;
        }
        /* Hide any elements with preview-code-header class or similar */
        .preview-code-header,
        [class*="preview-code-header"],
        div[class*="PreviewCodeHeader"] {
          display: none !important;
        }
        /* Force preview content to show and hide code content */
        div[data-tab="preview"] {
          display: block !important;
        }
        div[data-tab="code"] {
          display: none !important;
        }
        /* Maintain original component sizing, not full screen */
        .w-full.min-h-\\[60vh\\] {
          min-height: auto !important;
        }
        /* Center the component content */
        body {
          margin: 0;
          padding: 20px;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

// Component that renders just the preview content
const PreviewContent = ({ component }: { component: string }) => {
  const renderComponent = () => {
    switch (component) {
      case "landingpageone":
        return (
          <PreviewWrapper>
            <Landingpageone />
          </PreviewWrapper>
        );
      case "landingpagetwo":
        return (
          <PreviewWrapper>
            <Landingpagetwo />
          </PreviewWrapper>
        );
      case "landingpagethree":
        return (
          <PreviewWrapper>
            <Landingpagethree />
          </PreviewWrapper>
        );
      case "ctasections":
        return (
          <PreviewWrapper>
            <CtaSections />
          </PreviewWrapper>
        );
      case "ctasections-email":
        return (
          <PreviewWrapper>
            <CtaSections variant="email" />
          </PreviewWrapper>
        );
      case "ctasections-cta":
        return (
          <PreviewWrapper>
            <CtaSections variant="cta" />
          </PreviewWrapper>
        );
      case "ctasections-cta2":
        return (
          <PreviewWrapper>
            <CtaSections variant="cta2" />
          </PreviewWrapper>
        );
      default:
        return (
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">
                Component Not Found
              </h1>
              <p className="text-muted-foreground">
                The component "{component}" could not be found.
              </p>
            </div>
          </div>
        );
    }
  };

  return renderComponent();
};

export default function PreviewPage() {
  const params = useParams();
  const component = params?.component as string;

  if (!component) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            No Component Specified
          </h1>
          <p className="text-muted-foreground">
            Please specify a component to preview.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <PreviewContent component={component} />
    </Suspense>
  );
}
