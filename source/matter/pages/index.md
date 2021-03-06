---js
{
  date:      `2019-12-12`,
  layout:    `frame.njk`,
  permalink: `index.html`,
  tags:      [ `notag` ],
  eleventyExcludeFromCollections: false,

  title_s:    `11tyTips`,
  subtitle_s: `Inside Eleventy static site generator`,
  abstract_s: `Eleventy tips and tricks`,
  author_s:   `Octoxalis`,
}
---
[comment]: # (======== Post ========)
# Bienvenue

Welcome to {{A_o.ID_s}},<br/>
a site to magnify the power of [Eleventy]{{U_o.OUTLINK_s}} static site generator.{ data--="page_intro" }

{% _anchor %}
## It's Eleventy time!
{% end_anchor %}


Eleventy (11ty for short) is a static site generator rapidly gaining popularity among JAMstack developers. Its learning curve is short and it offers the largest choice of templating languages compared with others popular SSG
{% _note_txt %}
SSGs usually provide only one templating option: React, Liquid, Go, Jinja2, etc. [Hexo]{{U_o.OUTLINK_s}} is the most notable exception, but 11ty has even more options.
{% end_note_txt %}
.


11ty can be used without any configuration
{% _note_txt %}
it is [zero-config]{{U_o.OUTLINK_s}} out-of-the-box!
{% end_note_txt %}
, but its power comes from the fact that it is backed by the huge [Node.js]{{U_o.OUTLINK_s}} ecosystem. Therefore, when building your static site with 11ty, you can do anything Node is able to do.

{% _anchor %}
## Tips for newbies and advanced users
{% end_anchor %}


{{A_o.ID_s}} will provide useful tips and tricks to unleash the power of 11ty. If you've never built a static site, thanks to the simplicity of this generator, you will be able to install your site, by cloning the Github repository of this site, replacing its content files with your own Markdown content
{% _note_txt %}
follow the [site cloning] page instructions to start with a clean site skeleton.
{% end_note_txt %}


{{A_o.ID_s}} styles have been carefully designed to give you a nice and simple presentation while offering advanced capabilities for a responsive layout with fluid typography
{% _note_txt %}
applying Michael Riethmuller [formula]{{U_o.OUTLINK_s}}.
{% end_note_txt %}
, inline notes
{% _note_txt %}
with full Markdown content, styling, linking, code blocks, etc.
{% end_note_txt %}
, an Atom RSS feed, a sitemap for search engines, as well as a good commenting system
{% _note_txt %}
using the Github [utteranc.es]{{U_o.OUTLINK_s}} repository.
{% end_note_txt %}
and a full color theme with dark & light mode
{% _note_txt %}
with a single click on the page banner area!
{% end_note_txt %}
.

Have a look at the site [source tree] and [styles guide] pages.


[comment]: # (======== Links ========)

{{ F_o.siteUrl__s( 'styles_guide' ) }}
{{ F_o.siteUrl__s( 'site_cloning' ) }}
{{ F_o.siteUrl__s( 'source_tree' ) }}

{{ U_o.ELEVENTY_s }}
{{ U_o.COMMENT_s }}
{{ U_o.NODE_s }}
 
[Hexo]: https://www.staticgen.com/hexo
[zero-config]: https://www.11ty.io/docs/resources/#zero-config
[formula]: https://www.smashingmagazine.com/2016/05/fluid-typography/#comments-fluid-typography
