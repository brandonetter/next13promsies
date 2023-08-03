import { Suspense } from "react";

import RenderPostsServerComponent from "@/components/RenderPostsServerComponent";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl mb-20">
        Using a server component. We can just wrap it in suspense!
      </h1>

      {/* We Wrap this server component in suspense! The component
      will suspend while it awaits the promise we pass in, so the
      fallback from suspense will instead show! */}
      <Suspense fallback={<div>Loading...</div>}>
        <RenderPostsServerComponent />
      </Suspense>
    </main>
  );
}
