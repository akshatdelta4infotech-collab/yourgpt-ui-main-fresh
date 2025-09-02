"use client";

import { Eye, Code2, Maximize } from "lucide-react";

interface PreviewCodeHeaderProps {
  activeTab: "preview" | "code";
  setActiveTab: (tab: "preview" | "code") => void;
}

const PreviewCodeHeader = ({
  activeTab,
  setActiveTab,
}: PreviewCodeHeaderProps) => {
  return (
    <header className="relative w-full">
      {/* Full-width horizontal dotted lines */}
      <div className="absolute inset-0">
        {/* Top dotted line */}
        <div
          className="absolute top-0 h-px border-t border-dotted border-gray-300 dark:border-gray-700"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            width: "100vw",
          }}
        ></div>
        {/* Bottom dotted line */}
        <div
          className="absolute bottom-0 h-px border-b border-dotted border-gray-300 dark:border-gray-700"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            width: "100vw",
          }}
        ></div>
      </div>

      {/* Header content */}
      <div className="relative w-full">
        <div className="flex items-center min-h-[48px] pl-4">
          <div className="flex items-center absolute left-4">
            {/* Preview Button */}
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === "preview"
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>

            {/* Code Button */}
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === "code"
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Code</span>
            </button>

            {/* Divider */}
            <span className="w-px h-6 border-l border-dotted border-gray-300 dark:border-gray-700 mx-2"></span>

            {/* Zoom */}
            <button className="ml-2 p-2 rounded-md hover:bg-muted hover:text-foreground transition-colors duration-200 cursor-pointer">
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PreviewCodeHeader;
