This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## ISSUES

### Timeout error on API fetch
 Try forcing node to prefer IPv4 

 - *Linux and mac*:         `NODE_OPTIONS="--dns-result-order=ipv4first" next dev`
 - *Windows powershell*:    `$env:NODE_OPTIONS="--dns-result-order=ipv4first"; npm run dev`
 - *Package.json*:          
        `"scripts": {"dev": "NODE_OPTIONS='--dns-result-order=ipv4first' next dev"}` linux/macos
        `"scripts": {"dev":  "set NODE_OPTIONS=--dns-result-order=ipv4first && next dev"}`  windows
 
 ### Missing Tailwind styles after folder refactor
 Add correct routes on `tailwind.config.ts`

 `content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"]`

 ### Tailwind classes not working
 Dinamic classes on tailwind does not work
       `<span className={`bg-[${typesColors[elem.type.name]}] text-white px-1 rounded`}>Hello</span>`

try setting the whole classname instead
       `<span className={`${typesColors[elem.type.name]} text-white px-1 rounded`}>Hello</span>`
