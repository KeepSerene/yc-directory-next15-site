import { defineQuery } from "next-sanity";

export const STARTUP_QUERIES = defineQuery(`
  *[_type=="startup" && defined(slug.current)] | order(_createdAt desc) {
  _id,
  title,
  slug,
  author -> {
    _id, name, avatarURL, bio
  },
  description,
  _createdAt,
  imageURL, 
  pitch,
  category, 
  views
}
`);
