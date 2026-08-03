function formatIcsDate(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function escapeIcsText(text: string): string {
  return text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

export function buildIcsEvent({
  uid,
  title,
  description,
  location,
  start,
  end,
  recurrenceRule,
}: {
  uid: string;
  title: string;
  description?: string;
  location?: string;
  start: Date;
  end?: Date | null;
  recurrenceRule?: string | null;
}): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//GCIC//Website//EN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(start)}`,
  ];
  if (end) lines.push(`DTEND:${formatIcsDate(end)}`);
  if (recurrenceRule) lines.push(`RRULE:${recurrenceRule}`);
  lines.push(`SUMMARY:${escapeIcsText(title)}`);
  if (description) lines.push(`DESCRIPTION:${escapeIcsText(description)}`);
  if (location) lines.push(`LOCATION:${escapeIcsText(location)}`);
  lines.push("END:VEVENT", "END:VCALENDAR");
  return lines.join("\r\n");
}
