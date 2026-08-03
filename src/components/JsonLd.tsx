/** Renders a JSON-LD `<script>` tag. `data` should be a plain schema.org object literal. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
