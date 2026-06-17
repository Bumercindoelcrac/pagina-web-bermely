# BER-MELY — Web App Premium

Restaurante • Café • Crepería

Web app completa, moderna, responsive y lista para producción. Desarrollada con HTML5, CSS3 y JavaScript vanilla (sin dependencias externas). Todas las imágenes se cargan desde la carpeta local `imagenes/`.

## Datos de contacto reales del negocio

- **Nombre:** Café Ber-MELY
- **Teléfono / WhatsApp:** [55 3963 7021](https://wa.me/5215539637021)
- **Facebook:** [facebook.com/profile.php?id=61583359805039](https://www.facebook.com/profile.php?id=61583359805039)
- **Google Maps:** [Café Ber-MELY en Google Maps](https://www.google.com/maps/place/Caf%C3%A9+Ber-Mely/@19.3021094,-99.0250609,15z/data=!4m6!3m5!1s0x85ce030064adfedb:0x9299c06b1893d7d2!8m2!3d19.297633!4d-99.0220159!16s%2Fg%2F11yp74r439)
- **Ubicación:** Tláhuac, Ciudad de México, CDMX (19.297633, -99.0220159)
- **Horarios:**
  - Lunes y martes: 8:00 AM – 5:30 PM
  - Miércoles a sábado: 8:00 AM – 8:30 PM
  - Domingo: 9:00 AM – 8:30 PM

## Estructura del proyecto

```
ber-mely/
├── index.html          # Sitio principal
├── styles.css          # Estilos
├── app.js              # Lógica del sitio
├── images/
│   └── logo-icon.svg   # Favicon
├── imagenes/           # Recursos visuales
│   ├── hero/
│   ├── especialidades/
│   ├── nosotros/
│   ├── galeria/
│   ├── testimonios/
│   └── productos/
├── robots.txt
├── sitemap.xml
├── manifest.json
└── README.md
```

> **Nota:** se usa `imagenes` (sin acento) por compatibilidad con URLs web.

## Menú cargado (176 productos)

El menú digital incluye:

- **Desayunos** — chilaquiles, enchiladas, huevos, omelettes, molletes, hot cakes
- **Menú Ejecutivo** — lunes a viernes
- **Entradas** — guacamole, frijoles, queso fundido, chapulines
- **Carnes** — ribeye, New York, T-bone, sirloin, picanha, arrachera, costilla, pechuga, bistec
- **Mariscos** — mojarra, camarones, aguachile, filete de pescado
- **Tacos y Otros** — tacos, burritos, alambres
- **Molcajetes** — Ber-Mely, mar y tierra, aguachile
- **Ensaladas** — Ber-Mely, Primavera, Campestre
- **Caldos** — exclusivo sábados y domingos (pancita, pozole, gallina)
- **Bebidas** — jugos, aguas frescas, refrescos, cervezas, jarras
- **Coctelería** — cantaritos, margaritas, mojitos
- **Cafetería** — hamburguesas, hot dogs, sándwichs, chapatas, snacks, cafés, frappés, chamoyadas, licuados
- **Crepas** — saladas, dulces, especiales, con chocolates y con licor

## Características principales

- Loader premium, header glassmorphism, hero parallax
- Menú digital con buscador, filtros, categorías, subcategorías, ordenamiento, favoritos, vista grid/lista
- Modal de producto con cantidad, extras, notas y agregar al carrito
- Carrito con extras, notas, LocalStorage y checkout por WhatsApp
- Reservaciones con formulario validado y envío por WhatsApp
- Galería masonry con lightbox
- Testimonios, estadísticas animadas, mapa interactivo
- Botón flotante de WhatsApp
- Footer con datos, horarios, redes sociales, aviso de privacidad y crédito a Bumercindo
- Accesibilidad WCAG
- SEO avanzado: meta tags, Open Graph, Twitter Card, Schema.org, canonical, hreflang, robots.txt, sitemap.xml, PWA manifest
- **Múltiples animaciones premium:** fade, scale, parallax, hover effects, typing effect, shine buttons, magnetic buttons, staggered reveals, pulse effects, floating elements, scroll glow, modal entrance, toast slide, cart slide

## Sección "Conócenos"

La sección Nosotros incluye el texto completo de BER-MELY con:

- Título: **CONÓCENOS**
- Subtítulo: BER-MELY: Restaurante, Cafetería y Crepería en Tláhuac
- Descripción de la historia y propuesta
- **MISIÓN**
- **VISIÓN**
- **VALORES** con íconos:
  - ❤️ Calidad en cada preparación
  - ☕ Pasión por el servicio
  - 🤝 Honestidad y compromiso
  - 👨‍👩‍👧‍👦 Ambiente familiar
  - 🌟 Mejora continua

## Personalización

### 1. Datos de contacto

Si cambian teléfono, Facebook o ubicación, edita:
- `index.html`
- `app.js` (`config.whatsappNumber`)
- Schema.org JSON-LD

### 2. Imágenes del sitio

Reemplaza los placeholders en `imagenes/` por fotos reales del restaurante.

### 3. Menú (precios, nombres, agregar/quitar platillos)

Edita el array `menuData` en `app.js`.

Para agregar un nuevo producto:

```js
{
  id: 177,
  name: 'Nuevo platillo',
  description: 'Descripción atractiva',
  category: 'Carnes',
  subcategory: 'Res',
  price: 150,
  image: 'imagenes/productos/nueva-foto.jpg',
  tags: ['Popular'],
  rating: 4.8,
  orders: 100,
  featured: false
}
```

### 4. Animaciones

Las animaciones están en `styles.css` y `app.js`. Para reducirlas o desactivarlas, el sitio respeta automáticamente la preferencia del usuario de **reducir movimiento** (`prefers-reduced-motion`).

## SEO implementado

- Título y descripción optimizados con palabras clave locales
- Open Graph para Facebook
- Twitter Card
- Schema.org: Restaurant, WebSite, BreadcrumbList
- Canonical, hreflang `es-MX` y `es`
- Preconnect y preload de recursos críticos
- Geo tags con coordenadas
- robots.txt, sitemap.xml, manifest.json

## Cómo subir a Netlify

1. Comprime todos los archivos en un `.zip`.
2. Ve a [https://app.netlify.com](https://app.netlify.com).
3. Clic en **Add new site > Deploy manually**.
4. Arrastra el `.zip`.
5. Te dará una URL como `https://ber-mely-123.netlify.app`.
6. (Opcional) Conecta tu dominio propio en **Domain settings**.

## Licencia

Proyecto propietario de Café Ber-MELY. Creado por Bumercindo.

---

Desarrollado como experiencia web premium para Café Ber-MELY.
