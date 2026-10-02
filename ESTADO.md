# ESTADO del proyecto — tienda Shopify

## Tienda
- Dominio: `cn0qya-me.myshopify.com`
- Panel: https://admin.shopify.com/store/cn0qya-me
- Ruta del proyecto: `/home/user/seleccionar-carpeta`
- Carpeta del tema: `/home/user/seleccionar-carpeta/theme`

## Entorno (fase 0) — ✅ OK
- Node v22.22.0 · npm 10.9.4 · Shopify CLI 4.8.4

## Conexión (fase 1) — ✅ OK
- Sesión en la NUBE. Red abierta por el usuario → llega a la tienda.
- Acceso de escritura: **Theme Access** (contraseña `shptka_…`, guardada en `.clave-tienda.txt`, NO en git).
  - Variable: `SHOPIFY_CLI_THEME_TOKEN`. Funciona `shopify theme list/push`.
  - Limitación: solo tema (no Admin API). Producto/legales → se resuelven por plantilla por defecto + textos para pegar.
- Lectura del producto: por la web pública (`/products.json`). ✅

## Tema base (fase 2) — ✅ OK
- Dawn 16.0.0 clonado y copiado a `theme/`.
- Tema de trabajo creado y subido: **"Mi tienda (Claude)"** id **208719184210** (NO publicado).
- Preview: https://cn0qya-me.myshopify.com?preview_theme_id=208719184210
- Editor: https://cn0qya-me.myshopify.com/admin/themes/208719184210/editor
- Tema activo actual (intacto): "Helio" (#208705913170).

## Producto leído — ✅
- id REST: 11198530060626 · handle: `led-cabinet-night-light-...-indoor-lighting`
- Qué es: luz LED de armario/bajo-mueble, ultrafina, recargable USB-C, sensor de movimiento, magnética, 3 tonos (3000/4000/6000K), brillo 10–100%, 4 modos.
- Variantes (Tamaño): 20cm=36,24 · 30cm=39,78 · 40cm=45,63 · 50cm=47,16
- 10 imágenes en `fotos-producto/prod-0..9.jpg`.

## Fase actual
- Fases 4 y 5 COMPLETADAS. Tema subido sin errores y auto-revisado con capturas (portada, producto, móvil). ✅
- A la espera del visto bueno del usuario para publicar (fase 6).

## Secciones creadas (fase 4/5)
- `sections/mt-hero.liquid` — portada principal (imagen + titular + CTA + garantías)
- `sections/mt-marquee.liquid` — marquesina de ventajas
- `sections/mt-beneficios.liquid` — rejilla de 6 beneficios con iconos
- `sections/mt-destacado.liquid` — bloque editorial imagen + lista
- `sections/mt-tonos.liquid` — 3 tonos de luz
- `sections/mt-usos.liquid` — galería de usos
- `sections/mt-pasos.liquid` — pasos de instalación
- `sections/mt-tamanos.liquid` — tamaños 20/30/40/50
- `sections/mt-garantia.liquid` — fila de garantías
- `sections/mt-faq.liquid` — preguntas frecuentes (acordeón)
- `sections/mt-cta.liquid` — llamada final
- `snippets/mt-icon.liquid` — iconos de línea
- `assets/mt-styles.css`, `assets/mt-scripts.js`, `assets/mt-favicon.svg`
- `sections/header.liquid` (marca "Lumina"), `sections/footer.liquid` (pie propio)
- `templates/index.json` (portada), `templates/product.json` (producto: Dawn main-product oscuro + secciones propias)
- `config/settings_data.json` (paleta oscura + ámbar, Poppins/Assistant), header-group, footer-group

## Pendiente de pegar por el usuario (sin Admin API)
- ⬜ Título y descripción del producto en español (se los doy listos).
- ⬜ Páginas legales en Configuración → Políticas (los enlaces del footer ya apuntan ahí).
- ⬜ (Opcional) Borrar de la galería del producto las fotos con texto en inglés.
- ⬜ Publicar el tema (con su OK).

## Decisiones de diseño
- Concepto: marca premium de iluminación cálida. Tema OSCURO con brillo ámbar.
- Marca (logo editable): "Lumina" (el usuario puede renombrarla).
- Paleta: fondo #0E0C0B / superficie #1C1714 / texto crema #F5EFE6 / apagado #B8AC9C / acento ámbar #F5A623 (glow #FFD58A). Sección clara opcional crema #F6F1EA.
- Tipografía: títulos Poppins (semibold), cuerpo Assistant.
- Idioma de la tienda: español.
- Estructura portada: hero glow → beneficios (6) → usos → 3 tonos → pasos de uso → destacado editorial → tamaños → garantía/envío → FAQ → CTA final.
- Fotos IA: NO (usa las suyas; hay huecos editables).

## Secciones creadas (fase 4)
(pendiente)

## Pendiente de pegar por el usuario (sin Admin API)
- Título y descripción nuevos del producto (se los daré listos).
- Páginas legales (aviso/privacidad/devoluciones) en Configuración → Políticas (se las daré listas).
