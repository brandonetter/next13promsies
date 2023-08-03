import fetchData from "@/utils/apiCalls";

export default async function RenderPosts() {
  // here we await the promise, just like we used to. So this component
  // will not be rendered until the promise is resolved.
  // and until the promise is resolved, the Suspense fallback component will be
  // rendered!
  const posts: Post[] = await fetchData();

  // We can add a dummy wait here to simulate a slow connection
  // ignore this in your own code
  const dummyWait = await new Promise((resolve) => setTimeout(resolve, 1500));

  // We can map over the posts, because we awaited the promise
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-xl">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
