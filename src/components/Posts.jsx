import React, { useEffect, useState } from "react";
import PostsData from "./PostsData";
import { Link } from "react-router-dom";
import { apiURL } from "../Config";

export default function Posts() {
  const [data, setData] = useState([]);

  function fetchURL() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    fetchURL();
  }, []);
  return (
    <>
      {console.log(data)}
      <h1>Posts</h1>
      <table className="table">
        <tbody>
          {data &&
            Array.isArray(data) &&
            data.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.name}</td>
                  <td>{post.username}</td>
                  <td>{post.email}</td>
                  <td>{post.phone}</td>
                  <td>{post.website}</td>

                  <td>
                    <Link
                      to={"/posts/" + post.id}
                      className="btn btn-primary btn-sm"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <Link to={"/"}>Back to Home</Link>
    </>
  );
}
