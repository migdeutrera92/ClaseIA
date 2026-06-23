# Landing page - Clase IA + Automatización para Pymes V3

Versión corregida con:
- Foto real de Aira Maya.
- Foto real de Migdelia Utrera.
- Logo real de Aira Maya.
- Logo oficial de ZentrixCo incluido como archivo local: `assets/zentrixco-logo.png`.
- Diseño claro, sin colores oscuros.
- Enfoque 100% clase / registro.
- Sin textos visibles de capturar leads, n8n, webhooks ni venta de servicios.
- Formulario simple de asistencia.

## Conectar formulario

En `script.js`, reemplaza:

```js
const REGISTRATION_ENDPOINT_URL = "PEGA_AQUI_TU_ENDPOINT";
```

por tu endpoint real.

## Campos enviados

```json
{
  "nombre": "",
  "apellido": "",
  "emprendimiento": "",
  "correo": "",
  "source": "registro_clase_ia_automatizacion",
  "fecha_registro": "",
  "pagina": ""
}
```

## Publicar en Vercel

1. Sube esta carpeta a GitHub.
2. Importa el proyecto en Vercel.
3. Framework: Other.
4. Deploy.


## Corrección V4
- Se reemplazó el logo de ZentrixCo por el archivo que subiste.
- Se limpió el espacio en blanco del logo para que no se vea roto ni gigante.
- Se achicaron las fotos de las expositoras y ahora se muestran como tarjetas compactas.


## Corrección V5
- Se reforzó el perfil de Migdelia Utrera.
- Ahora aparece como expositora en automatización, agentes de IA y procesos inteligentes.
- Se agregaron etiquetas visuales: Agentes de IA, Automatización, Procesos, RPA / Low-code.


## Corrección V6
- Se equilibraron los perfiles de Aira Maya y Migdelia Utrera.
- Se dejó un texto más corto, potente y profesional.
- Aira queda posicionada en IA aplicada a comunicación, cultura y narrativa corporativa.
- Migdelia queda posicionada en AI Automation, agentes IA, RPA, n8n, APIs y low-code.


## Corrección V7
- Se agregó fecha de la clase: 2 de julio a las 19:00 hrs.
- Se agregaron links a los sitios web:
  - Aira Maya: https://aira-maya.vercel.app/
  - ZentrixCo: https://www.zentrixco.ai/
- Se agregó texto “Ingresa a nuestros sitios web...” en la sección de expositoras.
- Se agregó un campo abierto opcional al formulario:
  “¿Qué crees que es la IA y la automatización? ¿Cómo piensas que podría ayudarte en tu emprendimiento?”
- Ese campo se envía en el payload como `percepcion`.
- Se reemplazó la foto de Migdelia por la versión limpia con fondo pastel/IA y relación 3:4 en JPG, si el archivo estaba disponible.


## Corrección V8
- Se cambió el título principal del hero por:
  “IA y automatización para pymes: menos tareas manuales, más tiempo para crecer”.
- Se ajustó el subtítulo para que suene más claro, práctico y persuasivo.


## Corrección V9
- Se actualizó el hook principal por:
  “Descubre qué tareas de tu pyme puedes simplificar con IA y automatización”.
- Se ajustó el subtítulo para acompañar mejor el enfoque de detección de oportunidades.
