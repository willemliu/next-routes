import { NextRouter } from "next/router";
import { NextPageContext } from "next";
import "isomorphic-unfetch";

type RoutingParams = {
    match: (ctx: NextPageContext) => boolean;
    run: (ctx: NextPageContext, Router: NextRouter) => Promise<void>;
}[];

/**
 * Note that the order of specificity matters. Most specific match should be at top.
 */
export const routingParams: RoutingParams = [
    {
        match: (ctx) => ctx.query?.widget === "rewrite",
        run: async (ctx, Router) => {
            if (typeof window !== "undefined") {
                // When SPA navigation we need to redirect the user to another endpoint here because ctx.res is unavailable client-side.
                Router.push("/api/test");
            } else {
                ctx.res.writeHead(200, {
                    "Content-Type": "application/rss+xml;charset=UTF-8"
                });
                ctx.res.write(
                    await fetch(
                        "https://next-routes.willemliu.now.sh/api/test"
                    ).then((res) => res.text())
                );
                ctx.res.end();
            }
        }
    },
    {
        match: (ctx) => typeof ctx.query?.widget !== "undefined",
        run: async (ctx, Router) => {
            if (typeof window !== "undefined") {
                Router.push("/api/test");
            } else {
                ctx.res.writeHead(302, { Location: "/api/test" }).end();
            }
        }
    }
];
