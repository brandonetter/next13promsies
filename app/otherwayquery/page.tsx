import { fetchPostsWithQuery } from "@/utils/apiCalls";
import RenderPostsFromQuery from "@/components/RenderPostsFromQuery";

// Set up this page to reach the ?query= parameter from the URL
export default async function Home({
  searchParams,
}: {
  searchParams: { query: number };
}) {
  // Destructure the query from the searchParams object
  const { query } = searchParams;

  // Initialize the promise on the server side. This will be resolved
  // AFTER the page is rendered, because we send the promise to the client component
  const ourComments: Promise<Comment[]> = fetchPostsWithQuery(query);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-8xl mb-20"></h1>
      {/* Pass the ourPosts promise to the component and let the component handle the
      promise resolution! */}

      <RenderPostsFromQuery commentPromise={ourComments} />
    </main>
  );
}
