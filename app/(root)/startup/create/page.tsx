import { auth } from "@/auth";
import { redirect } from "next/navigation";
import StartupForm from "@/components/StartupForm";

export default async function CreateStartupPage() {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="pink-container !min-h-[230px]">
        <h1 className="heading">Submit your startup</h1>
      </section>

      <StartupForm />
    </>
  );
}
