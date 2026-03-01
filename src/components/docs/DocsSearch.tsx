import { useState, useEffect, useRef, useCallback } from 'react';

interface SearchResult {
  url: string;
  excerpt: string;
  meta?: { title?: string };
}

/** Strip HTML tags from Pagefind excerpt to get plain text */
function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

export default function DocsSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const pagefindRef = useRef<any>(null);

  const loadPagefind = useCallback(async () => {
    if (pagefindRef.current) return;
    if (import.meta.env.DEV) return; // Pagefind index only exists after build
    try {
      // Build the path dynamically so Vite's SSR transform cannot statically resolve it
      const path = '/pagefind/pagefind.js';
      pagefindRef.current = await import(/* @vite-ignore */ path);
      await pagefindRef.current.init();
    } catch {
      // Pagefind not available
    }
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      loadPagefind();
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen, loadPagefind]);

  useEffect(() => {
    if (!query || !pagefindRef.current) {
      setResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      const search = await pagefindRef.current.search(query);
      const data = await Promise.all(search.results.slice(0, 8).map((r: any) => r.data()));
      setResults(data);
    }, 150);
    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
      onClick={() => setIsOpen(false)}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg bg-[#faf9f5] rounded-xl shadow-2xl border border-[#e5e3dc] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[#e5e3dc]">
          <svg className="w-5 h-5 text-[#8a8580] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation..."
            className="flex-1 bg-transparent outline-none text-sm text-[#2a2622] placeholder-[#8a8580]"
          />
          <kbd className="text-xs text-[#8a8580]/60 bg-[#f0efe9] px-1.5 py-0.5 rounded border border-[#e5e3dc]">
            ESC
          </kbd>
        </div>
        {results.length > 0 && (
          <ul className="max-h-[50vh] overflow-y-auto py-2">
            {results.map((result, i) => (
              <li key={i}>
                <a
                  href={result.url}
                  className="block px-4 py-2.5 hover:bg-[#f0efe9] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-sm font-medium text-[#2a2622]">{result.meta?.title || 'Untitled'}</div>
                  {result.excerpt && (
                    <div className="text-xs text-[#8a8580] mt-0.5 line-clamp-2">
                      {stripHtml(result.excerpt)}
                    </div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        )}
        {query && results.length === 0 && (
          <div className="px-4 py-8 text-center text-sm text-[#8a8580]">
            No results found for &ldquo;{query}&rdquo;
          </div>
        )}
        {!query && (
          <div className="px-4 py-8 text-center text-sm text-[#8a8580]">
            Type to search the documentation
          </div>
        )}
      </div>
    </div>
  );
}
