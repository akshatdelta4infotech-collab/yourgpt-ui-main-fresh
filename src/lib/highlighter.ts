import { createHighlighter } from "shiki";

let highlighter: Awaited<ReturnType<typeof createHighlighter>> | null = null;

const THEME = "vitesse-dark";

const escapeHtml = (s: string) =>
    s.replace(/[&<>"']/g, m => (
        {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        }[m] as string
    ));

export async function highlight(code: string, lang: string = "tsx") {
    if (!highlighter) {
        highlighter = await createHighlighter({
            themes: [THEME],
            langs: ["tsx", "ts", "js", "jsx", "html", "css", "bash", "json"],
        });
    }

    await highlighter.loadLanguage(lang as any).catch(() => { });

    const { tokens } = await highlighter.codeToTokens(code, {
        lang: lang as any,
        theme: THEME,
    });

    // Trim leading/trailing blank lines
    let start = 0;
    let end = tokens.length - 1;
    while (start < tokens.length && tokens[start].every(t => t.content.trim() === "")) start++;
    while (end >= 0 && tokens[end].every(t => t.content.trim() === "")) end--;

    const trimmedTokens = tokens.slice(start, end + 1);

    let lineNumber = 1;
    const body = trimmedTokens
        .map(line => {
            const isEmpty = line.every(t => t.content.trim() === "");
            if (isEmpty) {
                // ❌ Skip rendering empty lines entirely (no number, no gap)
                return "";
            }

            const inner = line
                .map(
                    t =>
                        `<span style="color:${t.color ?? "inherit"}">${escapeHtml(
                            t.content
                        )}</span>`
                )
                .join("");

            return `<div class="line"><span class="line-number">${lineNumber++}</span>${inner}</div>`;
        })
        .join("");

    return `
<pre class="shiki bg-card text-card-foreground border-border rounded-md overflow-auto">
  <code class="font-mono text-sm">
    ${body}
  </code>
</pre>`;
}
