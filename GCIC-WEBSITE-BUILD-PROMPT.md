# Build Prompt — God's City International Church (GCIC) Website

**How to use this file:** paste this entire document into a coding agent (Claude Code, Cursor,
etc.) as the task brief. It is self-contained — brand, content, information architecture, every
page's sections, the component library, the CMS schema, the integrations, and the acceptance
criteria are all specified below. Where real copy was recovered from the old site it is quoted
directly and marked **[SOURCE]**; where copy needed to be newly written it is marked **[DRAFT —
church to review]**. Nothing in this document should be treated as final legal, financial, or
doctrinal text without the church's sign-off — flag `[DRAFT]` items back to them explicitly.

---

## 0. Mission & non‑negotiables

Build a new, from-scratch website for **God's City International Church (GCIC)**, Abuja, Nigeria,
with a **warm, welcoming, elegant** look and feel, organized clearly around **faith, family, and
discipleship**. This is a full rebuild, not a redesign of the existing WordPress theme.

Hard requirements:

1. **Clean-room build.** The current site (`gcicintchurch.org`, WordPress) is **compromised**. A
   crawl recovered **299 injected gambling/pharma spam URLs** posing as blog posts (multi-language
   casino/betting SEO spam), spam dated as far forward as **July 2026**, and a stray abandoned
   WooCommerce shop selling unrelated oil paintings. Do **not** migrate the WordPress database,
   theme, plugins, or any post/page not explicitly whitelisted in §12. Build fresh.
2. **No inherited platform risk.** Do not stand this site up on WordPress. See §9 for the required
   stack. If credentials to the old CMS exist anywhere in scope, treat them as already rotated /
   do not reuse them.
