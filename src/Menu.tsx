import React from "react";
import Link from "next/link";

function Menu() {
    return (
        <nav>
            <h2>
                Using{" "}
                <a href="https://nextjs.org/docs/routing/introduction">
                    Dynamic Route segments
                </a>
            </h2>
            <ul>
                <li>
                    <Link
                        href="/blog/[id]/[title]"
                        as="/blog/1/some-pretty-url"
                    >
                        <a>Blog 1</a>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/blog/[id]/[title]"
                        as="/blog/2/some-pretty-url2"
                    >
                        <a>Blog 2</a>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/blog/[id]/[title]"
                        as="/blog/3/some-pretty-url3"
                    >
                        <a>Blog 3</a>
                    </Link>
                </li>
            </ul>

            <h2>Using `rewrites` in `next.config.js`</h2>
            <ul>
                <li>
                    <Link
                        href="/index?id=1&amp;title=some-pretty-url"
                        as="/post/1/some-pretty-url1"
                    >
                        <a>Post 1</a>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/index?id=2&amp;title=some-pretty-url2"
                        as="/post/2/some-pretty-url2"
                    >
                        <a>Post 2</a>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/index?id=3&amp;title=some-pretty-url3"
                        as="/post/3/some-pretty-url3"
                    >
                        <a>Post 3</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export { Menu };
