### Next.js with Typescript -> Building full stack app with Next.js MySQL etc.
- [Next.js + TypeScript](https://github.com/vercel/next.js) - The React Framework

- What we will learn
    - What is Next.js
    - Creating a Next.js project
    - Client and server components
    - Data fetching
    - Caching
    - Static and dynamic rendering

- `What is Next.js`
    - A framework for building fast and search-engine friendly applications
        - Next.js => framework => inbuild routing
        - React => library
    - Node.js runtime => web-browser (client) | Node.js Runtime(server)
    - Server-side rendering 
    - Pre-render static pages => static-site generation

- `Setting up environment`
    - Install Node.js
    - Install code editor e.g. vscode
    - Extension => ES7+React/Redux/React-Native snippets, JavaScript and Typescript Nightly, Tailwind CSS IntelliSence
    - npx create-next-app@13.4
    - select default values or as you wish
- Follow small letter for naming files

Client-side readering:
    - large bundles
    - resource intensive
    - no seo
    - less secure
Server-side rendering
    - smaller bundles
    - resource efficient
    - seo
    - more secure
Server components cannot
    - listen to browser events
    - access browser apis
    - maintain state
    - use effects

#### Caching
- Cacheable data can be cached by the client, which means that it’s stored on their device so they don't have to download it again
- Data sources => memore, file system, network
- Next.js have inbuild caching (file system)