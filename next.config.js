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
        },
        async redirects() {
            return [
                {
                    source: "/rss/fd",
                    destination: "https://fd.nl?rss",
                    permanent: false
                },
                {
                    source: "/rss/fd/:section",
                    destination: "https://fd.nl/$1/?rss",
                    permanent: false
                }
            ];
        }
    }
};
