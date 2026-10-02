# ESTADO del proyecto — tienda Shopify

## Tienda
- Dominio: `cn0qya-me.myshopify.com`
- Panel: https://admin.shopify.com/store/cn0qya-me
- Ruta del proyecto: `/home/user/seleccionar-carpeta`

## Entorno (fase 0) — ✅ OK
- Node: v22.22.0
- npm: 10.9.4
- Shopify CLI: 4.8.4 (soporta `store auth` / `store execute`)

## Conexión (fase 1)
- Sesión en la NUBE (no el ordenador del usuario).
- Red: ⚠️ estaba bloqueada; el usuario abrió el acceso a internet → ✅ ahora llega a la tienda (storefront HTTP 200).
- Login de navegador de un clic NO sirve desde la nube → se usará **clave de acceso (token de app privada)** para escribir/publicar.
- Lectura del producto: hecha por la web pública (`/products.json`) sin token. ✅
- Pendiente: **clave de acceso Admin API** para escribir (tema, producto, páginas).

## Producto leído — ✅
- id: `gid://shopify/Product/11198530060626` (REST id 11198530060626)
- handle: `led-cabinet-night-light-motion-sensor-wireless-ultra-thin-under-cabinet-lamp-for-kitchen-bedroom-wardrobe-indoor-lighting`
- Título actual (en inglés, a reescribir): "LED Cabinet Night Light Motion Sensor Wireless Ultra Thin under Cabinet Lamp..."
- Qué es: luz LED de armario/bajo-mueble, ultrafina, recargable USB-C, sensor de movimiento, magnética, 3 tonos de luz (3000K/4000K/6000K), brillo regulable 10–100%, 4 modos.
- Variantes (tamaño): 20cm=36,24 · 30cm=39,78 · 40cm=45,63 · 50cm=47,16
- Imágenes: 10, descargadas en `fotos-producto/prod-0..9.jpg`. Estilo marketplace, con texto en inglés incrustado; buenas tomas de ambiente cálido (armario, cocina, ventana).

## Fase actual
- Mensaje 2 enviado: propuesta de estilo + petición de clave de acceso + opción de fotos IA.
- A la espera de: (1) confirmación/ajuste de estilo, (2) clave de acceso.

## Decisiones de diseño
- Propuesta: "Luz cálida en la oscuridad" — tema elegante oscuro con brillo ámbar cálido. PENDIENTE de confirmar.
- Idioma de la tienda: español (por defecto; confirmar).
