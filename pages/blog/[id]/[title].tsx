import React from "react";
import { Menu } from "../../../src/Menu";

function BlogPost(props: any) {
    return (
        <>
            <Menu />
            <h1>ID: {props.id}</h1>
            <p>Title: {props.title}</p>
        </>
    );
}

BlogPost.getInitialProps = (context) => {
    console.log(context.query, context.params);
    return { ...context.query };
};

export default BlogPost;
