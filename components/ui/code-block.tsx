"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "typescript",
  showLineNumbers = true,
}: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    const highlight = async () => {
      const html = await codeToHtml(code, {
        lang: language,
        theme: theme === "dark" ? "github-dark" : "github-light",
        defaultColor: false,
      });

      if (showLineNumbers) {
        // Add line numbers to the code
        const lines = html.split("\n");
        const numberedLines = lines.map((line, i) => {
          if (line.trim() === "") return line;
          return `<span class="line-number">${i + 1}</span>${line}`;
        });
        setHighlightedCode(numberedLines.join("\n"));
      } else {
        setHighlightedCode(html);
      }
    };
    highlight();
  }, [code, language, theme, showLineNumbers]);

  return (
    <div className="relative rounded-lg border border-white/10 bg-muted/50">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <span className="text-xs text-muted-foreground">{language}</span>
      </div>
      <pre
        className={`overflow-x-auto rounded-lg rounded-t-none ${
          showLineNumbers ? "with-line-numbers" : ""
        }`}
      >
        <div
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
          className="text-sm relative code-block"
        />
      </pre>
    </div>
  );
}
