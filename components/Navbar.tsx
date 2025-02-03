import { auth, signIn, signOut } from "@/auth"; // From the auth.ts file
import Link from "next/link";
import Image from "next/image";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="bg-white font-work-sans px-5 py-3 shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/yc-directory-logo.png"
            alt="Logo"
            width={144}
            height={30}
          />
        </Link>

        <div className="text-black flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create" title="Add Startup">
                <span className="max-sm:hidden">Create</span>

                <BadgePlus
                  aria-label="Click to create a new startup post"
                  className="sm:hidden size-6"
                />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" title="Logout">
                  <span className="max-sm:hidden">Logout</span>

                  <LogOut
                    aria-label="Click to logout"
                    className="sm:hidden size-6 text-red-500"
                  />
                </button>
              </form>

              <Link
                href={`/user/${session?.id}`}
                aria-label="Click to view your profile"
                title={session?.user?.name}
              >
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image ?? ""}
                    alt={`${session?.user?.name}'s GitHub profile pic`}
                  />

                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">
                <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
}
