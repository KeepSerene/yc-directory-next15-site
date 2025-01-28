// Figma design: https://www.figma.com/design/TMGW6rLGene3cqHb4Kilz5/Pitch-Startup-App?node-id=2-2&p=f&t=3kaH2q2oTCaqbaSo-0

import { client } from "@/sanity/lib/client";
import { STARTUP_QUERIES } from "@/sanity/lib/queries";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  const posts = await client.fetch(STARTUP_QUERIES);

  console.log(JSON.stringify(posts, null, 2));

  // const posts = [
  //   {
  //     _id: 1,
  //     _createdAt: new Date(),
  //     title: "We Robots",
  //     author: {
  //       _id: 1,
  //       name: "Dhruv",
  //     },
  //     image: "https://picsum.photos/200/300",
  //     description: "This is a description",
  //     category: "Robots",
  //     views: 55,
  //   },
  // ];

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
          {posts.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <li className="no-results">No startups found!</li>
          )}
        </ul>
      </section>
    </>
  );
}
