/** Estimated Paystack Nigeria card fee: 1.5% + NGN100, capped at NGN2000, waived under NGN2500. */
export function estimatePaystackFee(amountNgn: number): number {
  if (!Number.isFinite(amountNgn) || amountNgn <= 0) return 0;
  if (amountNgn < 2500) return 0;
  const fee = amountNgn * 0.015 + 100;
  return Math.min(fee, 2000);
}
