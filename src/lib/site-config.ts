/**
 * Static church profile & nav data used to bootstrap the Header/Footer before
 * the Sanity `siteSettings` singleton (see GCIC-WEBSITE-BUILD-PROMPT.md §7) is
 * wired up. Once Sanity is live, fetch this data from the CMS instead.
 */

export const siteConfig = {
  churchName: "God's City International Church",
  shortName: "GCIC",
  tagline: "Deliverance. Rescue. Restoration. Mobile Fire.",
  address: {
    line1: "The Place, God's City International Church Tower",
    line2: "No. 16 Ebitu Ukiwe Street, Jabi, Abuja, Nigeria",
  },
  phone: "+234 (0) 915 249 0199",
  email: "gcichq@gcicintchurch.org",
  socials: {
    facebook: "https://facebook.com/GCICAbuja",
    instagram: "https://instagram.com/godscityintchurch",
    twitter: "https://twitter.com/GCIC_Powertouch",
    youtube: "https://www.youtube.com/channel/UCBG2Fb4NRskNxKGJCLQ9AtQ",
    spotify: "https://open.spotify.com/show/3hPGOJZhCSxBh8jPcE9i8K",
  },
} as const;

export const serviceTimes = [
  { label: "Sunday Service", time: "7:00am, 9:00am, 11:00am" },
  { label: "Prayer Machine", time: "Daily, 12 midnight" },
  { label: "Morning Dew", time: "Mon-Sat, 6:00am" },
] as const;

/** Small real facts used in the homepage hero's stat strip — see HeroFullBleed. */
export const quickFacts = [
  { value: "2016", label: "Founded" },
  { value: "3", label: "Sunday Services" },
  { value: "24/7", label: "Prayer Line" },
] as const;

export type NavLink = { label: string; href: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "I'm New", href: "/new-here" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Leadership", href: "/about/leadership" },
      { label: "What We Believe", href: "/about#what-we-believe" },
      { label: "Membership Class", href: "/about/membership-class" },
    ],
  },
  {
    label: "Ministries",
    href: "/ministries",
    children: [
      { label: "Children & Youth", href: "/ministries/children-and-youth" },
      { label: "Men's Group", href: "/ministries/mens-group" },
      { label: "Women of Impact", href: "/ministries/women-of-impact" },
      { label: "Marriage & Family", href: "/ministries/marriage-and-family" },
      { label: "Outreach", href: "/ministries/outreach" },
      { label: "Welfare", href: "/ministries/welfare" },
      { label: "Heavenly Jerusalem Altar", href: "/ministries/heavenly-jerusalem-altar" },
      { label: "Training Department", href: "/ministries/training-department" },
    ],
  },
  {
    label: "Media",
    href: "/watch",
    children: [
      { label: "Watch Live / eChurch", href: "/watch" },
      { label: "Sermons", href: "/sermons" },
      { label: "Daily Devotional", href: "/devotionals" },
      { label: "Power Touch Radio", href: "/radio" },
      { label: "Blog", href: "/blog" },
      { label: "Photo Gallery", href: "/gallery" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    label: "Connect",
    href: "/contact",
    children: [
      { label: "Contact Us", href: "/contact" },
      { label: "Prayer Requests", href: "/prayer" },
      { label: "Share a Testimony", href: "/testimony" },
      { label: "Get Involved", href: "/get-involved" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export const footerNav = {
  ministries: [
    { label: "Children and Youth Club", href: "/ministries/children-and-youth" },
    { label: "Men's Group", href: "/ministries/mens-group" },
    { label: "Marriage and Family", href: "/ministries/marriage-and-family" },
    { label: "Outreach", href: "/ministries/outreach" },
    { label: "Training Department (Schools)", href: "/ministries/training-department" },
  ] satisfies NavLink[],
  programmes: [
    { label: "Heavenly Jerusalem Altar", href: "/ministries/heavenly-jerusalem-altar" },
    { label: "Membership Class", href: "/about/membership-class" },
    { label: "Night Vigil", href: "/night-vigil" },
    { label: "Prayer Requests", href: "/prayer" },
  ] satisfies NavLink[],
  explore: [
    { label: "Blog", href: "/blog" },
    { label: "Sermons", href: "/sermons" },
    { label: "Daily Devotional", href: "/devotionals" },
    { label: "Events", href: "/events" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Watch Live / eChurch", href: "/watch" },
  ] satisfies NavLink[],
};
