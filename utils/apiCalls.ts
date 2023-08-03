export default async function fetchPosts() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  let result = await fetch(apiUrl);
  if (result.ok) {
    return result.json();
  } else {
    throw new Error("Something went wrong");
  }
}
export async function fetchPostsWithQuery(query: number) {
  query = query || 1;
  const apiUrl =
    "https://jsonplaceholder.typicode.com/posts/" + query + "/comments";
  let result = await fetch(apiUrl);
  if (result.ok) {
    return result.json();
  } else {
    throw new Error("Something went wrong");
  }
}
