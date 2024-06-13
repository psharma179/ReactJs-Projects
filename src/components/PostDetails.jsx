import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiURL } from "../Config";

export default function PostDetails() {
  const { id } = useParams();

  const [singleObj, setSignleObj] = useState({});

  function fetchData(id) {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((json) => setSignleObj(json));
  }
  useEffect(() => {
    fetchData(id);
  }, []);

  return (
    <div className="text-center">
      <p>{singleObj.id}</p>
      <p>{singleObj.name}</p>
      <p>{singleObj.username}</p>
      <p>{singleObj.email}</p>
      <p>{singleObj.phone}</p>
      <p>{singleObj.website}</p>

      <Link to={"/"}>Home</Link>
      <br />
      <br />
      <Link to={"/posts"}>Back to Posts</Link>
    </div>
  );
}
