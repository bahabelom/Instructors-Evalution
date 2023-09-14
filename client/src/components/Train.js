import React, { useState } from "react";

function Train() {
  const [blogs, setBlogs] = useState([
    { title: "ffdsdfg", author: "hfjdksl", id: 1 },
    { title: "ffdsdfg", author: "hfjdksl", id: 2 },
    { title: "ffdsdfg", author: "hfjdksl", id: 3 },
  ]);
  return (
    <div>
      {blogs.map((blog) => (
        <h1>
          Title of the Books <h4>{blog.title}</h4>
        </h1>
      ))}
    </div>
  );
}

export default Train;
