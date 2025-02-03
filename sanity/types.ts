/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type Startup = {
  _id: string;
  _type: "startup";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  description?: string;
  views?: number;
  category?: string;
  imageURL?: string;
  pitch?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  id?: number;
  name?: string;
  username?: string;
  avatarURL?: string;
  email?: string;
  bio?: string;
};

export type Markdown = string;

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | SanityAssetSourceData | Startup | Slug | Author | Markdown;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: sanity/lib/queries.ts
// Variable: QUERY_STARTUPS
// Query: *[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {    _id,    title,    slug,    author -> {      _id, name, avatarURL, bio    },    description,    _createdAt,    imageURL,     category,     views}
export type QUERY_STARTUPSResult = Array<{
  _id: string;
  title: null;
  slug: null;
  author: null;
  description: null;
  _createdAt: string;
  imageURL: null;
  category: null;
  views: null;
} | {
  _id: string;
  title: string | null;
  slug: null;
  author: null;
  description: string | null;
  _createdAt: string;
  imageURL: null;
  category: null;
  views: null;
} | {
  _id: string;
  title: string | null;
  slug: Slug | null;
  author: {
    _id: string;
    name: string | null;
    avatarURL: string | null;
    bio: string | null;
  } | null;
  description: string | null;
  _createdAt: string;
  imageURL: string | null;
  category: string | null;
  views: number | null;
}>;
// Variable: QUERY_STARTUP_BY_ID
// Query: *[_type == "startup" && _id == $id][0] {    _id,    title,    slug,    author -> {      _id, name, username, avatarURL, bio    },    description,    _createdAt,    imageURL,     pitch,    category,     views}
export type QUERY_STARTUP_BY_IDResult = {
  _id: string;
  title: string | null;
  slug: Slug | null;
  author: {
    _id: string;
    name: string | null;
    username: string | null;
    avatarURL: string | null;
    bio: string | null;
  } | null;
  description: string | null;
  _createdAt: string;
  imageURL: string | null;
  pitch: string | null;
  category: string | null;
  views: number | null;
} | null;
// Variable: STARTUP_VIEWS_QUERY
// Query: *[_type == "startup" && _id == $id][0] {    _id, views  }
export type STARTUP_VIEWS_QUERYResult = {
  _id: string;
  views: number | null;
} | null;
// Variable: QUERY_AUTHOR_BY_GITHUB_ID
// Query: *[_type == "author" && id == $id][0] {    _id,    id,    name,    username,    email,    avatarURL,    bio  }
export type QUERY_AUTHOR_BY_GITHUB_IDResult = {
  _id: string;
  id: number | null;
  name: string | null;
  username: string | null;
  email: string | null;
  avatarURL: string | null;
  bio: string | null;
} | null;
// Variable: QUERY_AUTHOR_BY_ID
// Query: *[_type == "author" && _id == $id][0] {    _id,    id,    name,    username,    email,    avatarURL,    bio  }
export type QUERY_AUTHOR_BY_IDResult = {
  _id: string;
  id: number | null;
  name: string | null;
  username: string | null;
  email: string | null;
  avatarURL: string | null;
  bio: string | null;
} | null;
// Variable: QUERY_STARTUPS_BY_AUTHOR
// Query: *[_type == "startup" && author._ref == $id] | order(_createdAt desc) {    _id,    title,    slug,    author -> {      _id, name, avatarURL, bio    },    description,    _createdAt,    imageURL,     category,     views}
export type QUERY_STARTUPS_BY_AUTHORResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  author: {
    _id: string;
    name: string | null;
    avatarURL: string | null;
    bio: string | null;
  } | null;
  description: string | null;
  _createdAt: string;
  imageURL: string | null;
  category: string | null;
  views: number | null;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n  *[_type == \"startup\" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {\n    _id,\n    title,\n    slug,\n    author -> {\n      _id, name, avatarURL, bio\n    },\n    description,\n    _createdAt,\n    imageURL, \n    category, \n    views\n}\n": QUERY_STARTUPSResult;
    "\n  *[_type == \"startup\" && _id == $id][0] {\n    _id,\n    title,\n    slug,\n    author -> {\n      _id, name, username, avatarURL, bio\n    },\n    description,\n    _createdAt,\n    imageURL, \n    pitch,\n    category, \n    views\n}\n": QUERY_STARTUP_BY_IDResult;
    "\n  *[_type == \"startup\" && _id == $id][0] {\n    _id, views\n  }\n": STARTUP_VIEWS_QUERYResult;
    "\n  *[_type == \"author\" && id == $id][0] {\n    _id,\n    id,\n    name,\n    username,\n    email,\n    avatarURL,\n    bio\n  }  \n": QUERY_AUTHOR_BY_GITHUB_IDResult;
    "\n  *[_type == \"author\" && _id == $id][0] {\n    _id,\n    id,\n    name,\n    username,\n    email,\n    avatarURL,\n    bio\n  }  \n": QUERY_AUTHOR_BY_IDResult;
    "\n  *[_type == \"startup\" && author._ref == $id] | order(_createdAt desc) {\n    _id,\n    title,\n    slug,\n    author -> {\n      _id, name, avatarURL, bio\n    },\n    description,\n    _createdAt,\n    imageURL, \n    category, \n    views\n}\n": QUERY_STARTUPS_BY_AUTHORResult;
  }
}
