import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: () => "👤",

  fields: [
    defineField({
      name: "id",
      type: "number",
    }),

    defineField({
      name: "name",
      type: "string",
    }),

    defineField({
      name: "username",
      type: "string",
    }),

    defineField({
      name: "avatarURL",
      type: "url",
    }),

    defineField({
      name: "email",
      type: "string",
    }),

    defineField({
      name: "bio",
      type: "text",
    }),
  ],

  preview: {
    select: {
      title: "name",
    },
  },
});
