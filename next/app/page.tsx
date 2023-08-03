import Link from "next/link";

import fetchData from "@/utils/apiCalls";

export default async function Home() {
  // Fetch data from API, we use await which means this page won't
  // be rendered until the data is fetched
  const ourPosts: Post[] = await fetchData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/oneway">The way we have been doing it</Link>

      <Link href="/otherway">Pass it to the client instead!</Link>
      <Link href="/otherwaythen">
        Pass it to the client, but slightly different way of promise resolution!
      </Link>
      <Link href="/otherwayserver">Render it with a server component!</Link>
      <Link href="/otherwayclientloading">
        Pass it to the client, and have the client handle the loading state!
      </Link>
    </main>
  );
}
