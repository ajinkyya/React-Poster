import { Outlet } from "react-router-dom";
import PostList from "./PostList";
function Posts() {
  return (
    <>

      <Outlet />
      <main>
      <PostList />
     </main>
    </>
  );
}

export default Posts;
export async function loadData()
{
    const data = await fetch('http://localhost:8080/posts')
        const datajson = await data.json();
        return datajson.posts;
}
