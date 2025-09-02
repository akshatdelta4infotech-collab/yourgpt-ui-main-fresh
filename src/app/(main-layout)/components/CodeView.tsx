"use client";

import { useEffect, useState } from "react";
import { highlight } from "@/lib/highlighter";
import { Copy, Check } from "lucide-react";

type CodeViewProps = {
  code: string;
  language?: string;
};

export default function CodeView({ code, language = "tsx" }: CodeViewProps) {
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
    <div className="relative w-full bg-card text-card-foreground text-left ">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="
          absolute top-2 right-5 flex items-center gap-1 px-2 py-1 
          rounded-md bg-muted hover:bg-muted/80 transition 
          text-muted-foreground hover:text-foreground
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
          overflow-auto
          [&_pre]:!bg-transparent
          [&_pre]:!pt-0
          [&_pre]:!px-2
          [&_pre]:!pb-4
          [&_pre]:!m-0
          [&_pre]:!whitespace-pre
          [&_.line]:flex
          [&_.line]:items-baseline
          [&_.line-number]:w-8
          [&_.line-number]:text-right
          [&_.line-number]:mr-4
          [&_.line-number]:text-muted-foreground
          [&_.line-number:hover]:text-foreground
          [&_.line-number]:select-none
        "
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
