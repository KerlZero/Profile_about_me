## Saran Chuephoodee Portfolio

This project is a personal portfolio site built with Next.js 16, React 19, and Tailwind CSS 4.

## Local Development

Run everything from the project folder:

```bash
cd /Users/saranchu/my-profile-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Check

To verify the production build locally:

```bash
cd /Users/saranchu/my-profile-site
npm run build
npm run start
```

## Previous Tailwind Error

If you saw `Can't resolve 'tailwindcss' in '/Users/saranchu'`, the command was likely started from `/Users/saranchu` instead of this repo. This app has its own `package.json` and `node_modules`, so Next.js must be run from `/Users/saranchu/my-profile-site`.

## Main Files

- `app/page.tsx`: homepage layout
- `app/content.ts`: portfolio data
- `app/layout.tsx`: metadata and app shell
- `app/globals.css`: global styles
- `app/robots.ts`: robots metadata
- `app/sitemap.ts`: sitemap metadata

## Notes

- The scripts use webpack explicitly because it is more reliable than Turbopack in this local environment.
- Set `NEXT_PUBLIC_SITE_URL` in production so metadata and sitemap URLs use your real domain.
