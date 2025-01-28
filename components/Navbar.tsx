import { auth, signIn, signOut } from "@/auth"; // From the auth.ts file
import Image from "next/image";
import Link from "next/link";

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
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span>Logout</span>
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
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
