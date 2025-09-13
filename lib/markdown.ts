// lib/markdown.ts
import { marked } from 'marked';

export function renderMarkdown(md: string): string {
  return marked.parse(md);
}
