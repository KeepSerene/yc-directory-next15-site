import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import Ping from "./Ping";

export default async function Views({ startupId }: { startupId: string }) {
  const { views } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { startupId });

  // Update the views whenever a user sees the current post

  return (
    <div className="views-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="views-text">
        <span className="text-black">{views} views</span>
      </p>
    </div>
  );
}
