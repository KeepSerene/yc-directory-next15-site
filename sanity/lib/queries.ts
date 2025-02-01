import { defineQuery } from "next-sanity";

export const STARTUP_QUERIES = defineQuery(`
  *[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
    _id,
    title,
    slug,
    author -> {
      _id, name, avatarURL, bio
    },
    description,
    _createdAt,
    imageURL, 
    category, 
    views
}
`);

export const QUERY_STARTUP_BY_ID = defineQuery(`
  *[_type == "startup" && _id == $id][0] {
    _id,
    title,
    slug,
    author -> {
      _id, name, username, avatarURL, bio
    },
    description,
    _createdAt,
    imageURL, 
    pitch,
    category, 
    views
}
`);

export const STARTUP_VIEWS_QUERY = defineQuery(`
  *[_type == "startup" && _id == $id][0] {
    _id, views
  }
`);

export const QUERY_AUTHOR_BY_GITHUB_ID = defineQuery(`
  *[_type == "author" && id == $id][0] {
    _id,
    id,
    name,
    username,
    email,
    avatarURL,
    bio
  }  
`);
