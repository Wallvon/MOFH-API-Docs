import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
    docsRepositoryBase: 'https://github.com/Wallvon/MOFH-API-Docs/blob/main', // base URL for the docs repository
    project: {
        link: 'https://github.com/Wallvon/MOFH-API-Docs',
    },
    chat: {
        link: 'https://dsc.gg/ifastnet',
    },
    editLink: {
        text: 'Edit this page on GitHub'
    },
    // banner: {
    //     key: 'change-package-api-docs-available',
    //     text: <>
    //         🎉 Change package API documentation is now available! <Link href="/changelog" style={{textDecoration: 'underline'}}>Changelog...</Link>
    //     </>,
    //     dismissible: true
    // },
    sidebar: {
        defaultMenuCollapseLevel: 1
    },
    useNextSeoProps() {
        const { frontMatter } = useConfig()
        const { route, asPath } = useRouter()
        return {
            titleTemplate: (route !== '/' ? '%s – MyOwnFreeHost API Documentation' : 'MyOwnFreeHost API Documentation'),
            title: frontMatter.title,
            description:
                frontMatter.description || "API Documentation for iFastNet's MyOwnFreeHost.",
            twitter: {
                cardType: 'summary_large_image',
                site: `https://api.myownfreehost.net${asPath}`
            },
            themeColor: '#FF5274',
            keywords: 'MyOwnFreeHost,MOFH,iFastNet,VistaPanel,vPanel,FreeHosting,Documentation,API',
            author: 'Robert S. & Contributors',
            additionalMetaTags: [
                { httpEquiv: 'Content-Language', content: 'en' },
                { name: 'og:url', content: `https://api.myownfreehost.net${asPath}` },
                { name: 'og:image', content: 'https://api.myownfreehost.net/images/logo/logo.png' },
                { name: 'apple-mobile-web-app-title', content: 'MyOwnFreeHost API Documentation' },
                { name: 'msapplication-TileColor', content: '#FF5274' },
            ],
        }
    },
    darkMode: true,
    primaryHue: 340,
    footer: {
        component: <footer className="nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900">
            <hr className="dark:nx-border-neutral-800" />
            <div className="nx-mx-auto nx-max-w-[90rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]">
                MIT {new Date().getFullYear()} ©&nbsp;<a href="https://robert-s.dev" target="_blank" rel="noopener noreferrer">Robert S.</a> & <a href="https://github.com/Wallvon/MOFH-API-Docs/graphs/contributors" target="_blank" rel="noopener noreferrer">Contributors</a>
            </div>
        </footer>
    },
    logo: (
        <>
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 0 250 76"
                fill="currentColor"
            >
                <g
                    transform="translate(0.000000,76.000000) scale(0.050000,-0.050000)"
                    stroke="none"
                    fill="currentColor"
                >
                    <path d="M3574 1491 c-110 -39 -207 -111 -266 -195 -100 -142 -106 -188 -107
                             -761 l-1 -535 110 0 110 0 0 320 0 320 210 0 210 0 0 110 0 110 -210 0 -210 0
                             0 91 c0 197 119 329 311 345 l109 9 0 107 0 108 -95 -1 c-52 0 -129 -13 -171
                             -28z"
                    />
                    <path d="M3920 760 l0 -760 109 0 108 0 7 329 c8 425 66 521 316 521 253 0
                             320 -111 320 -533 l0 -317 110 0 110 0 -2 325 c-1 350 -11 401 -109 539 -138
                             194 -455 271 -664 160 l-85 -45 0 271 0 270 -110 0 -110 0 0 -760z"
                    />
                    <path d="M361 1047 c-255 -94 -341 -279 -341 -731 l0 -316 110 0 110 0 0 317
                             c0 421 67 533 318 533 251 0 322 -121 322 -548 l0 -302 110 0 110 0 0 317 c0
                             422 67 533 320 533 253 0 320 -111 320 -533 l0 -317 110 0 110 0 0 305 c0 343
                             -14 412 -106 547 -178 263 -549 298 -813 76 l-63 -54 -64 61 c-140 132 -370
                             179 -553 112z"
                    />
                    <path d="M2409 1053 c-328 -126 -460 -473 -296 -775 263 -484 995 -292 997
                             262 1 366 -373 640 -701 513z m347 -247 c262 -194 145 -576 -176 -576 -348 0
                             -447 456 -130 603 80 37 239 23 306 -27z"
                    />
                </g>
            </svg>
        </>
    ),
}