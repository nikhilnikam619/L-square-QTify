// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import svgr from '@svgr/rollup'        // ← import SVGR

// export default defineConfig({
//   plugins: [
//     react(),
//     svgr({                           // ← add it here
//       include: '**/*.svg',          // process SVG imports in src
//       exclude: 'public/**'          // ignore any public-folder SVGs
//     })
//   ],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'

export default defineConfig({
  plugins: [
    react(),
    svgr(), // ← just plain svgr(), no extra config needed
  ],
  assetsInclude: ['**/*.svg'], // ← important!
})