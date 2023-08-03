import fetchData from "@/utils/apiCalls";

export default async function Home() {
  // Fetch data from API, we use await which means this page won't
  // be rendered until the data is fetched
  const ourPosts: Post[] = await fetchData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-8xl mb-20">The way we have been doing it</h1>

      {/* We can map over the posts, because we awaited the promise
      and because of that we KNOW the posts have been fetched! */}
      {ourPosts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-xl">{post.body}</p>
        </div>
      ))}
    </main>
  );
}
