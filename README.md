# GlowSaaS - Landing Page

## 📋 Descripción

Landing page profesional para **GlowSaaS**, el sistema operativo para imperios del sector belleza. Diseñada para mostrar las capacidades de gestión multi-sucursal, inteligencia artificial y facturación electrónica.

## 🚀 Tecnologías Utilizadas

- **Next.js 14.2.3** - Framework React con renderizado del lado del servidor
- **Tailwind CSS** - Framework de estilos utility-first
- **Google Fonts (Manrope)** - Tipografía moderna y profesional
- **Material Symbols** - Iconos de Google

## 🎨 Características de Diseño

### Paleta de Colores
- **Primary**: `#B83280` - Rosa/fucsia principal
- **Accent Growth**: `#2D6A4F` - Verde para crecimiento
- **Dark Accent**: `#4A154B` - Púrpura oscuro
- **Gold Accent**: `#D4AF37` - Dorado para destacados
- **Light Accent**: `#E8A0BF` - Rosa claro

### Componentes Principales

```
/app/app/components/
├── Header.js              # Navegación sticky con logo y links
├── HeroSection.js         # Sección principal con CTA
├── ScalabilitySection.js  # Gestión multi-sucursal
├── AISection.js           # Inteligencia artificial y predicciones
├── InvoicingSection.js    # Facturación electrónica
├── PricingSection.js      # 3 planes de precios
├── CTASection.js          # Call-to-action final
└── Footer.js              # Footer con links y redes sociales
```

## 🏗️ Estructura del Proyecto

```
/app/
├── app/
│   ├── components/        # Componentes reutilizables
│   ├── page.js           # Página principal
│   ├── layout.js         # Layout global con metadata
│   └── globals.css       # Estilos globales
├── tailwind.config.js    # Configuración de Tailwind
├── package.json          # Dependencias del proyecto
└── README.md            # Documentación
```

## 🎯 Secciones de la Landing Page

### 1. **Hero Section**
- Título impactante con animación de "ping"
- Dos CTAs principales
- Preview del dashboard

### 2. **Escalabilidad (Scalability)**
- Panel de gestión multi-sucursal
- Comparativa de rendimiento por ubicación
- Proyección trimestral

### 3. **Inteligencia Artificial (AI)**
- Predicción de días fuertes
- Alertas de inventario
- Segmentación automática de clientes
- Promociones inteligentes

### 4. **Facturación Electrónica**
- Certificación fiscal oficial
- Sincronización en tiempo real
- Archivo digital de 5 años

### 5. **Precios (Pricing)**
- **Starter**: $49/mes - Para salones boutique
- **Pro**: $99/mes - La solución completa (recomendado)
- **Enterprise**: A medida - Para cadenas y franquicias

### 6. **CTA Final**
- Call-to-action con estadísticas
- 1,500+ salones elite
- 94% de retención

## 🚦 Cómo Ejecutar

### Instalación
```bash
# Instalar dependencias
yarn install

# Iniciar servidor de desarrollo
yarn dev
```

La aplicación estará disponible en `http://localhost:3000`

### Producción
```bash
# Construir para producción
yarn build

# Iniciar servidor de producción
yarn start
```

## 📱 Responsive Design

La landing page está completamente optimizada para:
- 📱 **Mobile** (< 768px)
- 📱 **Tablet** (768px - 1024px)
- 💻 **Desktop** (> 1024px)

## 🎭 Características Especiales

### Efectos Visuales
- ✨ Glass morphism en paneles
- 🌊 Gradientes radiales
- 🎨 Hover effects en tarjetas de precios
- 📍 Sticky navigation header
- 🔄 Smooth scroll para navegación

### Accesibilidad
- Estructura semántica HTML5
- Contraste adecuado de colores
- Navegación por teclado
- Alt text en imágenes

## 🔧 Configuración de Tailwind

El proyecto incluye colores personalizados y utilidades:

```javascript
// tailwind.config.js
colors: {
  'primary': '#B83280',
  'accent-growth': '#2D6A4F',
  'dark-accent': '#4A154B',
  'gold-accent': '#D4AF37',
  'light-accent': '#E8A0BF',
}
```

### Utilidades Personalizadas
- `.glass-panel` - Efecto de vidrio esmerilado
- `.pricing-card` - Animación hover para tarjetas de precios
- `.gold-text` - Texto en color dorado

## 📄 Metadata SEO

```javascript
title: 'GlowSaaS - El Sistema Operativo para Imperios de Belleza'
description: 'Domina tu crecimiento con analíticas de alta fidelidad...'
```

## 🌙 Dark Mode

La landing page incluye soporte completo para modo oscuro usando la clase `dark:` de Tailwind CSS.

## 📦 Dependencias Principales

- `next`: ^14.2.3
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `tailwindcss`: ^3.4.1

## 🎓 Mejores Prácticas Implementadas

- ✅ Componentes modulares y reutilizables
- ✅ Client components solo donde es necesario
- ✅ Optimización de imágenes con Next.js
- ✅ CSS utility-first con Tailwind
- ✅ Código limpio y bien estructurado
- ✅ Sin errores de linting

## 🚀 Próximos Pasos Sugeridos

1. **Funcionalidad de Backend**
   - Implementar API para el formulario de contacto
   - Sistema de autenticación de usuarios
   - Panel de administración

2. **Optimizaciones**
   - Agregar animaciones con Framer Motion
   - Implementar lazy loading para imágenes
   - Optimizar el rendimiento con Next.js Image

3. **Integraciones**
   - Sistema de pagos (Stripe)
   - Analytics (Google Analytics)
   - Chat en vivo
   - Email marketing

4. **Testing**
   - Tests unitarios con Jest
   - Tests E2E con Playwright
   - Tests de accesibilidad

## 📞 Soporte

Para soporte o preguntas adicionales sobre el proyecto, contacta al equipo de desarrollo.

---

**Desarrollado con ❤️ usando Next.js y Tailwind CSS**
