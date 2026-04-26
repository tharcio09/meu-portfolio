// postcss.config.js — compatível com Tailwind CSS v3
// IMPORTANTE: remova @tailwindcss/postcss do package.json (é para Tailwind v4)
// e mantenha apenas tailwindcss: ^3.x.x + autoprefixer nos devDependencies

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
