(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"KZ+V":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));a("1c7q"),a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("2mQt");var n=a("/FXl"),r=a("TjRS"),o=a("erf5"),l=a("Vkpr"),i=a.n(l);a("aD51");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/__docz__/index.mdx"}});var s={_frontmatter:c},b=r.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,p({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("div",{style:{display:"flex",alignItems:"center"}},Object(n.b)("div",null,Object(n.b)("h1",null,"React Super SEO")),Object(n.b)("div",null,Object(n.b)("a",{href:"https://github.com/devboldly/react-super-seo/",target:"_blank",rel:"noopener noreferrer"},Object(n.b)(o.SvgIcon,{src:i.a,size:28,style:{margin:"0 0 0 20px"},mdxType:"SvgIcon"})))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"The React SEO component that handles metadata so you don't have to. Supports Google, OpenGraph, Twitter, and beyond. 🚀")),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"This component adds SEO (search engine optimization) metadata tags to the ",Object(n.b)("inlineCode",{parentName:"p"},"head")," element for you. It includes full support for ",Object(n.b)("a",p({parentName:"p"},{href:"https://ogp.me/"}),"OpenGraph"),", ",Object(n.b)("a",p({parentName:"p"},{href:"https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards"}),"Twitter Cards"),", and ",Object(n.b)("a",p({parentName:"p"},{href:"https://support.google.com/webmasters/answer/79812?hl=en"}),"Google"),", as well as support for numerous popular meta tags, and any custom tags you might want to add beyond that!"),Object(n.b)("p",null,"👁️ ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",p({parentName:"strong"},{href:"/react-super-seo/SuperSEO#usage"}),"Live Demo"))),Object(n.b)("h3",{id:"why-super-seo"},"Why Super SEO?"),Object(n.b)("p",null,"There are no less than a hundred different React SEO components floating around the web, and most have half-baked or zero support for OpenGraph, and many don't support Twitter Cards at all. Worse, documentation for them is sparse."),Object(n.b)("p",null,"The goal of this project was to create the end all, be all, super SEO component for React."),Object(n.b)("p",null,"This component supports OpenGraph and Twitter Cards fully, and includes TypeScript type definitions and fully documented code (including image size recommendations from the official specs) for an enjoyable coding experience. It also falls back where possible and infers MIME types automatically. "),Object(n.b)("p",null,"Is it super? You decide!"),Object(n.b)("h3",{id:"features-include"},"Features include:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"🔌 Essential tags")," ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Supports essential SEO tags like ",Object(n.b)("inlineCode",{parentName:"li"},"title"),", ",Object(n.b)("inlineCode",{parentName:"li"},"description"),", and more."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"💯 Full OpenGraph and Twitter Cards support"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Control how your content appears on the most popular social networks."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"💁 Metadata fallback"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"OpenGraph and Twitter Cards fall back on title and description automatically."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"🕷️ Crawler configuration"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Configure search engine crawlers with ",Object(n.b)("inlineCode",{parentName:"li"},"robots")," and ",Object(n.b)("inlineCode",{parentName:"li"},"googlebot"),"."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"✅ Google site verification"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Easily add your verification meta tag for Google Search Console."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"⚒️ Custom meta tags"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Need to include something else? Custom meta tags are quick and painless."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"🖼️ Automatic MIME type inference"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Media MIME types are inferred automatically, meaning one less thing to configure."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"✨ TypeScript support and rich documentation"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Includes full TypeScript type definitions and rich documentation, inside and out. Knowledge is power!")))),Object(n.b)("h2",{id:"installation"},"Installation"),Object(n.b)("pre",null,Object(n.b)("code",p({parentName:"pre"},{}),"npm i react-super-seo\n")),Object(n.b)("h2",{id:"quick-start"},"Quick Start"),Object(n.b)("pre",null,Object(n.b)("code",p({parentName:"pre"},{className:"language-jsx"}),"import { SuperSEO } from 'react-super-seo';\n")),Object(n.b)("pre",null,Object(n.b)("code",p({parentName:"pre"},{className:"language-jsx"}),"<SuperSEO\n  title=\"Home | React Super SEO\"\n  description=\"React SEO component with OpenGraph and Twitter Cards support.\"\n  lang=\"en\"\n  openGraph={{\n    ogImage: {\n      ogImage: 'http://placekitten.com/1200/630',\n      ogImageAlt: 'Kittens',\n      ogImageWidth: 1200,\n      ogImageHeight: 630,\n      ogImageType: 'image/jpeg',\n    },\n  }}\n  twitter={{\n    twitterSummaryCard: {\n      summaryCardImage: 'http://placekitten.com/1200/630',\n      summaryCardImageAlt: 'Kittens',\n      summaryCardSiteUsername: 'devboldly',\n    },\n  }}\n/>\n")),Object(n.b)("h3",{id:"custom-meta-tags"},"Custom Meta Tags"),Object(n.b)("p",null,"Wrap custom meta tags with ",Object(n.b)("inlineCode",{parentName:"p"},"SuperSEO"),". They will be rendered directly inside the ",Object(n.b)("inlineCode",{parentName:"p"},"head")," element."),Object(n.b)("pre",null,Object(n.b)("code",p({parentName:"pre"},{className:"language-jsx"}),'<SuperSEO\n  title="My Page"\n  description="An awesome page that does a lot of cool stuff"\n>\n  <meta name="custom-meta" content="my-value" />\n  <meta property="custom-meta-2" content="my-other-value" />\n</SuperSEO>\n')),Object(n.b)("p",null,"Refer to the ",Object(n.b)("a",p({parentName:"p"},{href:"/react-super-seo/SuperSEO"}),"SuperSEO component")," usage for all available options."),Object(n.b)("h2",{id:"typescript"},"TypeScript"),Object(n.b)("p",null,"Type definitions have been included for ",Object(n.b)("a",p({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," support."),Object(n.b)("h2",{id:"contributing"},"Contributing"),Object(n.b)("p",null,"Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help."),Object(n.b)("p",null,"For major changes, open an issue first to discuss what you'd like to change."),Object(n.b)("p",null,"See the ",Object(n.b)("a",p({parentName:"p"},{href:"https://tinyurl.com/ya3k258d"}),"library template")," for npm script documentation."),Object(n.b)("h2",{id:"-found-it-helpful-star-it"},"⭐ Found It Helpful? ",Object(n.b)("a",p({parentName:"h2"},{href:"https://github.com/devboldly/react-super-seo/stargazers"}),"Star It!")),Object(n.b)("p",null,"If you found this project helpful, let the community know by giving it a ",Object(n.b)("a",p({parentName:"p"},{href:"https://github.com/devboldly/react-super-seo/stargazers"}),"star"),": ",Object(n.b)("a",p({parentName:"p"},{href:"https://github.com/devboldly/react-super-seo/stargazers"}),"👉⭐")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/__docz__/index.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docz-index-mdx-d1ec0218453d0cbf38f7.js.map