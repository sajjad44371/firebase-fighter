# Setup

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm i react-router-dom firebase
npm i tailwindcss @tailwindcss/vite
npm i daisyui@latest
```

**vite.config.js**
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({ plugins: [react(), tailwindcss()] });
```

1. Copy the `src/` folder from this download over your project's `src/` (replace `index.css`, `App.jsx`, `main.jsx`).
2. Copy `.env.example` to `.env` and fill in your Firebase web app keys.
3. Firebase console > Authentication > Sign-in method: enable **Email/Password** and **Google**.
4. Authentication > Settings > Authorized domains: add your deployed domain (localhost is allowed by default).
5. `npm run dev`
