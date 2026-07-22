import React from "react";

function BlogDetails(props) {

    const content = (
        <ul>
            {props.blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h4>{blog.author}</h4>
                    <p>{blog.description}</p>
                </div>
            ))}
        </ul>
    );

    return (
        <div className="v1">
            <h1>Blog Details</h1>
            {content}
        </div>
    );
}

export default BlogDetails;