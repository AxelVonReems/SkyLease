# SkyLease

Aplicación web para explorar una flota de helicópteros, consultar sus características y enviar solicitudes de reserva. El proyecto combina una SPA en React, una API REST en Express y una base de datos MySQL.

## Funcionalidades

### Flujos conectados a la API

- Consultar la flota y el detalle de cada helicóptero, incluidos capacidad, precio, descripción y características.
- Crear una cuenta e iniciar sesión. Las contraseñas se guardan con hash bcrypt y el inicio de sesión devuelve un JWT.
- Consultar y publicar comentarios asociados a un helicóptero.
- Enviar una solicitud de reserva y consultar las reservas de un usuario.

### Contenido estático o local

- La página de comunidad y sus eventos/publicaciones, así como las tarifas, se definen en el frontend.
- El formulario de contacto muestra una confirmación local y escribe los datos en la consola del navegador; no los envía a la API.
- La página de inicio incluye una selección de helicópteros definida en el frontend.

## Tecnologías

| Área | Tecnologías |
|---|---|
| Frontend | React 19, React DOM, React Router 7, Vite 7, ESLint 9. Tailwind CSS se carga desde el CDN en `skylease/index.html`; no es una dependencia npm del proyecto. |
| Backend | Node.js, Express 5, `mysql2`, `bcrypt`, `jsonwebtoken`, `cors` y `dotenv`. |
| Base de datos | MySQL 8. El esquema y los datos iniciales se encuentran en `skylease_db.sql`. |

## Arquitectura

El frontend está en `skylease/` y el backend en `server/`; cada uno tiene su propio `package.json` y lockfile. No hay un manifiesto npm en la raíz.

La API organiza sus rutas, controladores y modelos por dominio: helicópteros, autenticación, comentarios y reservas. Los modelos ejecutan consultas SQL parametrizadas con `mysql2`. El esquema contiene las tablas `users`, `helicopters`, `comments` y `reservations`, con claves foráneas, restricciones únicas para nombre de usuario y correo, índices de relación y datos de ejemplo.

### API REST

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/api/helicopters` | Lista la flota. |
| `GET` | `/api/helicopters/:id` | Devuelve el detalle de un helicóptero. |
| `POST` | `/api/auth/register` | Registra un usuario y guarda un hash de contraseña. |
| `POST` | `/api/auth/login` | Comprueba credenciales y devuelve un JWT y los datos básicos del usuario. |
| `GET` | `/api/comments/helicopter/:id` | Lista los comentarios de un helicóptero con el nombre de usuario. |
| `POST` | `/api/comments` | Publica un comentario. |
| `POST` | `/api/reservations` | Crea una solicitud de reserva. |
| `GET` | `/api/reservations/user/:userId` | Lista las reservas de un usuario con información del helicóptero. |

## Requisitos

- Node.js `^20.19.0` o `>=22.12.0`, requerido por la versión de Vite fijada en el lockfile del frontend.
- npm, incluido con Node.js.
- MySQL 8. El volcado SQL declara MySQL 8.0.35 como versión del servidor de origen.

## Configuración local

Los comandos de base de datos siguientes se ejecutan desde la raíz del repositorio. Sustituye `<usuario_mysql>` por el usuario de tu instalación; `-p` solicita la contraseña en el terminal.

### 1. Crear e importar la base de datos

El volcado contiene las tablas y registros iniciales, pero no crea ni selecciona la base de datos. Créala e importa el archivo:

```sh
mysql -u <usuario_mysql> -p -e "CREATE DATABASE skylease_db;"
mysql -u <usuario_mysql> -p skylease_db < skylease_db.sql
```

### 2. Configurar y arrancar la API

Crea `server/.env` localmente con los valores de conexión de tu instalación MySQL:

```dotenv
PORT=3000
DB_HOST=<host_mysql>
DB_USER=<usuario_mysql>
DB_PASSWORD=<contrasena_mysql>
DB_NAME=skylease_db
DB_PORT=<puerto_mysql>
JWT_SECRET=<secreto_aleatorio_local>
```

Sustituye todos los valores entre `<...>` antes de iniciar el servidor. `PORT` puede omitirse para usar el valor predeterminado `3000`. El frontend actualmente llama a `http://localhost:3000`, por lo que, para que la integración local funcione sin cambiar el código, mantén la API en ese puerto. El archivo `.gitignore` raíz excluye `.env`: no publiques contraseñas ni secretos.

En una terminal:

```sh
cd server
npm ci
npm run dev
```

### 3. Instalar y arrancar el frontend

En otra terminal, desde la raíz del repositorio:

```sh
cd skylease
npm ci
npm run dev
```

Abre la URL local que Vite muestre en la terminal. Para usar las funciones conectadas a la API, mantén la API ejecutándose en la terminal anterior.

## Variables de entorno de la API

| Variable | Uso |
|---|---|
| `PORT` | Puerto HTTP de Express; si no se define, el código usa `3000`. |
| `DB_HOST` | Host del servidor MySQL. |
| `DB_USER` | Usuario de conexión a MySQL. |
| `DB_PASSWORD` | Contraseña de conexión a MySQL. |
| `DB_NAME` | Nombre de la base de datos; para el esquema incluido, `skylease_db`. |
| `DB_PORT` | Puerto de conexión a MySQL. |
| `JWT_SECRET` | Clave de firma del JWT. Define un valor aleatorio y privado en el entorno local; no reutilices ni publiques secretos. |

`dotenv` carga las variables desde `.env` en el directorio de trabajo del proceso. Inicia el backend desde `server/` para que lea `server/.env`. El código de autenticación contiene un secreto de respaldo; configura `JWT_SECRET` y no dependas de ese valor, especialmente fuera del entorno local.

## Scripts npm

### Backend (`server/`)

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia la API con `node index.js`. |
| `npm test` | Placeholder que informa que no hay pruebas configuradas y termina con error. |

### Frontend (`skylease/`)

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo de Vite. |
| `npm run build` | Genera el bundle de producción de Vite. |
| `npm run preview` | Sirve localmente el bundle de producción. |
| `npm run lint` | Ejecuta ESLint sobre el frontend. |

## Pruebas y estado del proyecto

No se encontraron pruebas unitarias, de integración ni end-to-end, ni dependencias de testing. El script `test` del backend es solo un placeholder. El frontend ofrece scripts de compilación y lint, pero su existencia no implica que se hayan ejecutado o que pasen.

## Limitaciones y seguridad

- El login emite un JWT, pero la API no tiene middleware que lo verifique ni aplica autorización por usuario o rol. Las comprobaciones de sesión del frontend son controles de interfaz, no una barrera de seguridad. Los endpoints de comentarios y reservas reciben `user_id` del cliente.
- El backend contiene un secreto JWT de respaldo; define `JWT_SECRET` fuera del repositorio y reemplaza el fallback antes de cualquier uso no local. CORS se habilita sin una lista de orígenes restringida.
- El frontend tiene las URL de API fijadas a `http://localhost:3000`; no hay configuración de URL por entorno ni proxy de Vite configurado.
- La lógica de reserva no comprueba disponibilidad ni conflictos de fecha/hora. El formulario de contacto no persiste ni envía mensajes.
- La comunidad y las tarifas son contenido estático. Tailwind depende de un CDN externo.
- No se encontraron configuración Docker, flujos CI/CD ni pruebas automatizadas en el repositorio. No hay una configuración de despliegue lista para producción.
