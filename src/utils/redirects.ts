export function checkRedirects(ctx, Router) {
    const redirectToWidget = () =>
        typeof window !== "undefined"
            ? Router.push("/api/test")
            : ctx.res.writeHead(302, { Location: "/api/test" }).end();

    if (typeof ctx.query.widget !== "undefined") {
        console.log("isWidget");
        redirectToWidget();
    }
}
