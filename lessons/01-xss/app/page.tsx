// import AvatarCard from "../components/AvatarCard";
import JobListingRow from "../components/JobListingRow";
import Navbar from "../components/Navbar";

import sampleJobListings from "../lib/data";
import xssUrl from "../lib/xss";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center">
      <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Luckiest+Guy"/>
      <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Paytone+One"/>
      <section className="w-full py-10"/>
      <section className="w-full items-center justify-between py-8 md:py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-3xl text-center uppercase font-bold py-2">
          Careers
        </h1>
        <h2 className="text-6xl text-white text-center capitalize font-semibold pt-2 pb-2">
          Join our Community!
        </h2>
      </section>
      <section className="items-center justify-between py-4 md:py-6">
        <h1 className="text-4xl">
          Open Roles 
        </h1>
      </section>
      <section className="w-full flex items-center px-12 pb-12">
        <div className="flex grow flex-col gap-y-4">
          {/* <AvatarCard unsafe={true} />
          <AvatarCard /> */}
          {
            sampleJobListings.map((listing, idx) => 
              idx === 0 ?
              <JobListingRow key={idx} {...listing} url={xssUrl} />
              : <JobListingRow key={idx} {...listing} />
            )
          }
        </div>
      </section>
    </main>
    </>
  )
}
