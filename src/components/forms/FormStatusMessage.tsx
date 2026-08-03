import type { FormStatus } from "./useFormSubmit";

export function FormStatusMessage({
  status,
  error,
  successMessage,
}: {
  status: FormStatus;
  error: string | null;
  successMessage: string;
}) {
  if (status === "success") {
    return (
      <div role="status" className="rounded-[var(--radius-control)] border border-forest-700/30 bg-forest-700/5 p-4 font-sans text-sm text-forest-700">
        {successMessage}
      </div>
    );
  }
  if (status === "error") {
    return (
      <div role="alert" className="rounded-[var(--radius-control)] border border-crimson-600/30 bg-crimson-50 p-4 font-sans text-sm text-crimson-700">
        {error}
      </div>
    );
  }
  return null;
}
