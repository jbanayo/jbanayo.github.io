# Julius Noel Banayo — Portfolio & Research Hub (`jbanayo.github.io`)

Built with **Astro** and deployed for \$0/year on **GitHub Pages**.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:4321` to preview locally.

## Updating Content (10-Year Workflow)

- **Profile links, email, LinkedIn, ORCID, Open-Source Projects, Research Papers:** Edit `src/data/site.ts`.
- **Add a new Device / Patent:** Create a new `.md` file in `src/content/inventions/`.
- **Add a new Essay / LinkedIn Companion Post:** Create a new `.md` file in `src/content/writing/`.
- **Add photos:** Place images in `public/images/`.

## Publishing to GitHub Pages (`https://jbanayo.github.io`)

```bash
git init -b main
git add .
git commit -m "Initial portfolio launch"
gh repo create jbanayo/jbanayo.github.io --public --source=. --remote=origin --push
```

Then in GitHub → `Settings` → `Pages`, set **Source** to **GitHub Actions**. Every push to `main` will automatically rebuild and publish to `https://jbanayo.github.io`.
