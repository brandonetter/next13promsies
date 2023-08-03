import fetchData from "@/utils/apiCalls";
import RenderPosts from "@/components/RenderPosts";

export default async function Home() {
  // Initialize the promise on the server side. This will be resolved
  // AFTER the page is rendered, because we send the promise to the client component
  const ourPosts: Promise<Post[]> = fetchData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-8xl mb-20">Pass it to the client instead!</h1>

      {/* Pass the ourPosts promise to the component and let the component handle the
      promise resolution! */}
      <RenderPosts postPromise={ourPosts} />
    </main>
  );
}
