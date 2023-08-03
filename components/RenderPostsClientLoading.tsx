"use client";

import { useEffect, useState } from "react";

// Accepts a promise of posts as a prop
export default function RenderPosts({
  postPromise,
}: {
  postPromise: Promise<Post[]>;
}) {
  // We need to use state here. We want to rerender this page once the
  // posts have been fetched. We can't use await here, because we can't
  // use await in a functional component at the top level.
  // we have to use it in a useEffect hook.
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // create the async function inside the useEffect hook
    async function getPosts() {
      // await the promise
      const posts = await postPromise;

      // We can add a dummy wait here to simulate a slow connection
      // ignore this in your own code
      const dummyWait = await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );
      // set the state with the posts
      setPosts(posts);
    }
    // call the async function
    getPosts();
  });

  // if the posts are empty, we are still loading and the client has not
  // resolved the promise yet. So we can return a loading component.
  if (posts.length === 0) return <div>Loading...</div>;

  // We can map over the posts, because we already checked to see if the posts have been returned.
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