3. **Real content first.** Use the genuine church content recovered and quoted in this document
   (about, mandate, ministries, pastor's story, service times, giving, contact) as the source of
   truth. Do not invent doctrinal claims. Where a section needs new copy, mark it `[DRAFT]` in the
   CMS content or a `CONTENT-TODO.md` so the church can review before launch.
4. **Fix the known content bug.** The old Children & Youth page has a visibly broken sentence:
   *"...kindly click here to contact us at the teens church**sdfioldfhosidhfsdiofhsfuiusdhfoisdfjsdhoif**."*
   Do not carry this typo forward — see the corrected copy in §5.10.
5. **Warm + elegant, not corporate.** Avoid generic "SaaS landing page" patterns (giant rounded
   gradient blobs, emoji icons, stock-photo hero people). Favor editorial layout, generous
   whitespace, warm photography of the actual congregation (images provided, see §3.5), a confident
   serif for display type, and a restrained, high-contrast crimson-and-ivory palette rooted in the
   church's own logo and brand colors (§3).

---

## 1. Church profile (single source of truth)

Use these facts verbatim across the site — footer, contact page, structured data, service-times
widgets, etc. Do not paraphrase names, dates, or numbers.

| Field | Value |
|---|---|
| Legal / display name | God's City International Church |
| Short name / initialism | GCIC |
| Also known as | Heavenly Jerusalem *(Hebrews 12:22–24 — the name's namesake, not a separate entity)* |
| Founded | Inaugurated **1 May 2016**, inaugural service at the Women Development Centre, Abuja |
| Senior Pastors | Pastor Matthew Morakinyo & Pastor (Mrs.) Mary Morakinyo |
| Mandate (4 pillars) | **Deliverance · Rescue · Restoration · Mobile Fire** |
| Homepage tagline (existing, keep) | "Deliverance \| Rescue \| Restoration \| Global Fire" |
| Anchor scripture | Matthew 28:18–20 (the Great Commission, cited as the mandate's basis) |
| Address | The Place, God's City International Church Tower, No. 16 Ebitu Ukiwe Street, Jabi, Abuja, Nigeria |
| Phone | +234 (0) 915 249 0199 |
| Primary email | gcichq@gcicintchurch.org |
| Facebook | facebook.com/GCICAbuja |
| Instagram | instagram.com/godscityintchurch |
| Twitter/X | twitter.com/GCIC_Powertouch |
| YouTube | youtube.com/channel/UCBG2Fb4NRskNxKGJCLQ9AtQ |
| Spotify (Power Touch Radio podcast) | open.spotify.com/show/3hPGOJZhCSxBh8jPcE9i8K |

### Service & programme schedule (recovered, verbatim)

| Service / programme | When |
|---|---|
| Sunday services | 7:00am, 9:00am, 11:00am |
| Prayer Machine (Conference) | Every day, 12 midnight |
| Morning Dew | Monday–Saturday, 6:00am |
| Night Vigil | Last Friday of every month, 9:00pm |
| Heavenly Jerusalem Altar (home cells) | Every Saturday, 5:00–6:00pm, across multiple locations in the FCT |
| Men's Group | Last Thursday of every month |
| Hebrew Women (expectant mothers' prayer group) | Every Wednesday |
| Outreach | Every Monday, 9:00am |
| Sister's Conference (Women of Impact) | Bi-monthly |
| Telephone Prayer Team | Daily, 7:00am–4:00pm GMT |

### Giving details (recovered, verbatim — display in Giving page, do not alter numbers without church confirmation)

```
BANK / WIRE TRANSFER
Account Name: GOD CITY INTERNATIONAL CHURCH

NAIRA ACCOUNT
GTBank (Guaranty Trust Bank)
Account No: 0534561418

FOREX ACCOUNT
GTBank (Guaranty Trust Bank)
Account No: 0534561425
SWIFT: GTBINGLA
Sort Code: 058083930
```

Online giving categories (from the old Paystack form — keep as the category list): **Offering ·
Tithe · Seed · First Fruit · Thanksgiving Offering · Others** (with a "please specify" free-text
field when Others is chosen).

Anchor scripture for Giving page: **2 Corinthians 9:7–8** — *"Each of you should give what you
have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful
giver. And God is able to bless you abundantly, so that in all things at all times, having all
that you need, you will abound in every good work."* **[SOURCE]**

---

## 2. Recovered copy library (use verbatim unless marked otherwise)

Reproduce this copy on the corresponding new pages (§5). Light copyediting for grammar/typos is
fine; do not alter doctrine, names, or scripture references.

### 2.1 Who We Are **[SOURCE]**

> God's City International Church is a multicultural church inaugurated on the 1st of May 2016
> under the leadership of Pastor Matthew and Pastor Mrs. Mary Morakinyo with an assignment to
> preach the gospel and, with the help of the Holy Spirit, deliver people from sin, sickness,
> power of darkness, poverty, restoration of destiny, and nurture them to be a mobile fire to also
> carry out the same assignment. (Matt 28:18–20)

### 2.2 Our Vision **[SOURCE]**

> Founded on biblical principles, our vision is to and are committed to: Preaching the gospel for
> Deliverance, Rescue, Total Restoration of humanity, and empowering them with the mobile fire
> (Phil 1:19), and above all preparing souls for the Heavenly Kingdom. Planting of several GCIC
> parishes across the world to achieve our mandate. Spreading the values of the gospel through the
> establishment of biblical educational institutions. Promoting the wellbeing of humanity through
> charity. Publication of the gospel.

*(Consider breaking this into 5 distinct vision-statement bullets on the page — see §5.2 — while
keeping every clause verbatim.)*

### 2.3 What We Believe **[SOURCE — a statement of faith, list format]**

1. That the Bible is God's word to all people. Inspired by God, it's the authority on which we
   base our doctrine and faith.
2. That there is one God who exists as one substance in three divine persons: God the Father, God
   the Son, God the Holy Spirit. Although each member of the Trinity serves different functions,
   they each possess equal power and authority.
3. That God the Father is the Creator of all things, all-knowing, unchanging, loving, compassionate
   and faithful to His people and His promises.
4. That Jesus Christ came in human form and at the same time is God. He is the only way for
   bringing lost souls back to God.
5. That the Holy Spirit is who Jesus left us with — a presence that assures us of our relationship
   with Christ.
6. That salvation is God's gift to us; it cannot be earned through our own efforts. We believe
   Jesus died for the preservation of our souls, and salvation is found by placing our faith in
   what Jesus did for us on the cross. It's available to anyone who confesses the Lord Jesus as
   their personal Saviour and believes that God raised Him from the dead to life.
7. That Water Baptism is a symbol of the cleansing power of the blood of Jesus, a testimony to our
   faith in Jesus Christ.
8. That Holy Communion represents the greatest expression of God's love for us on the cross, and
   we regularly partake in this holy exercise in remembrance of our Lord Jesus.
9. That Prayer is a communication process that allows us to interact with God.
10. That Spiritual Growth is what every believer should be inclined towards, constantly aiming for
    a more intimate relationship with God.

### 2.4 From the Pastor — "God's Calling" **[SOURCE]**

> It's my usual practice to seek the face of God for the upcoming year, and as I did the same on
> the 30th of December 2015 with regards to the parish (RCCG) I was pastoring then, I had an
> encounter with God. He spoke to me about the new assignment He had for me. He instructed that I
> should step out of my current place of worship to start a new path with the mandate of
> Deliverance, Rescue, Restoration and Mobile Fire.
>
> The name "God's City International Church," aka Heavenly Jerusalem, was derived from Hebrews
> 12:22–24. To the Glory of God, GCIC was inaugurated on the 1st of May 2016. The inaugural service
> was held at the Women Development Centre, Abuja. Since the inauguration, God has exceeded our
> expectations through His word, signs and wonders.
>
> Praise be to God, many souls have been won, delivered, rescued, restored and empowered with the
> Mobile Fire of God.

Anchor scripture on the leadership page: **Galatians 3:28** — *"There is neither Jew nor Greek,
there is neither slave nor free, there is no male and female, for you are all one in Christ
Jesus."* **[SOURCE]**

### 2.5 Ministry copy (all **[SOURCE]**, condensed to the essential paragraphs — full text may be
restored from the original where the CMS field allows more length)

- **Get Involved** — "See What God Can Do Through You." Tell your friends about church — watch
  someone's life change by inviting a friend during any of our programmes. Join our GCIC team —
  we are committed to changing lives for Christ in our community and the world at large; volunteer
  and see the immediate difference you can make by serving on our team.
- **Night Vigil** — Matthew 13:25, *"But while men slept, his enemy came and sowed tares among the
  wheat, and went his way."* To ward off the enemy, we hold regular night vigils. Our all-night
  vigil holds once a month, every last Friday from 9pm — fortifying our prayer lives, praying for
  healing and help, with lively praise, worship, intense prayer and adoration.
- **Membership Class — "Be Rooted in Christ"** — As a purpose-driven church, we believe in a very
  intentional process for new members, introducing them to each next step in their spiritual
  journey. We currently run a class-like model, commencing with the story, vision and values of the
  church, then proceeding to the teachings of Christ.
- **Heavenly Jerusalem Altar (Home Cells & Evangelism)** — Small groups gather every Saturday from
  5–6pm to teach the Bible and the word of God — to edify the name of the Lord, build up and equip
  one another, fellowship together, and evangelise their neighbourhoods with the Good News. GCIC
  has a number of home cells across the FCT; it's an integral part of our ministry blueprint. If
  you're not connected to an Altar, contact us or speak to a Pastor/Minister after any service.
- **eChurch / Watch Live** — A virtual church designed for those unable to join in person, viewable
  on desktop, tablet, and mobile. We invite you to join the covering of GCIC eChurch and stay
  connected.
- **Men's Group** — Focusing on the Physical, Social, Financial and Spiritual wellbeing of all GCIC
  men (3 John 1:2, 1 Timothy 2:8). Inaugurated in 2016, meeting every last Thursday of the month,
  coordinated by executives from Ministers and Elders.
- **GCIC Training Department (Schools)** — Established to equip the saints for the work of ministry
  (2 Timothy 2:15; John 15:2): Membership School, Workers Academy, Prayer and Deliverance School,
  School of Ministry and Destiny, School of Mission (Evangelism), and School of Worship. Membership
  School turns sinners into members/followers of Christ; Workers Academy turns members into
  workers, workers into ministers, ministers into pastors.
- **Marriage and Family** — Genesis 2:22–24. God is the author of marriage, evidenced from the
  beginning. This ministry helps couples flourish, develop marriage-enhancement and communication
  skills, understand what the Bible says about marriage and family, and grasp the role of prayer in
  a marriage — through counselling, prayer, workshops, coaching sessions and social events. *"Want
  to get married? Contact us."*
- **Outreach** — "Go into the world and preach the gospel to all creation" (Mark 16:15). We reach
  those incarcerated, hospitalized, institutionalized, and in need of the gospel outside a
  traditional church setting, teaching the Word to develop Christlike character. Outreach runs
  every Monday at 9am across neighbourhoods, hospitals and prisons — taking church beyond the four
  walls of our premises.
- **GCIC Children and Youth Club** — Psalm 127:3, *"Lo, children are an heritage of the Lord, and
  the fruit of the womb is His reward."* While parents are in worship and teaching, children
  experience God's awesomeness in a loving environment — guided toward a solid spiritual
  foundation through bible drama, singing, bible study, and more, growing their friendship with
  Jesus. The Teenagers Church presents a play every month during the night vigil. Proverbs 22:6,
  *"Train up a child in the way he should go, and when he is old, he will not depart from it."*
- **Women of Impact** — GCIC strongly believes in recognizing and supporting the contribution of
  women in the ministry of the church and the world at large. Encouraging women to grow in faith
  and walk with the Lord, strengthening friendships, and providing opportunities to serve and
  impact church, community and world — through bi-monthly "Sister's Conference" events (special
  ministrations, seminars, skill acquisition and empowerment). Includes **Hebrew Women**, a
  spiritual support group for expectant mothers (Exodus 1:19), meeting every Wednesday with Pastor
  Mrs. Mary Morakinyo.
- **Welfare** — One vision is a body of Christ united in love, caring for one another at all times.
  The Welfare Department administers general welfare for every member — providing foodstuff,
  clothing, and other help within their capacity to the needy, the elderly, and the less
  privileged in the church.
- **Prayer Requests — "We'd Love to Pray for You"** — We believe God wants to meet you at the point
  of your needs. We have a team of prayer partners who pray for and email people within our
  community and around the world; the Telephone Prayer Team provides prayer and biblical
  encouragement daily, 7am–4pm GMT.
- **Testimony** — "Has God used GCIC to change your life?" We love hearing about the supernatural
  things God is doing, to glorify His name and encourage others. Testimonies are received in good
  faith and may be lightly edited for brevity and fluency; contributors may be contacted for
  additional information and verification.

### 2.6 Blog pull-quote **[SOURCE — attributed]**

> "Life is wasted if we do not grasp the glory of the cross, cherish it for the treasure that it
> is, and cleave to it as the highest price of every pleasure and the deepest comfort in every
> pain. What was once foolishness to us — a crucified God — must become our wisdom and our power
> and our only boast in this world." — **John Piper**

---

## 3. Brand & art direction

### 3.1 Palette

Derived from the church logo (crimson "GCIC" wordmark, green ring text, blue globe) and the old
site's own most-used CSS colors. Refine into a restrained, elegant palette — do not use the old
site's palette wholesale, it was a stock WP-theme default.

```
--color-crimson-600: #B23A38   /* primary brand red — deepened from source #d04a48 for AA contrast on white */
--color-crimson-700: #922E2C   /* hover / pressed */
--color-crimson-50:  #FBEEEC   /* tint backgrounds, badges */

--color-ivory:       #FBF7F0   /* primary warm background, replaces stark white */
--color-sand-100:    #F3ECDF   /* section alternation */
--color-sand-200:    #E7DCC6

--color-ink-900:      #211B18  /* primary text — warm near-black, not pure #000 */
--color-ink-600:      #5B534C  /* secondary text */

--color-forest-700:   #1F4B3F  /* deep green accent, from logo ring — sparingly, for icons/dividers */
--color-navy-700:     #223A5E  /* deep blue accent, from logo globe — sparingly, links on dark bg */

--color-gold-500:     #C9982F  /* accent for highlights, quote marks, dividers — used sparingly */
```

Usage rule: crimson is the *only* saturated color allowed for primary CTAs and active states.
Forest/navy/gold are decorative accents (icon strokes, thin rules, small badges) — never large
fill areas. Large surfaces stay ivory/sand/ink. This keeps "warm and elegant," not "loud."

### 3.2 Typography

- **Display / headings:** an elegant, slightly humanist serif with warmth — e.g. `Fraunces`
  (variable, optical sizing) or `Freight Display`. Use at generous sizes (48–96px hero,
  32–44px section headers) with tight letter-spacing.
- **Body / UI:** a clean humanist sans — e.g. `Inter` or `Public Sans` — for legibility at small
  sizes (forms, nav, captions, long-form devotional reading).
- **Scripture / pull-quotes:** italic serif, larger size, with a decorative opening quote mark in
  gold-500, used consistently across About, Giving, Ministry, and Devotional pages.
- Scale: modular scale ~1.25, base 16/18px body, line-height 1.6 for body copy, 1.15 for display.

### 3.3 Layout language

- Editorial, asymmetric section layouts (not centered-card-grid everywhere) — image bleeding to
  one edge, text column offset, generous top/bottom section padding (96–160px desktop).
- Soft, warm shadows (never harsh black drop-shadows); large images get a thin 1px hairline border
  in sand-200 rather than a shadow, for an "art print" feel.
- Corner radius: 4px on buttons/inputs (crisp, not bubbly), 12–16px on photo/media cards.
- Section dividers: thin gold-500 rule (2px, 64px wide), not full-width lines.

### 3.4 Motion

- Subtle fade/rise on scroll for section entries (200–300ms, ease-out), respect
  `prefers-reduced-motion`.
- Sticky header condenses (reduces height, adds ivory background + hairline shadow) after 80px
  scroll.
- No autoplaying carousels without pause controls; no parallax that could trigger vestibular
  discomfort.

### 3.5 Photography

Use the church's **real** photography recovered from the old site (not stock). Key usable assets
in `assets/images/` of the reference scrape (read-only — copy out, do not edit in place):

| File | Suggested use |
|---|---|
| `hi-res-logo-eacbce.png` | Primary logo — best-resolution version found. Also present: `gcic-logo-9601fc.png`, `cropped-gcic-logo-c58d78.png` for favicons/app icons. |
| `pastor-and-pastor-mrs-ee4c5a.jpeg` | Leadership page hero |
| `pastor-39a0f5.png`, `pastorswife-eeed62.jpeg`, `pmm-standing-87f732.jpg` | Leadership / About supporting images |
| `649321564_1371482815014047_..._n-216926.jpg` | Leadership page secondary image |
| `JAN-29TH-PT-SERVICE-1-scaled-25ebca.jpg`, `JAN-29TH-PT-SERVICE-2-1-scaled-8a2008.jpg`, `SUND-SEV-28TH-JAN-1-scaled-8f6d97.jpg`, `SUN-NOV-26TH-scaled-e1434e.jpg`, `MD-nov-4th-scaled-1db538.jpg` | Homepage hero rotation / service life gallery |
| `mzh-communion-2-scaled-c91664.jpg`, `Communion-1-5c9afc.jpg` | Communion / sacraments imagery |
| `praise-concert-3-scaled-d6fc13.jpg`, `0T0A9943-scaled-4d2204.jpg`, `0T0A0287-scaled-018ebc.jpg`, `0T0A3334-scaled-220ce9.jpg`, `DSC_0124-scaled-4ca826.jpg` | Worship / praise team imagery |
| `children1-b5278a.png` … `children6-b22f2c.png`, `babies-00fc3b.png`, `gcic-children-95de11.jpg` | Children & Youth page gallery |
| `women-199a66.png` (+ crops) | Women of Impact page |
| `teens-camp-967e0a.jpeg` | Youth / camp imagery |
| `gcic-testimonies-51caf8.jpg`, `gcic-testimonies3-c13d2a.jpg` | Testimony page |
| `IMG-20190908-WA00xx*.jpg`, `IMG-20250913-WA0000-6191db.jpg`, `WhatsApp-Image-2026-03-17-...-71b84c.jpeg` | Community life gallery |
| `93854621_..._o-ad5528.jpg`, `644011964_..._n-a8be3f.jpg` | Congregation gallery |

Do **not** use: any `product-*`, `slidergc*`, `stock-photo-*`, `perry-grone-*-unsplash*`, or
`dollarphotoclub_*` files — these are stock/unrelated (leftover WooCommerce shop and generic stock
art). Re-export/optimize chosen photos (WebP/AVIF, responsive `srcset`); apply a light, warm
grade (+2–4% warmth, slight contrast lift) for visual consistency since the source photos vary in
quality.

### 3.6 Logo usage

- Primary lockup: circular badge (globe + flame + "GCIC" wordmark) as-is from `hi-res-logo-eacbce.png`.
- Provide a simplified horizontal wordmark variant for the header at small sizes (agent should
  generate/vectorize a clean SVG version — do not stretch or recolor the recovered raster asset).
- Minimum clear space = height of the flame icon on all sides. Never place on a busy photo without
  a solid or blurred-scrim backing.

---

## 4. Information architecture

### 4.1 Primary navigation (desktop mega-menu / mobile drawer)

```
Home
I'm New            → /new-here            (new: "Plan Your Visit")
About              → /about
  ├─ Who We Are      /about
  ├─ Our Leadership   /about/leadership
  ├─ What We Believe  /about#what-we-believe
  └─ Membership Class /about/membership-class
Ministries         → /ministries
  ├─ Children & Youth   /ministries/children-and-youth
  ├─ Men's Group        /ministries/mens-group
  ├─ Women of Impact    /ministries/women-of-impact
  ├─ Marriage & Family  /ministries/marriage-and-family
  ├─ Outreach           /ministries/outreach
  ├─ Welfare            /ministries/welfare
  ├─ Heavenly Jerusalem Altar (Home Cells)  /ministries/heavenly-jerusalem-altar
  └─ GCIC Training Department (Schools)     /ministries/training-department
Media              → /watch
  ├─ Watch Live / eChurch   /watch
  ├─ Sermons                /sermons
  ├─ Daily Devotional       /devotionals
  └─ Power Touch Radio      /radio
Events             → /events
Give               → /give
Connect            → /contact
  ├─ Contact Us        /contact
  ├─ Prayer Requests   /prayer
  ├─ Share a Testimony /testimony
  └─ Get Involved / Volunteer  /get-involved
```

Utility items (top bar or header-right): service times quick view, social icons, "Give" as a
filled crimson button always visible in the header.

### 4.2 Full sitemap (routes)

```
/                              Home
/new-here                      Plan Your Visit (NEW — see §5.1a)
/about                         Who We Are / Vision / What We Believe
/about/leadership               Pastor Matthew & Pastor (Mrs.) Mary Morakinyo
/about/membership-class          Membership Class
/ministries                     Ministries overview/index
/ministries/children-and-youth
/ministries/mens-group
/ministries/women-of-impact
/ministries/marriage-and-family
/ministries/outreach
/ministries/welfare
/ministries/heavenly-jerusalem-altar
/ministries/training-department
/watch                          eChurch / Watch Live
/sermons                        Sermon library (index + filters)
/sermons/[slug]                 Sermon detail
/devotionals                    Daily Devotional archive
/devotionals/[slug]             Devotional detail
/radio                          Power Touch Radio (podcast)
/events                         Events calendar (list + month grid)
/events/[slug]                  Event detail
/give                           Giving
/get-involved                   Volunteer / Get Involved
/prayer                         Prayer Requests (form)
/testimony                      Share a Testimony (form + published testimonies)
/contact                        Contact
/night-vigil                    Night Vigil programme page
/blog                           Articles / blog index (curated, church-authored only)
/blog/[slug]                    Blog post detail
/gallery                        Photo gallery
/privacy                        Privacy Policy (new)
/give/thank-you                 Giving confirmation
/give/failed                    Giving failed / retry
```

### 4.3 Deliberate IA changes vs. the old site (state these decisions to the church)

- **Removed entirely:** `/shop`, `/cart`, `/checkout`, `/my-account`, `/product/*`,
  `/product-category/*`, `/product-tag/*` — an abandoned WooCommerce art shop unrelated to the
  church's mission. Do not rebuild.
- **Removed entirely:** all `/author/*` archive pages, all `/category/bez-rubriki/`,
  `/category/uncategorized/` pages — WordPress cruft with no content value.
- **Removed entirely:** the 299 spam URLs listed in the crawl's `spam-urls.txt` — none are
  legitimate content and must never be recreated, redirected to, or linked from the new site.
- **Merged:** `/echurch` → folded into `/watch` (one clear "watch live" destination instead of two
  overlapping pages).
- **Split:** the old single "blog" feed (which had become polluted with spam posts) into
  `/devotionals` (short daily scripture + reflection + prayer points, high cadence) and `/blog`
  (longer occasional articles) — separate content types in the CMS, never mixed in one feed again.
- **Added:** `/new-here` (a dedicated "Plan Your Visit" page — very common and expected on modern
  church sites, absent from the old one), `/gallery`, `/privacy`, `/give/thank-you`,
  `/give/failed`.
- **301 redirects required** from every legitimate old URL (see §12 mapping table) to its new
  route. All spam and shop URLs should return a plain 410 Gone — do not redirect them anywhere.

---

## 5. Page-by-page specification

For each page: purpose, ordered sections (top → bottom), copy source, primary CTA, and SEO basics.
Components referenced (`<HeroSplit>`, `<SermonCard>`, etc.) are defined in §6.

### 5.1 Home (`/`)

**Purpose:** Warm first impression; orient a first-time visitor in under 10 seconds; surface what's
happening now (live status, next service, latest sermon/devotional, upcoming event).

1. `<AnnouncementBar>` — optional, dismissible, for time-sensitive items (e.g. "Night Vigil this
   Friday, 9pm"). CMS-editable, empty by default.
2. `<HeroSplit>` — full-bleed rotating photo (from §3.5 service-life set), church name, tagline
   *"Deliverance · Rescue · Restoration · Global Fire"*, two CTAs: **Plan Your Visit** (primary,
   crimson) and **Watch Live** (secondary, outline). If a service is currently live, replace
   secondary CTA with a pulsing **● Live Now** badge linking to `/watch`.
3. `<ServiceTimesStrip>` — condensed horizontal card row of the 3 Sunday times + Morning Dew +
   Prayer Machine, each with day/time, pulled from `serviceTime` CMS entries (§7).
4. `<AboutTeaser>` — 2–3 sentence excerpt from §2.1 "Who We Are," portrait-orientation photo, **Read
   Our Story** link to `/about`.
5. `<FeaturedVideo>` — embed of the most recent flagship sermon/message (e.g. "Divine Nuclear
   Force" style feature), title, one-line description, preacher name, date.
6. `<LatestSermons>` — `<SermonCard>` grid, 3–6 most recent, **View All Sermons** link to
   `/sermons`.
7. `<RadioTeaser>` — Spotify embed for Power Touch Radio + **Visit our Spotify** link.
8. `<MinistryGrid>` — 6–8 `<MinistryCard>` tiles (icon/photo, name, one-line description) linking
   into `/ministries/*`.
9. `<TestimonyCarousel>` — 3–5 short published testimonies, auto-rotating with manual controls and
   pause-on-hover, **Share Your Testimony** CTA to `/testimony`.
10. `<LatestDevotional>` — today's (or most recent) devotional teaser card, **Read Today's
    Devotional** to `/devotionals`.
11. `<GivingBanner>` — 2 Cor 9:7–8 pull-quote + **Give Now** CTA to `/give`.
12. `<BlogTeaser>` — 3–4 latest church-authored blog articles (curated, never auto-pulled from the
    old feed).
13. `<EventsTeaser>` — next 2–3 upcoming events from `/events`.
14. Footer (§6.14).

SEO: title "God's City International Church | Deliverance · Rescue · Restoration · Abuja,
Nigeria"; meta description drawn from §2.1, ≤160 chars.

### 5.1a New Here / Plan Your Visit (`/new-here`) — **[DRAFT — church to review]**

New page, not present on old site but expected by modern visitors.

1. `<HeroSplit>` — warm welcoming photo of congregation, headline "We'd love to meet you," subhead
   reassuring first-timers (what to expect, dress code = come as you are, kids are welcome).
2. `<WhatToExpect>` — 3–4 step visual (arrival/parking → service flow ~90–120 min → kids
   ministry → connect after service).
3. `<ServiceTimesStrip>` (reuse component) + embedded map (address from §1) with directions link.
4. `<FAQAccordion>` — drafted FAQs: "What should I wear?", "Is there a place for my kids?", "How
   long is the service?", "Where do I park?", "Can I watch online first?" (link to `/watch`).
5. `<PlanYourVisitForm>` — optional lightweight form (name, email, # attending, which service) so
   the welcome team can prepare — routes to the same forms backend as Contact (§8.4).
6. CTA row: **Watch Online First** (`/watch`) · **Get Directions**.

### 5.2 About — Who We Are (`/about`)

1. `<PageHeader>` — "About Us," breadcrumb.
2. `<MandateBanner>` — the 4-pillar mandate as large typographic treatment: DELIVERANCE · RESCUE ·
   RESTORATION · MOBILE FIRE.
3. `<WhoWeAre>` — full §2.1 copy, supporting photo.
4. `<OurVision>` — §2.2, broken into 5 clearly delineated statements (Deliverance/Rescue/
   Restoration & Mobile Fire empowerment · Church planting · Biblical education · Charity ·
   Gospel publication), each with a small icon.
5. `<WhatWeBelieve id="what-we-believe">` — §2.3 as a clean numbered/accordion list, each item
   expandable on mobile.
6. `<LeadershipTeaser>` — photo + name of the Pastors, **Meet Our Pastors** link to
   `/about/leadership`.
7. `<CTABand>` — "Ready to take the next step?" → `/about/membership-class` and `/new-here`.

### 5.3 Leadership (`/about/leadership`)

1. `<HeroSplit>` — `pastor-and-pastor-mrs-ee4c5a.jpeg`, Galatians 3:28 pull-quote (§2.4 anchor).
2. `<LeaderProfile>` — "Pastor & Pastor Mrs. Matthew Morakinyo," full §2.4 "God's Calling" story.
3. `<PhotoRow>` — supporting images (`pmm-standing-87f732.jpg`, `649321564_...-216926.jpg`).
4. `<CTABand>` — "Connect with our pastoral team" → `/contact`.

### 5.4 Membership Class (`/about/membership-class`)

1. `<PageHeader>` — "Be Rooted in Christ."
2. `<IntroBlock>` — §2.5 Membership Class copy in full.
3. `<StepsList>` — visualize "story/vision/values → teachings of Christ" as a simple 2-step (or
   expand to however many steps the church actually runs — flag to church as `[CONFIRM STEPS]`).
4. `<PlanYourVisitForm>` reused/retitled "Join the Next Class," fields: name, email, phone,
   preferred class date (if scheduled classes exist — otherwise "notify me").

### 5.5 Ministries index (`/ministries`)

1. `<PageHeader>` — "Ministries."
2. `<IntroBlock>` — 1–2 sentence framing: "Every ministry at GCIC exists to help you grow in faith,
   strengthen your family, and walk out discipleship in community." **[DRAFT]**
3. `<MinistryGrid>` — all 8 ministries as cards (photo, name, one-liner, link).

### 5.6–5.13 Individual ministry pages (`/ministries/*`)

Each follows the same template:

1. `<HeroSplit>` — ministry-specific photo from §3.5, ministry name, anchor scripture where one
   exists in §2.5.
2. `<IntroBlock>` — full recovered copy from §2.5 for that ministry.
3. `<MeetingInfo>` — meeting cadence/time pulled structured (not just prose) so it can also surface
   in `<ServiceTimesStrip>`/`/events` where relevant (Night Vigil, Men's Group, Hebrew Women,
   Outreach, Heavenly Jerusalem Altar all have explicit recurring times — model these as
   `serviceTime` or recurring `event` entries, §7).
4. `<PhotoGallery>` — for Children & Youth specifically, restore the original photo set
   (`children1`–`children6`, `babies`) as a proper `<PhotoGallery>` component (lightbox, alt text
   per image), replacing the old site's bare inline image row.
5. `<CTABand>` — ministry-appropriate CTA (e.g. Marriage & Family → "Want to get married? Contact
   us" linking to `/contact`; Outreach → `/get-involved`; Women of Impact → `/testimony` or
   `/get-involved`).

**5.10 special case — Children & Youth (`/ministries/children-and-youth`):** replace the corrupted
sentence with corrected copy:

> "To receive more information about GCIC Children's Department, kindly [contact us](/contact) —
> we'd love to hear from you." **[DRAFT — replaces broken source sentence, confirm with church]**

**5.13 Training Department (`/ministries/training-department`):** render the six schools (Membership
School, Workers Academy, Prayer and Deliverance School, School of Ministry and Destiny, School of
Mission/Evangelism, School of Worship) as a `<SchoolsGrid>` of 6 cards, each with a one-line
purpose drawn from §2.5's description of the pipeline (sinners → members → workers → ministers →
pastors).

### 5.14 Watch / eChurch (`/watch`)

1. `<PageHeader>` — "Watch Us Live."
2. `<LiveEmbed>` — YouTube embed (channel `UCBG2Fb4NRskNxKGJCLQ9AtQ`) that shows the live stream
   when live, and falls back to the most recent uploaded service video + a clear **"We're not live
   right now — here's our next service time"** state (pulled from `serviceTime`) when offline.
   Never show a broken/empty player.
3. `<IntroBlock>` — §2.5 eChurch copy.
4. `<ServiceTimesStrip>` (reuse).
5. `<SermonArchiveTeaser>` — link to full `/sermons` library.

### 5.15 Sermons library (`/sermons`)

1. `<PageHeader>` + `<SermonFilters>` — filter by series, speaker, scripture book, date range;
   full-text search box.
2. `<SermonGrid>` — paginated `<SermonCard>` results (thumbnail from video, title, speaker, date,
   series tag, scripture reference).
3. Empty/no-results state with a "clear filters" action.

### 5.16 Sermon detail (`/sermons/[slug]`)

1. Video/audio embed, title, speaker, date, series, scripture reference(s).
2. Description / summary.
3. Downloadable notes/points if provided (optional field).
4. Share buttons, **Related Sermons** (same series or speaker), **Related Devotionals** if tagged.

### 5.17 Daily Devotional archive (`/devotionals`) & detail (`/devotionals/[slug]`)

Restore this as a proper, separate content type (it was previously mixed into the general blog and
buried under spam). Archive: reverse-chronological list/grid with a compact `<DevotionalCard>`
(date, topic, scripture reference, short excerpt). Detail page format, based on the recovered
structure (topic/text/words of wisdom/assignment/prayer points/declaration), e.g. §2's devotional
example:

1. `<PageHeader>` — Topic (e.g. "PRAYERS OF THANKSGIVING"), date, category "Daily Devotional."
2. **TEXT** — scripture reference + full quoted verse.
3. **WORDS OF WISDOM** — reflection paragraphs.
4. **ASSIGNMENT** — short actionable prompt(s).
5. **PRAYER POINTS** — numbered list.
6. **The Senior Pastor's prophetic declaration** — pull-quote styled distinctly (gold accent).
7. **Bible in a Year** reading reference.
8. Prev/Next devotional navigation, **Related Articles**.

### 5.18 Power Touch Radio (`/radio`)

The old page was a bare stub — rebuild properly:

1. `<HeroSplit>` — radio/podcast branding.
2. `<SpotifyEmbed>` — full show embed (show ID `3hPGOJZhCSxBh8jPcE9i8K`).
3. `<EpisodeList>` — pull latest episodes via Spotify oEmbed/API if feasible, else link out to
   Spotify.
4. Links to other platforms if the church provides them (Apple Podcasts, etc. — `[CONFIRM]`).

### 5.19 Events (`/events`) & detail (`/events/[slug]`)

1. `<PageHeader>` + view toggle: **List** / **Month Calendar**.
2. `<EventList>` or `<EventCalendarGrid>` — recurring programmes (Night Vigil, Outreach, Heavenly
   Jerusalem Altar, Men's Group, Hebrew Women, Sister's Conference) auto-populate from their
   `recurrence` rule (§7) plus one-off special events entered by staff.
3. Detail page: date/time, location, description, add-to-calendar (.ics download), map if
   off-site, related ministry link.

### 5.20 Giving (`/give`)

1. `<HeroSplit>` — warm photo, 2 Cor 9:7–8 pull-quote (§1).
2. `<GivingTabs>` — **Give Online** / **Bank Transfer**.
   - *Give Online:* Paystack inline checkout. Fields: Full Name*, Email*, Amount (NGN)*, Phone*,
     Giving Category* (Offering/Tithe/Seed/First Fruit/Thanksgiving/Others + specify), optional
     note. Show transaction fee + total before submit (as the old form did). On success → redirect
     `/give/thank-you` with a receipt emailed to the giver. On failure → `/give/failed` with a
     clear retry CTA and support contact.
   - *Bank Transfer:* render the NGN and FOREX account block from §1 verbatim, with a copy-to-
     clipboard affordance per field, plus a short note "After transferring, you may notify us at
     gcichq@gcicintchurch.org so we can issue a receipt."
3. `<GivingFAQAccordion>` — "Is my gift secure?", "Can I give from outside Nigeria?", "Can I set up
   recurring giving?", "How do I get a giving statement?" **[DRAFT]**
4. `<CTABand>` — "Questions about giving?" → `/contact`.

### 5.21 Get Involved / Volunteer (`/get-involved`)

1. `<PageHeader>` — "See What God Can Do Through You."
2. `<IntroBlock>` — §2.5 Get Involved copy in full.
3. `<VolunteerAreasGrid>` — ties into ministries (Welcome Team, Children & Youth, Media/Tech,
   Outreach, Ushering, Choir/Worship, Welfare) — **[DRAFT list, confirm with church]**.
4. `<VolunteerForm>` — Name*, Email*, Phone, Area of Interest (multi-select from grid above),
   Message.

### 5.22 Prayer Requests (`/prayer`)

1. `<PageHeader>` — "We'd Love to Pray for You," full §2.5 Prayer Requests copy.
2. `<PrayerForm>` — Full Name, Email*, Phone, Prayer Area (General / Deliverance / Spiritual
   Growth / Financial Growth / Physical Growth / Relationship — from the recovered form), Message*.
3. Note on confidentiality: prayer requests are private and only shared with the prayer team
   **[DRAFT — confirm actual handling policy with church before publishing this claim]**.
4. `<ContactBand>` — Telephone Prayer Team hours (7am–4pm GMT daily) + phone number.

### 5.23 Share a Testimony (`/testimony`)

1. `<PageHeader>` — "Has God used GCIC to change your life?" full §2.5 copy including the "edited
   only for brevity and fluency; you may be contacted for verification" disclosure — keep this
   disclosure, it's good consent language.
2. `<TestimonyForm>` — Name, Email*, Testimony* (textarea).
3. `<PublishedTestimonies>` — grid/list of approved testimonies (CMS-moderated, §7).

### 5.24 Contact (`/contact`)

1. `<PageHeader>` — "Contact."
2. `<ContactForm>` — Name*, Email*, Subject, Message*.
3. `<ContactInfoCard>` — address, email, phone from §1, embedded map.
4. `<SocialRow>` — all social links from §1.
5. `<ServiceTimesStrip>` (reuse) so a first-time contact still sees when to show up.

### 5.25 Night Vigil (`/night-vigil`)

Kept as its own landing page (it's a flagship recurring programme worth its own URL for
sharing/marketing), not just buried in `/ministries`:

1. `<HeroSplit>` — night/prayer-themed photo, "Last Friday of every month, 9pm."
2. `<IntroBlock>` — full §2.5 Night Vigil copy including Matthew 13:25.
3. `<AddToCalendar>` — recurring .ics.
4. `<CTABand>` → `/watch` (if streamed) and `/new-here`.

### 5.26 Blog (`/blog`, `/blog/[slug]`)

Curated, church-authored articles only — this is the type that was compromised on the old site, so
enforce: only content authored via the CMS by verified staff accounts, no open comments/trackbacks,
no auto-publishing from external feeds. Standard article template: hero image, title, author,
date, category, body (rich text), related articles, share buttons.

### 5.27 Photo Gallery (`/gallery`)

New page consolidating the many loose photo sets found across the old site (children, women,
service moments, communion, praise team) into one browsable, filterable (by category/ministry/
event) masonry gallery with lightbox.

### 5.28 Privacy Policy (`/privacy`) — **[DRAFT — church/legal to review before publish]**

Standard sections: what data is collected (contact/prayer/testimony/giving forms), how it's used,
third parties (Paystack, YouTube, Spotify embeds, analytics), data retention, contact for data
requests, cookie notice. Required given the site now runs contact/prayer/testimony/giving forms
and third-party embeds.

### 5.29 Give confirmation/failure (`/give/thank-you`, `/give/failed`)

Minimal, warm confirmation/apology pages per the old site's intent (`donation-confirmation`,
`donation-failed` existed) — thank-you page restates the 2 Cor 9:7–8 verse; failure page gives a
clear retry button and the bank-transfer alternative.

---

## 6. Component inventory

Build these as a reusable component library (e.g. `/components/`), documented with props/variants.
Every component must be responsive (mobile-first), keyboard-navigable, and support dark-mode-free
but high-contrast rendering (this brand does not need a dark theme).

1. **`<Header>`** — logo, primary nav (mega-menu on desktop ≥1024px, drawer on mobile), "Give"
   button always visible, condenses on scroll (§3.4). States: default, condensed, mobile-open,
   sub-menu-open.
2. **`<AnnouncementBar>`** — dismissible (session-persisted), CMS-driven text + optional link.
3. **`<HeroSplit>`** — image/video (left or right, alternates per page), headline, subhead, 1–2
   CTAs. Variant: `withRotatingImages` (homepage), `static` (interior pages).
4. **`<ServiceTimesStrip>`** — horizontal (desktop) / stacked (mobile) list of service/programme
   cards, each: label, day(s), time. Data-driven from `serviceTime` CMS type.
5. **`<MandateBanner>`** — large 4-word typographic treatment with subtle animated underline reveal
   on scroll-into-view.
6. **`<SermonCard>`** — thumbnail (from video), title, speaker, date, series badge, duration.
   States: default, hover (play icon overlay).
7. **`<DevotionalCard>`** — date, topic, scripture ref, 2-line excerpt.
8. **`<EventCard>`** — date block (day/month), title, time, location, ministry tag.
9. **`<MinistryCard>`** — photo, name, one-liner, arrow-link hover state.
10. **`<LeaderProfile>`** — photo, name/title, bio rich text, scripture pull-quote.
11. **`<TestimonyCarousel>`** — accessible carousel (buttons + dot indicators + pause on
    hover/focus, `aria-live="polite"`), quote, name (or "Anonymous" if requested), date.
12. **`<GivingTabs>` / `<GivingForm>` / `<BankDetailsPanel>`** — see §5.20 and §8.1.
13. **`<PrayerForm>` / `<TestimonyForm>` / `<ContactForm>` / `<VolunteerForm>` /
    `<PlanYourVisitForm>`** — shared `<FormField>` primitives (text, email, tel, select, textarea,
    checkbox), inline validation, honeypot + rate-limit protected (§8.4), success/error toast +
    persistent confirmation state (not just a toast that disappears).
14. **`<Footer>`** — logo + tagline, ministries link list, programmes link list, contact info,
    social row, service-times mini, copyright, `/privacy` link.
15. **`<PhotoGallery>`** — responsive masonry, lightbox with keyboard nav (Esc/←/→), alt text
    required per image.
16. **`<LiveEmbed>`** — YouTube live/fallback logic per §5.14.
17. **`<SpotifyEmbed>`** — lazy-loaded iframe.
18. **`<FAQAccordion>`** — single or multi-open, `aria-expanded` managed.
19. **`<CTABand>`** — full-width crimson or sand background band, headline + button(s).
20. **`<PageHeader>`** — breadcrumb + title, consistent across interior pages.
21. **`<AddToCalendar>`** — generates `.ics` for one-off and recurring events.

---

## 7. CMS content model (Sanity)

Use **Sanity Studio** (embedded at `/studio` or a separate app) as the headless CMS so
non-technical church staff can post sermons, devotionals, events, and moderate testimonies without
a developer. Define these document schemas (`schemaTypes/`):

```ts
// siteSettings (singleton)
{
  churchName, shortName, tagline, mandateStatement,
  address: { line1, line2, city, country },
  phone, email,
  socials: { facebook, instagram, twitter, youtube, spotify },
  giving: {
    ngnAccountName, ngnAccountNumber, ngnBankName,
    forexAccountName, forexAccountNumber, forexSwift, forexSortCode,
    categories: [string] // Offering, Tithe, Seed, First Fruit, Thanksgiving Offering, Others
  },
  logo, wordmarkSvg, favicon,
  defaultSeo: { title, description, ogImage }
}

// serviceTime
{ label, days: [enum Mon..Sun], time, cadence: 'weekly'|'daily'|'monthlyLastFriday'|'monthlyLastThursday'|'biMonthly',
  ministry?: reference<ministry>, isFeatured: boolean }

// ministry
{ name, slug, summary, body (portable text), heroImage, gallery: [image],
  anchorScripture?: { reference, text }, meetingInfo?: reference<serviceTime>,
  ctaLabel, ctaHref, order }

// leader
{ name, role, photo, bio (portable text), scriptureQuote, order }

// sermon
{ title, slug, speaker: reference<leader> | string, series?, scriptureRefs: [string],
  date, videoUrl (YouTube), audioUrl?, description, notesFile?, tags: [string] }

// devotional
{ title, slug, date, scriptureRef, scriptureText, wordsOfWisdom (portable text),
  assignment (portable text), prayerPoints: [string], declaration?, bibleInAYearRef?,
  relatedArticles: [reference] }

// event
{ title, slug, description, startDateTime, endDateTime?, location, isRecurring: boolean,
  recurrenceRule? (RRULE string), ministry?: reference<ministry>, image, featured: boolean }

// testimony
{ name, email (private, not rendered), testimonyText, status: 'pending'|'approved'|'rejected',
  submittedAt, approvedAt? }
  // form submissions from §5.23 create draft docs with status:'pending'; staff approve in Studio.

// blogPost
{ title, slug, author: reference<staffAuthor>, category, heroImage, body (portable text),
  publishedAt, excerpt, seo }

// staffAuthor
{ name, photo, role } // internal — used to enforce "verified staff only" authorship on blogPost

// announcement
{ text, linkLabel?, linkHref?, startDate, endDate, isActive }

// galleryAlbum
{ title, category (Children|Women|Worship|Communion|Community|Events), images: [{image, alt}] }

// pageSection (optional generic block)
{ page: enum, sectionKey, heading, body, image } // for church-editable copy blocks on marketing pages
```

Desk structure: group by **Content** (Sermons, Devotionals, Blog Posts), **Engagement**
(Testimonies — split pending/approved views, Prayer Request log — internal only, not public
documents), **Programme** (Ministries, Events, Service Times), **People** (Leaders, Staff Authors),
**Site** (Settings, Announcements, Gallery Albums).

**Seeding:** write a one-time `scripts/seed.ts` that imports the recovered content from §2 into
these schemas (ministries, leaders, site settings, one sample devotional using the recovered
example in §5.17) so the site launches with real content, not empty states. Do not seed any
sermon/blog content from the compromised feed — only the hand-picked "Latest Sermons" list quoted
in the homepage extract may be seeded as historical sermon records if the church confirms they're
legitimate (`[CONFIRM WITH CHURCH]`).

---

## 8. Feature specifications

### 8.1 Giving (Paystack)

- Use **Paystack Inline JS** for NGN transactions (matches the church's existing GTBank/Paystack
  relationship). Server-side: a route handler creates the transaction (amount, email, metadata:
  category, name, phone) and verifies the Paystack webhook/callback before marking a `donation`
  record complete — **never trust client-side "success" alone.**
- Store donation records server-side only in a private collection (not public Sanity) — payment
  amounts/personal data must not be queryable via the public API. Suggest a lightweight database
  (e.g. Postgres via a serverless provider, or Sanity with strict role-based access + no public
  read token) — do not store card data anywhere; Paystack handles PCI scope.
- Forex givers who can't use Paystack NGN checkout see the bank-transfer panel (§5.20) as the
  primary path; do not force a currency conversion widget without the church confirming they want
  one.
- Email a receipt (giver's email) and an internal notification (finance email — `[CONFIRM
  ADDRESS]`) on successful transaction.

### 8.2 Live streaming / eChurch

- Embed the church's YouTube channel using the YouTube IFrame API, detect live status via the
  YouTube Data API (`liveBroadcastContent`), and swap between "live now" player and "next service"
  fallback card automatically (§5.14). Cache the live-status check (poll every 60–120s while the
  page is open, not on every request).

### 8.3 Sermon/devotional search

- Full-text search across `sermon` and `devotional` titles, descriptions, and scripture references.
  Use Sanity's GROQ full-text (`match`) for a first pass; if search quality needs improvement later,
  note Algolia as a documented upgrade path rather than building it day one.

### 8.4 Forms (Prayer, Testimony, Contact, Volunteer, Plan Your Visit, Newsletter)

- All forms submit to Next.js Route Handlers (`app/api/forms/*/route.ts`), not client-side email
  services, so submissions can be validated, rate-limited, and logged.
- Spam protection: honeypot field + timing check (reject submissions faster than ~2s) +
  optional Turnstile/hCaptcha if spam volume warrants it later (flag as a launch-if-needed item,
  not required day one — this is a church contact form, not a public comment system, so keep
  friction low).
- Testimony submissions create a `pending` Sanity document (§7) for staff moderation — never
  auto-publish.
- Prayer request submissions are **never** stored as public/queryable content — route directly to
  the prayer team's email/notification channel and store only in a private, access-controlled
  collection for basic logging; do not create public Sanity documents for prayer requests.
- Contact/volunteer/newsletter submissions route to the church's general inbox
  (`gcichq@gcicintchurch.org`) via a transactional email provider (e.g. Resend/Postmark/SES) — do
  not rely on `mailto:` links, which the recovered site's forms suggest but which are unreliable.
- Every form shows a persistent success state after submit (not just a fading toast) confirming
  what happens next ("We'll be in touch within 2 business days," etc. — `[DRAFT wording, confirm
  SLA with church]`).

### 8.5 Events & calendar

- Recurring programmes (Night Vigil, Outreach, Heavenly Jerusalem Altar, Men's Group, Hebrew Women,
  Sister's Conference, Morning Dew, Prayer Machine) are modeled with `recurrenceRule` so they
  auto-populate the calendar indefinitely without manual re-entry each month.
- `.ics` export per event and a "subscribe to all GCIC events" calendar feed URL.

### 8.6 Photo galleries

- Lazy-loaded, responsive masonry with lightbox; images served via an image CDN/pipeline
  (Next.js `<Image>` + Sanity's image CDN, or an equivalent) with automatic WebP/AVIF and
  responsive sizing — do not ship the original multi-hundred-KB PNGs found in the old asset dump
  unoptimized.

---

## 9. Technical requirements

- **Framework:** Next.js (App Router, latest stable), TypeScript throughout, React Server
  Components by default; Client Components only where interactivity requires (forms, carousels,
  filters, live embed, mega-menu).
- **Styling:** Tailwind CSS with a theme config implementing the tokens in §3.1–3.3 (colors, font
  families, spacing, radius) as first-class Tailwind theme extensions — no ad hoc inline hex
  values in components.
- **CMS:** Sanity (see §7), fetched via `next-sanity`, with ISR (`revalidate`) on content pages and
  on-demand revalidation via a Sanity webhook → Next.js revalidate route for instant publish.
- **Forms/backend:** Next.js Route Handlers; transactional email via Resend/Postmark/SES
  (`[CONFIRM PROVIDER]`); Paystack SDK for giving.
- **Hosting:** Vercel (or equivalent Next.js-native host) — `[CONFIRM]` if the church has an
  existing hosting preference/contract.
- **Images:** `next/image` with Sanity's image pipeline for CMS images; static brand assets
  optimized and served as WebP/AVIF with PNG/SVG fallback for the logo.
- **SEO:** `next-sitemap` for `sitemap.xml`/`robots.txt`; per-page `generateMetadata`; JSON-LD:
  `Church`/`Organization` schema on `/`, `Event` schema on event pages, `VideoObject` on sermon
  pages, `Article` on blog/devotional pages.
- **Analytics:** privacy-respecting analytics (e.g. Plausible or GA4 behind consent) —
  `[CONFIRM PROVIDER]`; wire key events (Give clicks, Watch Live clicks, form submissions).
- **Environment variables (minimum):**
  ```
  NEXT_PUBLIC_SANITY_PROJECT_ID
  NEXT_PUBLIC_SANITY_DATASET
  SANITY_API_READ_TOKEN
  SANITY_REVALIDATE_SECRET
  PAYSTACK_SECRET_KEY
  NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
  YOUTUBE_API_KEY
  YOUTUBE_CHANNEL_ID
  RESEND_API_KEY (or chosen email provider)
  NEXT_PUBLIC_SITE_URL
  ```
- **Repo layout:** standard Next.js App Router structure (`app/`, `components/`, `sanity/`,
  `lib/`, `scripts/seed.ts`), plus this document retained at the repo root as
  `GCIC-WEBSITE-BUILD-PROMPT.md` for future contributors.

---

## 10. Accessibility & performance bar

- **WCAG 2.2 AA** minimum across the site: color contrast (verify the crimson-600/ivory pairing and
  ink-900/ivory pairing both pass AA for body text at chosen weights), full keyboard operability
  (header mega-menu, carousels, accordions, lightbox, forms), visible focus states (no
  `outline: none` without a replacement), semantic landmarks (`header`/`nav`/`main`/`footer`),
  accurate heading hierarchy per page, alt text on every content image (empty `alt=""` only for
  true decorative images).
- Respect `prefers-reduced-motion` — disable scroll-reveal and carousel auto-advance for users who
  request it.
- Forms: label every input, associate errors with `aria-describedby`, never rely on color alone
  for validation state.
- **Performance targets:** Lighthouse Performance/Accessibility/Best Practices/SEO ≥95 on key pages
  (Home, Sermons, Give); LCP < 2.0s and CLS < 0.05 on a simulated 4G/mid-tier mobile profile;
  total JS on first load kept lean by defaulting to Server Components and code-splitting
  interactive widgets (carousel, live embed, giving form) behind dynamic import where sensible.

---

## 11. Security requirements

- This build exists specifically **because** the previous WordPress install was compromised — treat
  security as a first-class requirement, not an afterthought.
- No PHP, no WordPress, no plugin surface area. Route Handlers and the CMS are the only
  server-side logic.
- Set strict security headers: `Content-Security-Policy` (allow-list only Sanity, YouTube, Spotify,
  Paystack, and the chosen email/analytics providers), `X-Frame-Options`/`frame-ancestors`,
  `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`.
- Secrets (Paystack secret key, Sanity write token, email API key) live only in server-side
  environment variables, never exposed to the client bundle — audit that only `NEXT_PUBLIC_*`
  vars reach the browser.
- Rate-limit all form Route Handlers (per-IP) to blunt spam/bot abuse — the exact vector that
  turned the old blog into a spam farm must not recur here.
- Sanity Studio access restricted to named staff accounts with role-based permissions (editors
  can't touch `siteSettings`/schema; only admins can); public Sanity API token is **read-only**.
- Dependabot/Renovate (or equivalent) enabled for dependency updates; no dependency older than the
  last 12 months without justification at launch.

---

## 12. Content migration & rejection table

| Recovered content | Action | New location |
|---|---|---|
| Home (`page-53a82f.md`) | Rebuild per §5.1 | `/` |
| About Us (`about-us-2-01365b.md`, `page-cf2a0f.md`) | Merge, use §2.1–2.3 | `/about` |
| Pastor bio (`page-1ef7d1.md`) | Use §2.4 verbatim | `/about/leadership` |
| Get Involved (`page-38743c.md`) | Use §2.5 | `/get-involved` |
| Night Vigil (`page-cc54cf.md`) | Use §2.5 | `/night-vigil` + ministry teaser |
| Membership Class (`page-c2480d.md`) | Use §2.5 | `/about/membership-class` |
| Heavenly Jerusalem Altar (`page-9deee9.md`) | Use §2.5 | `/ministries/heavenly-jerusalem-altar` |
| eChurch (`page-e4fa1c.md`) | Use §2.5 | `/watch` |
| Men's Group (`page-73f721.md`) | Use §2.5 | `/ministries/mens-group` |
| Training Department (`page-db6f4c.md`) | Use §2.5 | `/ministries/training-department` |
| Marriage and Family (`page-17f59f.md`) | Use §2.5 | `/ministries/marriage-and-family` |
| Outreach (`page-526223.md`) | Use §2.5 | `/ministries/outreach` |
| Children and Youth (`page-326111.md`) | Use §2.5, **fix broken sentence** (§5.10) | `/ministries/children-and-youth` |
| Giving (`page-0ff0bc.md`) | Use §1 bank details + §5.20 | `/give` |
| Contact (`contact-a56d3b.md`) | Use §1 | `/contact` |
| Women of Impact (`women-of-impact-68dd61.md`) | Use §2.5 | `/ministries/women-of-impact` |
| Welfare (`welfare-d6838a.md`) | Use §2.5 | `/ministries/welfare` |
| Prayer Requests (`prayer-requests-a468c2.md`) | Use §2.5 | `/prayer` |
| Testimony (`testimony-1cc88b.md`) | Use §2.5 | `/testimony` |
| Radio (`radio-2f0232.md`) | Stub only — rebuild fully per §5.18 | `/radio` |
| Daily Devotional posts (`daily-devotional-*.md`, `category/daily-devotional/*`) | Model as `devotional` content type; migrate legitimate dated entries only after church confirms authorship | `/devotionals` |
| Sermons list (from homepage extract) | Confirm legitimacy, seed as `sermon` records if confirmed | `/sermons` |
| **299 spam URLs** (`spam-urls.txt`) | **Reject.** Do not migrate, redirect, or reference. Serve 410 if requested. | — |
| WooCommerce shop/cart/account/products | **Reject.** Not part of the church's mission. | — |
| `/author/*` archive pages | **Reject.** WordPress artifact, no content value. | — |
| `category/bez-rubriki`, `category/uncategorized` | **Reject.** | — |
| Casino/gambling/dating/legal-services guest-post articles found mixed into the blog feed (evictions, motorcycle-buying, marital separation agreements, etc.) | **Reject.** Off-topic spam, not church content, regardless of language. | — |

Every legitimate old URL not listed above but present in the sitemap section of
`REDESIGN-BRIEF.md` should be reviewed case-by-case with the church before either migrating or
rejecting — this table covers the primary/high-confidence pages only.

---

## 13. Build order & acceptance criteria

**Phase 1 — Foundation**
- [ ] Repo scaffolded (Next.js + TS + Tailwind + Sanity Studio wired), design tokens from §3 in
      `tailwind.config`, `<Header>`/`<Footer>` built and responsive.
- [ ] Sanity schemas from §7 deployed; `scripts/seed.ts` run, `siteSettings`/`serviceTime`/
      `ministry`/`leader` populated with real recovered content.
- **DoD:** a blank-but-branded site deploys, nav works, footer contact info matches §1 exactly.

**Phase 2 — Core pages**
- [ ] Home, About, Leadership, all 8 Ministry pages, New Here, Contact, Night Vigil built per §5.
- **DoD:** every recovered copy block from §2 appears on its mapped page verbatim (spot-check via
      the grep in Verification below); no lorem ipsum remains.

**Phase 3 — Media & content types**
- [ ] Sermons library + detail, Devotionals archive + detail, Radio, Watch/eChurch live embed,
      Gallery.
- **DoD:** `/watch` correctly shows live vs. fallback state (test both); at least one seeded
      devotional renders the full structured format from §5.17.

**Phase 4 — Engagement & giving**
- [ ] Events calendar w/ recurring programmes, Prayer/Testimony/Contact/Volunteer/Plan-Your-Visit
      forms wired to Route Handlers + email, Giving (Paystack + bank transfer), Blog.
- **DoD:** submitting each form produces a confirmation state and an actual email/notification;
      a test Paystack transaction (test mode) completes and produces a `/give/thank-you` state
      with a logged donation record.

**Phase 5 — Hardening & launch**
- [ ] Security headers, rate limiting, a11y audit against §10, Lighthouse pass against §10,
      301 redirect map from §12/`REDESIGN-BRIEF.md` implemented, `/privacy` published, sitemap/
      robots/JSON-LD verified, spam-URL rejection confirmed (no old spam paths resolve to 200).
- **DoD:** all checks in the Verification section below pass.

### Verification checklist for the finished build

1. `curl` (or fetch) every URL in §4.2's sitemap and confirm a 200 with correct `<title>`.
2. Confirm every URL in the old spam list and shop paths returns 404/410, never 200.
3. Run an automated accessibility scan (axe or Lighthouse) on Home, Give, Contact, Sermons — all
   pass WCAG 2.2 AA with zero critical/serious issues.
4. Submit each form in a staging environment and confirm an email/notification arrives and a
   persistent success state renders.
5. Toggle a test Sanity `event` with a `recurrenceRule` and confirm it appears correctly on
   `/events` across multiple months.
6. Verify `/watch` live-detection against a real or simulated live YouTube broadcast.
7. Confirm the Children & Youth page no longer contains the broken
   `sdfioldfhosidhfsdiofhsfuiusdhfoisdfjsdhoif` string anywhere in the codebase or CMS content.
8. Confirm giving bank details on `/give` exactly match §1 (character-for-character, especially
   account numbers and SWIFT/sort code).
