module.exports = {
    experimental: {
        modern: true,
        polyfillsOptimization: true,
        async rewrites() {
            return [
                {
                    source: "/post/:id/:title",
                    destination: "/index?id=:id&title=:title"
                },
                {
                    source: "/post/:id",
                    destination: "/index?id=:id"
                }
            ];
        }
    }
};
