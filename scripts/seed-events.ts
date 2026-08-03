/**
 * Seeds GCIC's recurring programmes as `event` documents with an RRULE, so
 * they auto-populate the calendar going forward without manual re-entry —
 * see GCIC-WEBSITE-BUILD-PROMPT.md §8.5. Times not given precisely in the
 * recovered source content are marked [CONFIRM] in the description and
 * should be checked with the church before launch.
 *
 *   npx tsx scripts/seed-events.ts
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";

config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: "2024-01-01", token, useCdn: false });

type SeedEvent = { _id: string; _type: string } & Record<string, unknown>;

const events = [
  {
    _id: "event.nightVigil",
    _type: "event",
    title: "Night Vigil",
    slug: { _type: "slug", current: "night-vigil" },
    description: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Fortifying our prayer lives — prayers for healing and help from the Lord, with lively praise, worship, intense prayers and adoration.",
          },
        ],
      },
    ],
    startDateTime: "2026-08-28T20:00:00.000Z",
    endDateTime: "2026-08-28T22:00:00.000Z",
    location: "The Place, GCIC Tower, Jabi, Abuja",
    isRecurring: true,
    recurrenceRule: "FREQ=MONTHLY;BYDAY=-1FR",
    ministry: { _type: "reference", _ref: "ministry.heavenlyJerusalemAltar" },
    featured: true,
  },
  {
    _id: "event.outreach",
    _type: "event",
    title: "Outreach",
    slug: { _type: "slug", current: "outreach" },
    description: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Taking church beyond the four walls — neighbourhoods, hospitals, and prisons." }],
      },
    ],
    startDateTime: "2026-08-03T08:00:00.000Z",
    endDateTime: "2026-08-03T10:00:00.000Z",
    location: "Various — neighbourhoods, hospitals, and prisons across the FCT",
    isRecurring: true,
    recurrenceRule: "FREQ=WEEKLY;BYDAY=MO",
    ministry: { _type: "reference", _ref: "ministry.outreach" },
    featured: false,
  },
  {
    _id: "event.heavenlyJerusalemAltar",
    _type: "event",
    title: "Heavenly Jerusalem Altar (Home Cells)",
    slug: { _type: "slug", current: "heavenly-jerusalem-altar" },
    description: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Home cells across the FCT that teach the Bible, fellowship, and evangelise their neighbourhoods." }],
      },
    ],
    startDateTime: "2026-08-08T16:00:00.000Z",
    endDateTime: "2026-08-08T17:00:00.000Z",
    location: "Various home cells across the FCT",
    isRecurring: true,
    recurrenceRule: "FREQ=WEEKLY;BYDAY=SA",
    ministry: { _type: "reference", _ref: "ministry.heavenlyJerusalemAltar" },
    featured: false,
  },
  {
    _id: "event.mensGroup",
    _type: "event",
    title: "Men's Group",
    slug: { _type: "slug", current: "mens-group" },
    description: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Focusing on the Physical, Social, Financial and Spiritual wellbeing of all GCIC men. [CONFIRM meeting time with the church]" }],
      },
    ],
    startDateTime: "2026-08-27T17:00:00.000Z",
    endDateTime: "2026-08-27T19:00:00.000Z",
    location: "The Place, GCIC Tower, Jabi, Abuja",
    isRecurring: true,
    recurrenceRule: "FREQ=MONTHLY;BYDAY=-1TH",
    ministry: { _type: "reference", _ref: "ministry.mensGroup" },
    featured: false,
  },
  {
    _id: "event.hebrewWomen",
    _type: "event",
    title: "Hebrew Women",
    slug: { _type: "slug", current: "hebrew-women" },
    description: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "A spiritual support group for expectant mothers, meeting for a special prayer session with Pastor Mrs Mary Morakinyo. [CONFIRM meeting time with the church]" }],
      },
    ],
    startDateTime: "2026-08-05T09:00:00.000Z",
    endDateTime: "2026-08-05T10:00:00.000Z",
    location: "The Place, GCIC Tower, Jabi, Abuja",
    isRecurring: true,
    recurrenceRule: "FREQ=WEEKLY;BYDAY=WE",
    ministry: { _type: "reference", _ref: "ministry.womenOfImpact" },
    featured: false,
  },
  {
    _id: "event.sistersConference",
    _type: "event",
    title: "Sister's Conference",
    slug: { _type: "slug", current: "sisters-conference" },
    description: [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: "Special Ministrations, Seminars, Skill Acquisition and Empowerment for the women of GCIC. [CONFIRM exact date/time with the church — held bi-monthly]" }],
      },
    ],
    startDateTime: "2026-08-15T15:00:00.000Z",
    endDateTime: "2026-08-15T18:00:00.000Z",
    location: "The Place, GCIC Tower, Jabi, Abuja",
    isRecurring: true,
    recurrenceRule: "FREQ=MONTHLY;INTERVAL=2",
    ministry: { _type: "reference", _ref: "ministry.womenOfImpact" },
    featured: false,
  },
] satisfies SeedEvent[] as SeedEvent[];

async function seedEvents() {
  console.log(`Seeding ${events.length} recurring events...`);
  for (const e of events) {
    await client.createOrReplace(e);
    console.log(`  ✓ ${e.title}`);
  }
  console.log("\nEvents seed complete.");
}

seedEvents().catch((err) => {
  console.error(err);
  process.exit(1);
});
