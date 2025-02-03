import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { QUERY_AUTHOR_BY_ID } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import UserStartups from "@/components/UserStartups";
import { StartupCardSkeleton } from "@/components/StartupCard";

export const experimental_ppr = true;

export default async function UserProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  const user = await client.fetch(QUERY_AUTHOR_BY_ID, { id });

  if (!user) return notFound();

  return (
    <>
      <section className="profile-container">
        <div className="profile-card">
          <div className="profile-title">
            <h3 className="text-24-black uppercase text-center line-clamp-1">
              {user.name}
            </h3>
          </div>

          <Image
            src={user.avatarURL}
            alt={`${user.name}'s GitHub profile pic`}
            width={220}
            height={220}
            className="profile-image"
          />

          {user?.username && (
            <p className="text-30-extrabold text-center mt-7">
              {user?.username}
            </p>
          )}

          {user?.bio && (
            <p className="text-14-normal text-center mt-1">{user?.bio}</p>
          )}
        </div>

        <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
          <p className="text-30-bold">
            {session?.id === id ? "Your" : "All"} Startups
          </p>

          <ul className="card-grid-sm">
            <Suspense fallback={<StartupCardSkeleton />}>
              <UserStartups id={id} />
            </Suspense>
          </ul>
        </div>
      </section>
    </>
  );
}
