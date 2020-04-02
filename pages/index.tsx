import React from "react";
import { Menu } from "../src/Menu";
import { Footer } from "../src/Footer";
import Router from "next/router";
import { checkRedirects } from "../src/utils/redirects";

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

Index.getInitialProps = (ctx) => {
    console.log(ctx.query, ctx.params);
    checkRedirects(ctx, Router);
    return { ...ctx.query };
};

export default Index;
