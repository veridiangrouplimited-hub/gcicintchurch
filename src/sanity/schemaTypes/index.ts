import { announcement } from "./announcement";
import { blogPost } from "./blogPost";
import { devotional } from "./devotional";
import { event } from "./event";
import { galleryAlbum } from "./galleryAlbum";
import { leader } from "./leader";
import { ministry } from "./ministry";
import { pageSection } from "./pageSection";
import { sermon } from "./sermon";
import { serviceTime } from "./serviceTime";
import { siteSettings } from "./siteSettings";
import { staffAuthor } from "./staffAuthor";
import { testimony } from "./testimony";

export const schemaTypes = [
  siteSettings,
  serviceTime,
  ministry,
  leader,
  sermon,
  devotional,
  event,
  testimony,
  blogPost,
  staffAuthor,
  announcement,
  galleryAlbum,
  pageSection,
];
