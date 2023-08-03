import Link from "next/link";

import fetchData from "@/utils/apiCalls";

export default async function Home() {
  // Fetch data from API, we use await which means this page won't
  // be rendered until the data is fetched
  const ourPosts: Post[] = await fetchData();
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1 className="text-6xl mb-20">
        We are going to fetch some posts from an API
      </h1>
      <Link href="/oneway">The way we have been doing it</Link>

      <h2 className="text-gray-400 text-center text-xl w-full border-b-2">
        Client Components
      </h2>
      <Link href="/otherway">Pass it to the client instead!</Link>
      <Link href="/otherwaythen">
        Pass it to the client, but slightly different way of promise resolution!
      </Link>
      <Link href="/otherwayclientloading">
        Pass it to the client, and have the client handle the loading state!
      </Link>
      <Link href="/otherwayquery">
        Use the query to have the client request new data from the server!
      </Link>
      <h2 className="text-gray-400 text-center text-xl w-full border-b-2">
        Server Component
      </h2>
      <Link href="/otherwayserver">Render it with a server component!</Link>
    </main>
  );
}
