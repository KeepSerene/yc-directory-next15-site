import { client } from "@/sanity/lib/client";
import { QUERY_STARTUPS_BY_AUTHOR } from "@/sanity/lib/queries";
import StartupCard, { StartupType } from "./StartupCard";

export default async function UserStartups({ id }: { id: string }) {
  const userStartups = await client.fetch(QUERY_STARTUPS_BY_AUTHOR, { id });

  return (
    <>
      {userStartups.length > 0 ? (
        userStartups.map((startup: StartupType) => (
          <StartupCard key={startup._id} startup={startup} />
        ))
      ) : (
        <li className="no-result">No startup posts yet!</li>
      )}
    </>
  );
}
