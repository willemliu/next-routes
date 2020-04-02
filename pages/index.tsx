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

Index.getInitialProps = async (ctx) => {
    console.log(ctx.query, ctx.params);
    try {
        await checkRedirects(ctx, Router);
    } catch (e) {
        console.error(e);
    }
    return { ...ctx.query };
};

export default Index;
