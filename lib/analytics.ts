export function track(event: string, payload?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    const w = window as unknown as {
      dataLayer?: unknown[]
      fbq?: (...args: unknown[]) => void
    }
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({ event, ...payload })
    if (typeof w.fbq === 'function') {
      w.fbq('trackCustom', event, payload)
    }
  }
}
