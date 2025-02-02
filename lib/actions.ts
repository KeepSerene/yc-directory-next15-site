"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export async function createStartup(
  state: any,
  formData: FormData,
  pitch: string
) {
  const session = await auth();

  if (!session) {
    parseServerActionResponse({ error: "Not signed in!", status: "ERROR" });
  }

  const { title, description, imgUrl, category } = Object.fromEntries(
    Array.from(formData).filter(([key]) => key !== "pitch")
  );

  const slug = slugify(title as string, { lower: true, strict: true });

  try {
    const startup = {
      title,
      slug: {
        _type: "slug",
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      description,
      imageURL: imgUrl,
      category,
      pitch,
    };

    const result = await writeClient.create({ _type: "startup", ...startup });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (err) {
    console.error(err);

    return parseServerActionResponse({
      error: JSON.stringify(err),
      status: "ERROR",
    });
  }
}
