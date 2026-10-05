"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

// Shows the visitor's current year. The static build renders the year it was built in,
// then the browser swaps in the real current year, so the footer never goes stale.
export default function CurrentYear({ buildYear }: { buildYear: number }) {
  const year = useSyncExternalStore(noopSubscribe, () => new Date().getFullYear(), () => buildYear);
  return <>{year}</>;
}
