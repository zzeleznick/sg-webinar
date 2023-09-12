import AvatarCard from "../components/AvatarCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <section className="w-full items-center justify-between">
        <h1 className="text-4xl">
          SSRF Demo
        </h1>
      </section>
      <section className="flex flex-1 w-full items-center justify-between">
        <div className="flex flex-row gap-4">
          <AvatarCard unsafe={true} />
          <AvatarCard />
        </div>
      </section>
    </main>
  )
}
