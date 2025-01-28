import { defineQuery } from "next-sanity";

export const STARTUP_QUERIES = defineQuery(`
  *[_type=="startup" && defined(slug.current)] {
  _id,
  title,
  description,
  author -> {
    _id, name, bio, avatarURL
  },
  _createdAt,
  slug,
  imageURL, 
  pitch,
  category, 
  views
}
`);
