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
- Fase 4 (construcción) EN CURSO. Estilo elegido sin esperar: "Luz cálida en la oscuridad".

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
