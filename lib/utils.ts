export function cn(...args: any[]): string {
    return args.filter(Boolean).join(' ');
  }

// Date utilities: preserve Sanity date-only (YYYY-MM-DD) without timezone shifts
function isDateOnlyString(v: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(v);
}

export function formatDisplayDate(raw?: string | Date | null, opts: { variant?: 'long' | 'short' } = {}): string {
  if (!raw) return '';
  const variant = opts.variant || 'long';

  try {
    // Handle Date object directly
    if (raw instanceof Date) {
      if (isNaN(raw.getTime())) return '';
      return raw.toLocaleDateString(undefined, variant === 'long'
        ? { year: 'numeric', month: 'long', day: 'numeric' }
        : { year: 'numeric', month: 'short', day: 'numeric' }
      );
    }

    // String cases
    const s = String(raw).trim();
    if (!s) return '';

    // If Sanity date-only (YYYY-MM-DD), avoid local TZ shifting by using UTC
    if (isDateOnlyString(s)) {
      const [y, m, d] = s.split('-').map(Number);
      // Create a UTC date and format with UTC timezone so date remains stable
      const utc = new Date(Date.UTC(y, m - 1, d));
      return new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: variant === 'long' ? 'long' : 'short',
        day: 'numeric',
        timeZone: 'UTC'
      } as Intl.DateTimeFormatOptions).format(utc);
    }

    // For full ISO or other parseable strings, fall back to native Date
    const d = new Date(s);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString(undefined, variant === 'long'
      ? { year: 'numeric', month: 'long', day: 'numeric' }
      : { year: 'numeric', month: 'short', day: 'numeric' }
    );
  } catch {
    return '';
  }
}