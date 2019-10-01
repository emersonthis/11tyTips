const SITE_s = '11tyTips'
const URL_s = `https://${SITE_s.toLowerCase()}.netlify.com/`

module.exports =
{
  SITE_s : `${SITE_s}`,
  DEV_s  : `http://127.0.0.1:5500/`,
  PRO_s  : `${URL_s}`,
  GIT_s  : `https://github.com/octoxalis/11tyTips/`,
  TWI_s  : `https://twitter.com/11tyTips/`,
  RSS_s  : `${URL_s}feed.xml`,


  HOME_s : `[Home page]: ${URL_s}`,
  UT_s   : `[utteranc.es]: https://github.com/utterance/utterances`,
  NODE_s : `[Node.js]: https://nodejs.org`,

  ELEVENTY_s : `[Eleventy]: https://11ty.io`,
  ELEVENTY_JFM_s: `/docs/data-frontmatter/#javascript-front-matter`,
  ELEVENTY_UDF_s: `/docs/data-frontmatter/#user-defined-front-matter-customizations`,
}