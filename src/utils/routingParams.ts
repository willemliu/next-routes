import { NextRouter } from "next/router";
import { NextPageContext } from "next";

type RoutingParams = {
    match: (ctx: NextPageContext) => boolean;
    run: (ctx: NextPageContext, Router: NextRouter) => void;
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
                    fetch(
                        "https://next-router.willemliu.now.sh/api/test"
                    ).then((res) => res.json())
                );
                ctx.res.end();
            }
        }
    },
    {
        match: (ctx) => typeof ctx.query?.widget !== "undefined",
        run: (ctx, Router) => {
            if (typeof window !== "undefined") {
                Router.push("/api/test");
            } else {
                ctx.res.writeHead(302, { Location: "/api/test" }).end();
            }
        }
    }
];
