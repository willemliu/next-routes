import { NextPageContext } from "next";
import { routingParams } from "./routingParams";
import { NextRouter } from "next/router";

export function checkRedirects(ctx: NextPageContext, Router: NextRouter) {
    routingParams.forEach((route) => {
        if (route.match(ctx)) route.run(ctx, Router);
    });
}
