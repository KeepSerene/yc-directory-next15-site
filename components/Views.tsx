import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { after } from "next/server";
import { writeClient } from "@/sanity/lib/write-client";
import PingIndicator from "./PingIndicator";

export default async function Views({ id }: { id: string }) {
  // "id" refers to a startup id
  // Get past views
  const { views } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  // Update the views whenever a user sees the current post
  after(async () => {
    await writeClient
      .patch(id)
      .set({ views: views + 1 })
      .commit();
  });

  return (
    <div className="views-container">
      <div className="absolute -top-2 -right-2">
        <PingIndicator />
      </div>

      <p className="views-text">
        <span className="text-black">
          {views > 1 ? `${views} views` : `${views} view`}
        </span>
      </p>
    </div>
  );
}
