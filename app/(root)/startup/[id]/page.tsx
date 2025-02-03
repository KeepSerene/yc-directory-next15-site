import { client } from "@/sanity/lib/client";
import {
  QUERY_STARTUP_BY_ID,
  QUERY_PLAYLIST_BY_SLUG,
} from "@/sanity/lib/queries";
import markdownit from "markdown-it";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import StartupCard, { StartupType } from "@/components/StartupCard";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Views from "@/components/Views";

export const experimental_ppr = true;

const md = markdownit();

export default async function StartupDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [startup, { select: editorPicks }] = await Promise.all([
    client.fetch(QUERY_STARTUP_BY_ID, { id }),
    client.fetch(QUERY_PLAYLIST_BY_SLUG, {
      slug: "editor-picks",
    }),
  ]);

  const parsedMarkdown = md.render(startup?.pitch || "");

  if (!startup) return notFound();

  return (
    <>
      <section className="pink-container !min-h-[230px]">
        <p className="tag">{formatDate(startup?._createdAt)}</p>

        <h1 className="heading">{startup.title}</h1>

        <p className="sub-heading !max-w-5xl">{startup.description}</p>
      </section>

      <section className="section-container">
        <img
          src={`${startup.imageURL}`}
          alt="Thumbnail"
          className="w-full h-auto rounded-xl"
        />

        <div className="max-w-4xl mt-10 mx-auto space-y-5">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${startup.author?._id}`}
              className="mb-3 flex items-center gap-2"
            >
              <Image
                src={`${startup.author?.avatarURL}'s GitHub profile pic`}
                alt="Avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-20-medium">{startup.author?.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{startup.author?.username}
                </p>
              </div>
            </Link>

            <p className="category-tag">{startup.category}</p>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>

          {parsedMarkdown ? (
            <article
              dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
              className="prose max-w-4xl font-work-sans break-all"
            />
          ) : (
            <p className="no-result">No details provided!</p>
          )}
        </div>

        <hr className="divider" />

        {/* Editor Picked Startups */}
        {editorPicks.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-30-semibold capitalize">Editor Picks</p>

            <ul className="card-grid-sm mt-7">
              {editorPicks.map((editorPick: StartupType, index: number) => (
                <StartupCard key={index} startup={editorPick} />
              ))}
            </ul>
          </div>
        )}

        <Suspense fallback={<Skeleton className="view-skeleton" />}>
          <Views id={id} />
        </Suspense>
      </section>
    </>
  );
}
