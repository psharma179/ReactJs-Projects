import PostsData from "./Posts";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <h1>Home Page!!</h1>
      <Link to={"/posts"}>Posts page</Link>
    </>
  );
}

export default Home;
