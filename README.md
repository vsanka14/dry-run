# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎬 Video Compression

Videos in `public/videos/` are compressed using ffmpeg with the following settings:

```bash
ffmpeg -i input.mov -c:v libx264 -profile:v high -pix_fmt yuv420p -b:v 420k -an output.mp4
```

| Flag | Description |
| :--- | :---------- |
| `-c:v libx264` | H.264 codec for broad compatibility |
| `-profile:v high` | High profile for better compression efficiency |
| `-pix_fmt yuv420p` | Standard pixel format for web compatibility |
| `-b:v 420k` | Target bitrate ~420 kbps (achieves ~1-1.5MB for 20-30s videos) |
| `-an` | Strip audio track |

This achieves ~10-15x compression ratio from screen recording sources.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
