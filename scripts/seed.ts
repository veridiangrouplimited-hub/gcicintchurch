/**
 * One-time content seed — imports the recovered, verified church content
 * (see GCIC-WEBSITE-BUILD-PROMPT.md §2 and §7) into Sanity so the site
 * launches with real copy instead of empty states.
 *
 * Requires a Sanity write token:
 *   SANITY_API_WRITE_TOKEN=... npx tsx scripts/seed.ts
 *
 * Safe to re-run — every document uses a fixed, deterministic `_id` and is
 * written with `createOrReplace`, so re-running updates rather than duplicates.
 *
 * Deliberately NOT seeded here: sermons, blog posts, and devotionals scraped
 * from the old site. Per §7/§12, those need church confirmation of legitimacy
 * before import, since the old feed was compromised with spam.
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";

config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN.\n" +
      "Set these in .env.local (see .env.local.example) before running the seed script."
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

function block(text: string) {
  return {
    _type: "block" as const,
    style: "normal",
    children: [{ _type: "span" as const, text }],
  };
}

// Loose type for seed fixtures — these are hand-authored, heterogeneous
// documents, not app-facing data, so we trade strict per-schema typing for a
// single shape the loops below can iterate over without TS narrowing each
// literal down to its own one-off type.
type SeedItem = { _id: string } & Record<string, unknown>;

async function seed() {
  console.log(`Seeding dataset "${dataset}" on project "${projectId}"...`);

  // --- siteSettings (singleton) --------------------------------------
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    churchName: "God's City International Church",
    shortName: "GCIC",
    tagline: "Deliverance · Rescue · Restoration · Global Fire",
    mandateStatement: "Deliverance · Rescue · Restoration · Mobile Fire",
    address: {
      line1: "The Place, God's City International Church Tower",
      line2: "No. 16 Ebitu Ukiwe Street, Jabi, Abuja, Nigeria",
      city: "Abuja",
      country: "Nigeria",
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
    giving: {
      ngnAccountName: "GOD CITY INTERNATIONAL CHURCH",
      ngnAccountNumber: "0534561418",
      ngnBankName: "Guaranty Trust Bank (GTBank)",
      forexAccountName: "GOD CITY INTERNATIONAL CHURCH",
      forexAccountNumber: "0534561425",
      forexSwift: "GTBINGLA",
      forexSortCode: "058083930",
      categories: ["Offering", "Tithe", "Seed", "First Fruit", "Thanksgiving Offering", "Others"],
    },
    defaultSeo: {
      title: "God's City International Church | Deliverance · Rescue · Restoration",
      description:
        "God's City International Church (GCIC) is a multicultural church in Abuja, Nigeria, on a mandate of Deliverance, Rescue, Restoration and Mobile Fire.",
    },
  });
  console.log("✓ siteSettings");

  // --- serviceTime -----------------------------------------------------
  const serviceTimes = [
    { _id: "serviceTime.sunday", label: "Sunday Service", days: ["Sun"], time: "7:00am, 9:00am, 11:00am", cadence: "weekly", isFeatured: true },
    { _id: "serviceTime.prayerMachine", label: "Prayer Machine (Conference)", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], time: "12 midnight", cadence: "daily", isFeatured: true },
    { _id: "serviceTime.morningDew", label: "Morning Dew", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], time: "6:00am", cadence: "daily", isFeatured: true },
    { _id: "serviceTime.nightVigil", label: "Night Vigil", days: ["Fri"], time: "9:00pm", cadence: "monthlyLastFriday", isFeatured: false },
    { _id: "serviceTime.heavenlyJerusalemAltar", label: "Heavenly Jerusalem Altar (Home Cells)", days: ["Sat"], time: "5:00pm–6:00pm", cadence: "weekly", isFeatured: false },
    { _id: "serviceTime.mensGroup", label: "Men's Group", days: ["Thu"], time: "Last Thursday of the month", cadence: "monthlyLastThursday", isFeatured: false },
    { _id: "serviceTime.hebrewWomen", label: "Hebrew Women", days: ["Wed"], time: "Weekly prayer session", cadence: "weekly", isFeatured: false },
    { _id: "serviceTime.outreach", label: "Outreach", days: ["Mon"], time: "9:00am", cadence: "weekly", isFeatured: false },
    { _id: "serviceTime.sistersConference", label: "Sister's Conference (Women of Impact)", days: [], time: "Bi-monthly", cadence: "biMonthly", isFeatured: false },
  ] satisfies SeedItem[] as SeedItem[];

  for (const s of serviceTimes) {
    const { _id, ...rest } = s;
    await client.createOrReplace({ _id, _type: "serviceTime", ...rest });
  }
  console.log(`✓ serviceTime (${serviceTimes.length})`);

  // --- leader ------------------------------------------------------------
  await client.createOrReplace({
    _id: "leader.pastorMatthewAndMary",
    _type: "leader",
    name: "Pastor Matthew & Pastor (Mrs.) Mary Morakinyo",
    role: "Senior Pastors",
    scriptureQuote:
      "There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus. (Galatians 3:28)",
    bio: [
      block(
        "It's my usual practice to seek the face of God for the upcoming year, and as I did the same on the 30th of December 2015 with regards to the parish (RCCG) I was pastoring then, I had an encounter with God. He spoke to me about the new assignment He had for me. He instructed that I should step out of my current place of worship to start a new path with the mandate of Deliverance, Rescue, Restoration and Mobile Fire."
      ),
      block(
        'The name "God\'s City International Church," aka Heavenly Jerusalem, was derived from Hebrews 12:22–24. To the Glory of God, GCIC was inaugurated on the 1st of May 2016. The inaugural service was held at the Women Development Centre, Abuja. Since the inauguration, God has exceeded our expectations through His word, signs and wonders.'
      ),
      block(
        "Praise be to God, many souls have been won, delivered, rescued, restored and empowered with the Mobile Fire of God."
      ),
    ],
    order: 1,
  });
  console.log("✓ leader");

  // --- ministry ------------------------------------------------------------
  const ministries = [
    {
      _id: "ministry.childrenAndYouth",
      name: "GCIC Children and Youth Club",
      order: 1,
      anchorScripture: { reference: "Psalms 127:3", text: "Lo, children are an heritage of the Lord: and the fruit of the womb is his reward." },
      summary: "A loving environment where children build a solid spiritual foundation through bible drama, singing, and bible study.",
      body: [
        block(
          "Whilst you are in deep worship and bible teachings at any of our services, your child(ren) will experience God in His awesomeness. They will also learn that they are very special to God and can have a prosperous and bright future in Him."
        ),
        block(
          "Within a loving environment, we take them deeper into God's word, we help guide them towards a solid spiritual foundation by encouraging their creative sides with participation in bible drama presentations, singing, bible study and many more energizing experiences, propelling them towards a growing friendship with Jesus."
        ),
        block(
          "All activities are voluntarily, bringing glory to the name of the Lord. The Teenagers Church presents a Play every month during the night vigil service, and it is always a blessing to the congregation."
        ),
        block(
          "Proverbs 22:6 'Train up a child in the way he should go: and when he is old, he will not depart from it'."
        ),
        block(
          "We understand that we are developing the next generation of leaders, hence we delight in providing our children with a true experience with God's teachings."
        ),
        block("To receive more information about GCIC Children's Department, kindly contact us — we'd love to hear from you."),
      ],
      ctaLabel: "Contact Us",
      ctaHref: "/contact",
    },
    {
      _id: "ministry.mensGroup",
      name: "Men's Group",
      order: 2,
      summary: "Focusing on the Physical, Social, Financial and Spiritual wellbeing of all GCIC men.",
      body: [
        block(
          "GCIC Men Fellowship is an integral part of the Church that focuses on the Physical, Social, Financial and Spiritual wellbeing of all men in the church (3 John 1:2, 1 Timothy 2:8)."
        ),
        block(
          "The group was inaugurated in 2016 few months after the inauguration of the main church. We meet every Last Thursday of every month. The coordinating team is constituted of some executives appointed from Ministers and Elders within the Church."
        ),
      ],
      meetingInfo: { _type: "reference", _ref: "serviceTime.mensGroup" },
      ctaLabel: "Get Involved",
      ctaHref: "/get-involved",
    },
    {
      _id: "ministry.womenOfImpact",
      name: "Women of Impact",
      order: 3,
      summary: "Encouraging women to grow in faith, strengthen relationships, and serve church, community and world.",
      body: [
        block(
          "GCIC strongly believes in recognizing and supporting the contribution of women in the ministry of the church and the world at large."
        ),
        block(
          "The Women of Impact is all about encouraging women to grow in their faith and walk with the Lord. The aim is to strengthen friendships and relationships with other women, and provide opportunities to serve and impact our church, our community and our world."
        ),
        block(
          'We coordinate bi-monthly women\'s events tagged "Sister\'s Conference" These events are always fun filled with so many activities lined up, such as Special Ministrations, Seminars, Skill Acquisition and Empowerment; it is always a good time uplifting our women and also nurturing their spiritual growth.'
        ),
        block(
          "Hebrew Women (Exodus 1:19): This serves as a spiritual support group for our expectant mothers. They meet every Wednesday for a special prayer session with Pastor Mrs Mary Morakinyo."
        ),
      ],
      meetingInfo: { _type: "reference", _ref: "serviceTime.sistersConference" },
      ctaLabel: "Share Your Testimony",
      ctaHref: "/testimony",
    },
    {
      _id: "ministry.marriageAndFamily",
      name: "Marriage and Family",
      order: 4,
      anchorScripture: {
        reference: "Genesis 2:22–24",
        text: 'Then the LORD God made a woman from the rib he had taken out of the man, and he brought her to the man. The man said, "This is now bone of my bones and flesh of my flesh; she shall be called \'woman,\' for she was taken out of man." That is why a man leaves his father and mother and is united to his wife, and they become one flesh.',
      },
      summary: "Helping couples flourish in marriage through counselling, prayer, and empowering educational tools.",
      body: [
        block(
          "God is the author of marriage. From the beginning, God exhibits His value for marriage and family. We see a reflection of this in (Genesis 2:22-24) one of the first miracle He performed on man was to give a suitable wife; a help mate. Also, Jesus started His miracle at a wedding ceremony in Cana in Galilee."
        ),
        block(
          "This ministry has been established to play a crucial role in building successful marriages, impact children and families. We aim to help couples flourish in their marriage, learn and develop marriage enhancement and communication skills, comprehend what the Bible says about marriage and family and understand the role of prayer in a marriage."
        ),
        block(
          "Whether you are thinking about getting married, building your marriage and family, or walking through a challenging path, the GCIC Marriage Team is here to help you navigate your relationships, because these relationships are a part of God's design. We aim to do so by providing appropriate counselling, prayer and empowering educational tools to sustain and value each other in a healthy marriage and family relationship."
        ),
        block("We offer programs, workshops, coaching sessions and social events."),
        block("Want to get married? Contact us."),
      ],
      ctaLabel: "Contact Us",
      ctaHref: "/contact",
    },
    {
      _id: "ministry.outreach",
      name: "Outreach",
      order: 5,
      anchorScripture: { reference: "Mark 16:15", text: "Go into the world and preach the gospel to all creation." },
      summary: "Reaching those incarcerated, hospitalized, institutionalized, and in need of the gospel outside a traditional church setting.",
      body: [
        block(
          "Our goal is to reach those that are incarcerated, hospitalized, institutionalized, and those that are in need of the gospel outside of a traditional church setting. We teach the Word of God in order to provide clear guidelines and instructions necessary to develop character and the qualities of Jesus Christ."
        ),
        block("We lead our outreach programmes every Monday morning by 9am."),
        block("We cut across different neighbourhoods, hospitals and prisons."),
        block(
          "We take Church beyond the four walls of our premises. By His Grace and his Mercies, the Gospel of Our Lord Jesus Christ is preached to all the Nations of the Earth."
        ),
      ],
      meetingInfo: { _type: "reference", _ref: "serviceTime.outreach" },
      ctaLabel: "Get Involved",
      ctaHref: "/get-involved",
    },
    {
      _id: "ministry.welfare",
      name: "Welfare",
      order: 6,
      summary: "Administering the general welfare of the church — foodstuff, clothing, and help for the needy and elderly.",
      body: [
        block(
          "One of our visions is to have a body of Christ that is united in love and cares for one another at all times. This is the basis for the formation of the Welfare Department; to serve as a medium for the achievement of this aspiration. The Welfare Department is in charge of the general welfare administration of the Church as it relates to every member."
        ),
        block(
          "From time to time, the welfare department of the church provides foodstuff, clothing and render any other help within their capacity to the needy, the elderly people and the less privileged in the church."
        ),
        block(
          "They are dedicated to advancing the kingdom of our Lord and Saviour Jesus Christ and the general welfare of the church and congregation."
        ),
      ],
      ctaLabel: "Get Involved",
      ctaHref: "/get-involved",
    },
    {
      _id: "ministry.heavenlyJerusalemAltar",
      name: "Heavenly Jerusalem Altar",
      order: 7,
      summary: "Home cells across the FCT that teach the Bible, fellowship, and evangelise their neighbourhoods.",
      body: [
        block(
          "It is made up of a small sized group of people who gather together every Saturday from 5pm – 6pm, to teach the Bible and the word of God."
        ),
        block(
          "The purpose is to edify the name of the Lord, build up, equip one another, fellowship together and to evangelise in their specific neighbourhoods the Good News of Jesus Christ."
        ),
        block(
          "GCIC has a number of home cells across the FCT; it is an integral part of our ministry and also forms part of the blueprint of our Church."
        ),
        block(
          "If you are not connected to any of the Altars, please contact us via email or speak to any of our Pastors, Ministers after any of our Services."
        ),
      ],
      meetingInfo: { _type: "reference", _ref: "serviceTime.heavenlyJerusalemAltar" },
      ctaLabel: "Contact Us",
      ctaHref: "/contact",
    },
    {
      _id: "ministry.trainingDepartment",
      name: "GCIC Training Department (Schools)",
      order: 8,
      summary: "Six schools equipping the saints for the work of ministry: Membership, Workers Academy, Prayer & Deliverance, Ministry & Destiny, Mission, and Worship.",
      body: [
        block(
          "To achieve our mandate which is Deliverance, Rescue, Restoration and raising a mobile fire Christians, the School of Ministry was established. It comprises of Membership School, Workers Academy, Prayer and Deliverance School, School of Ministry and Destiny, School of Mission (Evangelism) and School of Worship."
        ),
        block(
          "We are dedicated to developing an unstoppable army of God and aim to equip every member of GCIC with discipline, prayer, worship, training, doctrinal understanding and other effective tools that will bear fruit and enforce God's WILL on earth. (2 Timothy 2:15; John 15:2)"
        ),
        block(
          "Each of the School is saddled with a specific mandate. The purpose of Membership school is to turn the Sinners into Members and followers of Christ. Workers Academy is structured to turn Members into Workers, Workers into Ministers, Ministers into Pastors."
        ),
      ],
      ctaLabel: "Get Involved",
      ctaHref: "/get-involved",
    },
  ] satisfies SeedItem[] as SeedItem[];

  for (const m of ministries) {
    const { _id, ...rest } = m;
    await client.createOrReplace({ _id, _type: "ministry", ...rest });
  }
  console.log(`✓ ministry (${ministries.length})`);

  console.log("\nSeed complete.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
