// Figma design: https://www.figma.com/design/TMGW6rLGene3cqHb4Kilz5/Pitch-Startup-App?node-id=2-2&p=f&t=3kaH2q2oTCaqbaSo-0

import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERIES } from "@/sanity/lib/queries";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupType } from "@/components/StartupCard";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const params = { search: query || null };

  const { data: startups } = await sanityFetch({
    query: STARTUP_QUERIES,
    params,
  });

  return (
    <>
      <section className="pink-container">
        <h1 className="heading">
          Pitch your startup,
          <br />
          Connect with entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote on Pitches, and get noticed in Virtual
          Competitions!
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="card-grid mt-7">
          {startups.length > 0 ? (
            startups.map((startup: StartupType) => (
              <StartupCard key={startup?._id} startup={startup} />
            ))
          ) : (
            <li className="no-results">No startups found!</li>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
