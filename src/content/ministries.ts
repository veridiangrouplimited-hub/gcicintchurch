/**
 * Recovered ministry copy — see GCIC-WEBSITE-BUILD-PROMPT.md §2.5 and §5.5–5.13.
 * Static for now; mirrors the documents written by scripts/seed.ts so the
 * front-end and the CMS agree on content until pages are switched to live
 * Sanity fetches.
 */

export type Ministry = {
  slug: string;
  name: string;
  summary: string;
  anchorScripture?: { reference: string; text: string };
  meetingInfo?: string;
  body: string[];
  gallery?: { file: string; alt: string }[];
  ctaLabel: string;
  ctaHref: string;
};

export const ministries: Ministry[] = [
  {
    slug: "children-and-youth",
    name: "GCIC Children and Youth Club",
    summary:
      "A loving environment where children build a solid spiritual foundation through bible drama, singing, and bible study.",
    anchorScripture: {
      reference: "Psalms 127:3",
      text: "Lo, children are an heritage of the Lord: and the fruit of the womb is his reward.",
    },
    body: [
      "Whilst you are in deep worship and bible teachings at any of our services, your child(ren) will experience God in His awesomeness. They will also learn that they are very special to God and can have a prosperous and bright future in Him.",
      "Within a loving environment, we take them deeper into God's word, we help guide them towards a solid spiritual foundation by encouraging their creative sides with participation in bible drama presentations, singing, bible study and many more energizing experiences, propelling them towards a growing friendship with Jesus.",
      "All activities are voluntarily, bringing glory to the name of the Lord. The Teenagers Church presents a Play every month during the night vigil service, and it is always a blessing to the congregation.",
      "Proverbs 22:6 “Train up a child in the way he should go: and when he is old, he will not depart from it.”",
      "We understand that we are developing the next generation of leaders, hence we delight in providing our children with a true experience with God's teachings.",
      "To receive more information about GCIC Children's Department, kindly contact us — we'd love to hear from you.",
    ],
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
  {
    slug: "mens-group",
    name: "Men's Group",
    summary: "Focusing on the Physical, Social, Financial and Spiritual wellbeing of all GCIC men.",
    meetingInfo: "Last Thursday of every month",
    body: [
      "GCIC Men Fellowship is an integral part of the Church that focuses on the Physical, Social, Financial and Spiritual wellbeing of all men in the church (3 John 1:2, 1 Timothy 2:8).",
      "The group was inaugurated in 2016, few months after the inauguration of the main church. We meet every Last Thursday of every month. The coordinating team is constituted of some executives appointed from Ministers and Elders within the Church.",
    ],
    ctaLabel: "Get Involved",
    ctaHref: "/get-involved",
  },
  {
    slug: "women-of-impact",
    name: "Women of Impact",
    summary: "Encouraging women to grow in faith, strengthen relationships, and serve church, community and world.",
    meetingInfo: "Sister's Conference — bi-monthly · Hebrew Women — every Wednesday",
    body: [
      "GCIC strongly believes in recognizing and supporting the contribution of women in the ministry of the church and the world at large.",
      "The Women of Impact is all about encouraging women to grow in their faith and walk with the Lord. The aim is to strengthen friendships and relationships with other women, and provide opportunities to serve and impact our church, our community and our world.",
      "We coordinate bi-monthly women's events tagged “Sister's Conference.” These events are always fun filled with so many activities lined up, such as Special Ministrations, Seminars, Skill Acquisition and Empowerment; it is always a good time uplifting our women and also nurturing their spiritual growth.",
      "Hebrew Women (Exodus 1:19): This serves as a spiritual support group for our expectant mothers. They meet every Wednesday for a special prayer session with Pastor Mrs Mary Morakinyo.",
    ],
    ctaLabel: "Share Your Testimony",
    ctaHref: "/testimony",
  },
  {
    slug: "marriage-and-family",
    name: "Marriage and Family",
    summary: "Helping couples flourish in marriage through counselling, prayer, and empowering educational tools.",
    anchorScripture: {
      reference: "Genesis 2:22–24",
      text: "Then the LORD God made a woman from the rib he had taken out of the man, and he brought her to the man. The man said, “This is now bone of my bones and flesh of my flesh; she shall be called ‘woman,’ for she was taken out of man.” That is why a man leaves his father and mother and is united to his wife, and they become one flesh.",
    },
    body: [
      "God is the author of marriage. From the beginning, God exhibits His value for marriage and family. We see a reflection of this in (Genesis 2:22-24) — one of the first miracles He performed on man was to give a suitable wife, a help mate. Also, Jesus started His miracle at a wedding ceremony in Cana in Galilee.",
      "This ministry has been established to play a crucial role in building successful marriages, impact children and families. We aim to help couples flourish in their marriage, learn and develop marriage enhancement and communication skills, comprehend what the Bible says about marriage and family and understand the role of prayer in a marriage.",
      "Whether you are thinking about getting married, building your marriage and family, or walking through a challenging path, the GCIC Marriage Team is here to help you navigate your relationships, because these relationships are a part of God's design. We aim to do so by providing appropriate counselling, prayer and empowering educational tools to sustain and value each other in a healthy marriage and family relationship.",
      "We offer programs, workshops, coaching sessions and social events.",
      "Want to get married? Contact us.",
    ],
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
  {
    slug: "outreach",
    name: "Outreach",
    summary: "Reaching those incarcerated, hospitalized, institutionalized, and in need of the gospel outside a traditional church setting.",
    anchorScripture: { reference: "Mark 16:15", text: "Go into the world and preach the gospel to all creation." },
    meetingInfo: "Every Monday, 9:00am",
    body: [
      "Our goal is to reach those that are incarcerated, hospitalized, institutionalized, and those that are in need of the gospel outside of a traditional church setting. We teach the Word of God in order to provide clear guidelines and instructions necessary to develop character and the qualities of Jesus Christ.",
      "We lead our outreach programmes every Monday morning by 9am.",
      "We cut across different neighbourhoods, hospitals and prisons.",
      "We take Church beyond the four walls of our premises. By His Grace and His Mercies, the Gospel of Our Lord Jesus Christ is preached to all the Nations of the Earth.",
    ],
    ctaLabel: "Get Involved",
    ctaHref: "/get-involved",
  },
  {
    slug: "welfare",
    name: "Welfare",
    summary: "Administering the general welfare of the church — foodstuff, clothing, and help for the needy and elderly.",
    body: [
      "One of our visions is to have a body of Christ that is united in love and cares for one another at all times. This is the basis for the formation of the Welfare Department; to serve as a medium for the achievement of this aspiration. The Welfare Department is in charge of the general welfare administration of the Church as it relates to every member.",
      "From time to time, the welfare department of the church provides foodstuff, clothing and renders any other help within their capacity to the needy, the elderly people and the less privileged in the church.",
      "They are dedicated to advancing the kingdom of our Lord and Saviour Jesus Christ and the general welfare of the church and congregation.",
    ],
    ctaLabel: "Get Involved",
    ctaHref: "/get-involved",
  },
  {
    slug: "heavenly-jerusalem-altar",
    name: "Heavenly Jerusalem Altar",
    summary: "Home cells across the FCT that teach the Bible, fellowship, and evangelise their neighbourhoods.",
    meetingInfo: "Every Saturday, 5:00pm–6:00pm",
    body: [
      "It is made up of a small sized group of people who gather together every Saturday from 5pm – 6pm, to teach the Bible and the word of God.",
      "The purpose is to edify the name of the Lord, build up, equip one another, fellowship together and to evangelise in their specific neighbourhoods the Good News of Jesus Christ.",
      "GCIC has a number of home cells across the FCT; it is an integral part of our ministry and also forms part of the blueprint of our Church.",
      "If you are not connected to any of the Altars, please contact us via email or speak to any of our Pastors, Ministers after any of our Services.",
    ],
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
  {
    slug: "training-department",
    name: "GCIC Training Department (Schools)",
    summary:
      "Six schools equipping the saints for the work of ministry: Membership, Workers Academy, Prayer & Deliverance, Ministry & Destiny, Mission, and Worship.",
    body: [
      "To achieve our mandate which is Deliverance, Rescue, Restoration and raising a mobile fire Christians, the School of Ministry was established. It comprises of Membership School, Workers Academy, Prayer and Deliverance School, School of Ministry and Destiny, School of Mission (Evangelism) and School of Worship.",
      "We are dedicated to developing an unstoppable army of God and aim to equip every member of GCIC with discipline, prayer, worship, training, doctrinal understanding and other effective tools that will bear fruit and enforce God's WILL on earth. (2 Timothy 2:15; John 15:2)",
      "Each of the Schools is saddled with a specific mandate. The purpose of Membership School is to turn the Sinners into Members and followers of Christ. Workers Academy is structured to turn Members into Workers, Workers into Ministers, Ministers into Pastors.",
    ],
    ctaLabel: "Get Involved",
    ctaHref: "/get-involved",
  },
];

export const schools = [
  { name: "Membership School", purpose: "Turns sinners into members and followers of Christ." },
  { name: "Workers Academy", purpose: "Turns members into workers." },
  { name: "Prayer and Deliverance School", purpose: "Equips believers in prayer and deliverance ministry." },
  { name: "School of Ministry and Destiny", purpose: "Turns workers into ministers." },
  { name: "School of Mission (Evangelism)", purpose: "Trains believers to evangelise and carry out the Great Commission." },
  { name: "School of Worship", purpose: "Turns ministers into pastors and equips worship leaders." },
];

export function getMinistry(slug: string) {
  return ministries.find((m) => m.slug === slug);
}
