"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// Accepts a promise of posts as a prop
export default function RenderPosts({
  commentPromise,
}: {
  commentPromise: Promise<Comment[]>;
}) {
  // Set up the router from next/navigation so that
  // we can send the query to the URL,
  // and so the server can read the query from the URL
  // and send a new promise to us :)
  const router = useRouter();

  // We need to use state here. We want to rerender this page once the
  // posts have been fetched. We can't use await here, because we can't
  // use await in a functional component at the top level.
  // we have to use it in a useEffect hook.
  const [comments, setPosts] = useState<Comment[]>([]);

  //set a state we can use to update the query
  const [query, setQuery] = useState<number>(1);

  useEffect(() => {
    // create the async function inside the useEffect hook
    async function getComments() {
      // await the promise
      const posts = await commentPromise;

      // We can add a dummy wait here to simulate a slow connection
      // ignore this in your own code
      const dummyWait = await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );
      // set the state with the posts
      setPosts(posts);
    }
    // call the async function
    getComments();
  });

  // this useEffect hook will run every time the query changes
  useEffect(() => {
    // We can use the router to push a new query to the URL
    router.push(`otherwayquery/?query=${query}`);
    setPosts([]);
  }, [query, router]);

  // some weird conditional rendering because I'm a terrible person
  const restOfPage =
    comments.length === 0 ? (
      <div>Loading...</div>
    ) : (
      <div>
        <h1>Comments:</h1>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-3xl font-bold">{comment.name}</h1>
            <p className="text-xl">{comment.body}</p>
          </div>
        ))}
      </div>
    );

  return (
    <>
      <div className="absolute top-0">
        Change the number to get different posts
        <input
          className="border-2 border-black  text-black"
          type="number"
          value={query}
          onChange={(e) => setQuery(parseInt(e.target.value))}
        />
        <h1>Query: {query}</h1>
      </div>
      {restOfPage}
    </>
  );
}
