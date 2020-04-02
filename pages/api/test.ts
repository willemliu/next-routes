import Cors from "micro-cors";
const cors = Cors({
    allowMethods: ["GET", "HEAD"],
    allowHeaders: [
        "X-Requested-With",
        "Access-Control-Allow-Origin",
        "X-HTTP-Method-Override",
        "Content-Type",
        "Authorization",
        "Accept",
        "Cache-Control"
    ]
});

const result = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
    <channel>
    <title>FD - Home</title>
    <link>https://fd.nl/</link>
    <description>De RSS feed van FD.nl</description>
    <language>nl</language>
    <copyright>2020 Het Financieele Dagblad</copyright>
    <pubDate>Thu, 02 Apr 2020 14:36:06 GMT</pubDate>
    <lastBuildDate>Wed, 01 Apr 2020 09:53:11 GMT</lastBuildDate>
    <webMaster>webmaster@fd.nl</webMaster>
    <ttl>10</ttl>
    <category>Home</category>
    <item>
        <title>Laatste coronanieuws: 166 doden in de afgelopen 24 uur, Spanje en België pieken</title>
        <link>https://fd.nl/economie-politiek/1340167/laatste-coronanieuws-british-airways-stuurt-36-000-werknemers-naar-huis</link>
        <description>Parijs wil Air France-KLM intact houden, crisis slaat toe op huizenmarkten VK en België en Spanje telt een klein miljoen werklozen.</description>
        <enclosure url="https://images.fd.nl/opFyvvL-PmCHDYkWxCYepHKQpmM.jpg?fit=crop&amp;crop=faces&amp;auto=format&amp;q=45&amp;w=140&amp;h=140&amp;fm=jpg&amp;cs=tinysrgb" type="image/jpeg" />
        <pubDate>Thu, 02 Apr 2020 02:14:34 GMT</pubDate>
        <guid isPermaLink="false">https://fd.nl/economie-politiek/1340167/laatste-coronanieuws-british-airways-stuurt-36-000-werknemers-naar-huis</guid>
    </item>
  </channel>
  </rss>`;

async function fn(req, res) {
    try {
        res.status(200).json(result);
    } catch (e) {
        console.error(e);
    }
}

export default cors(fn);
