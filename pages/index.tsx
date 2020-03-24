import React from "react";
import { Menu } from "../src/Menu";
import { Footer } from "../src/Footer";

function Index(props: any) {
    return (
        <>
            <Menu />
            <h1>{props.id ? `ID: ${props.id}` : "Home"}</h1>
            {props.title && <p>Title: {props.title}</p>}
            <Footer />
        </>
    );
}

Index.getInitialProps = (context) => {
    console.log(context.query, context.params);
    return { ...context.query };
};

export default Index;
