# Jannat Fatima — Portfolio

Personal website for Jannat Fatima: academic work, technical projects, internship, speaking, media, and leadership. Content lives in `src/data` so it can be updated without redesigning the layout.

## Run locally

Requirements: Node.js 20 or later.

```bash
cd jannat-portfolio
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Vite. Build command: `npm run build`. Output: `dist`.
4. Leave environment variables empty unless you later add a **server-side** chat API.

`vercel.json` already rewrites routes to `index.html` for React Router.

Do not put API keys in frontend files. If you connect a chatbot backend later, expose only `VITE_CHAT_API_URL` pointing at your own API. Secrets stay on the server.

## Edit content

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | Name, about text, LinkedIn, future email/GitHub/resume |
| `src/data/projects.ts` | Project cards and detail pages |
| `src/data/experience.ts` | PITB internship |
| `src/data/education.ts` | Degree and university placeholder |
| `src/data/activities.ts` | Confirmed activities plus unpublished slots |
| `src/data/skills.ts` | Skill groups |
| `src/data/certificates.ts` | Certificate slots (`confirmed: true` to publish) |
| `src/data/learning.ts` | Learning journey copy |
| `src/data/chatbot.ts` | Local chatbot answers |
| `src/data/confirmation.ts` | Internal checklist of missing facts |
| `CONFIRMATION.md` | Same checklist in Markdown |

To show a real photograph, drop the file in the matching `public/images/...` folder, then set `src` on that record to the same path as `suggestedPath`.

A resume button is intentionally omitted until `profile.links.resume` points at a real file.
