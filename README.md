# StyleFlow Landing

Landing page de marketing para StyleFlow, construida con Next.js App Router y Tailwind CSS.

## Stack

- Next.js 14.2.35
- React 18
- Tailwind CSS
- Google Fonts para Manrope
- Material Symbols vía Google Fonts

## Estructura

```text
app/
  components/
    AISection.js
    CTASection.js
    Footer.js
    Header.js
    HeroSection.js
    InvoicingSection.js
    PricingSection.js
    ScalabilitySection.js
  globals.css
  layout.js
  page.js
```

## Scripts

```bash
yarn dev
yarn build
yarn lint
yarn start
yarn test
yarn verify
```

- `yarn dev`: levanta el entorno local en `http://localhost:3000`
- `yarn build`: genera la build de producción
- `yarn lint`: ejecuta reglas base de Next.js sobre el proyecto
- `yarn start`: sirve la build generada
- `yarn test`: corre smoke tests sobre composición, metadata y seguridad
- `yarn verify`: validación rápida basada en la build actual

## Estado Actual

- El proyecto es una landing estática.
- No expone API pública ni usa MongoDB.
- No requiere variables de entorno para compilar en su estado actual.
- La configuración de seguridad básica vive en `next.config.js`.

## Diseño

- Paleta principal:
  - `primary`: `#0F766E`
  - `accent-growth`: `#2563EB`
  - `dark-accent`: `#14212B`
  - `gold-accent`: `#C59A5C`
  - `light-accent`: `#8FBFC7`
- Tipografía principal: Manrope
- Utilidades personalizadas en `app/globals.css`:
  - `.glass-panel`
  - `.pricing-card`
  - `.gold-text`

## Próximos Pasos Recomendados

1. Añadir un flujo de lint real si el proyecto va a seguir creciendo.
2. Reemplazar imágenes remotas inline por assets propios u optimizados si la landing entra a producción estable.
3. Agregar pruebas smoke básicas si se van a introducir más cambios de contenido o layout.
4. Evaluar una migración posterior a Next.js 15 o 16, ya que 14.x ya no está en LTS activo.
