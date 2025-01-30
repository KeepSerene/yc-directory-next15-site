import { Author, Startup } from "@/sanity/types";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export type StartupType = Omit<Startup, "author"> & { author?: Author };

export default function StartupCard({ startup }: { startup: StartupType }) {
  const {
    _id,
    _createdAt,
    title,
    author,
    imageURL,
    description,
    category,
    views,
  } = startup;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup-card-date">{formatDate(_createdAt)}</p>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />

          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between gap-5 mt-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>

          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
          <Image
            src={"https://placehold.co/48x48"}
            alt="User avatar placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card-desc">{description}</p>

        <img
          src={imageURL}
          alt="Post placeholder image"
          className="startup-card-img"
        />
      </Link>

      <div className="mt-5 flex-between gap-3">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>

        <Button className="startup-card-btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
}
