"use client";

import { useEffect, useState } from "react";
import { highlight } from "@/lib/highlighter";
import { Copy, Check } from "lucide-react";

type CodeViewTwoProps = {
  code: string;
  language?: string;
};

export default function CodeViewTwo({
  code,
  language = "tsx",
}: CodeViewTwoProps) {
  const [html, setHtml] = useState<string>("Loading...");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    highlight(code, language).then(setHtml);
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  return (
    <div className="relative w-full bg-card text-card-foreground text-left min-h-[60vh] max-h-[70vh]">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="
          absolute top-2 right-5 flex items-center gap-1 px-2 py-1 
          rounded-md bg-muted hover:bg-muted/80 transition 
          text-muted-foreground hover:text-foreground z-10
        "
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>

      {/* Code block */}
      <div
        className="
    text-sm
    h-full
    min-h-[60vh]
    max-h-[70vh]
    overflow-y-auto
    overflow-x-hidden
    px-4 pb-8
    [&_pre]:h-full
    [&_pre]:overflow-visible
    [&_pre]:whitespace-pre-wrap
    [&_pre]:word-break-break-word
    [&_code]:block
    [&_code]:w-full
    [&_.line]:flex
    [&_.line]:items-start
    [&_.line-number]:w-8
    [&_.line-number]:text-right
    [&_.line-number]:mr-4
    [&_.line-number]:text-muted-foreground
    [&_.line-number:hover]:text-foreground
    [&_.line-number]:select-none
    [&_.line-number]:flex-shrink-0
    [&_.line-content]:flex-1
    [&_.line-content]:whitespace-pre-wrap
    [&_.line-content]:word-break-break-word
    [&_.line-content]:min-w-0
  "
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
