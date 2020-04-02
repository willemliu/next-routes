import { NextPageContext } from "next";
import { routingParams } from "./routingParams";
import { NextRouter } from "next/router";

export async function checkRedirects(ctx: NextPageContext, Router: NextRouter) {
    for await (const route of routingParams) {
        if (route.match(ctx)) {
            await route.run(ctx, Router);
            break;
        }
    }
}
