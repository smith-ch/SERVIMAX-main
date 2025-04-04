

```markdown
# 📘 SERVIMAX – Sistema Informativo de Servicios Técnicos

## 🧾 Tabla de Contenido
1. [Descripción General](#descripción-general)
2. [Características Principales](#características-principales)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Arquitectura del Sistema](#arquitectura-del-sistema)
5. [Roles de Usuario](#roles-de-usuario)
6. [Historias de Usuario](#historias-de-usuario)
7. [Instalación y Configuración](#instalación-y-configuración)
8. [Estructura de Carpetas](#estructura-de-carpetas)
9. [Roadmap (Mejoras Futuras)](#roadmap-mejoras-futuras)
10. [Capturas de Pantalla](#capturas-de-pantalla)
11. [Contribuciones](#contribuciones)
12. [Licencia](#licencia)
13. [Contacto y Soporte](#contacto-y-soporte)

---

## 📌 Descripción General

**SERVIMAX** es una plataforma web diseñada para proporcionar información clara y concisa sobre los servicios técnicos ofrecidos por una empresa. A diferencia de otros sistemas, **no permite la creación de tickets o solicitudes**, sino que actúa como un canal informativo y de contacto entre el cliente y el equipo técnico.

El propósito de este proyecto es demostrar el uso correcto de herramientas como **Git**, **Git Flow** y **buenas prácticas de documentación**, cumpliendo con los estándares de una tarea académica evaluativa.

---

## ✨ Características Principales

- Presentación de servicios ofrecidos por categorías.
- Sección de contacto para enviar consultas.
- Diseño responsivo compatible con dispositivos móviles.
- Código limpio y estructurado (MVC).
- Configuración lista para producción con Docker.
- Documentación clara en este `README.md`.

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React.js** + **TypeScript**
- **Material-UI** (Componentes visuales)
- **Redux Toolkit** (Gestión de estado)
- **Vite** (Empaquetador)

### Backend
- **Node.js** + **Express.js**
- **PostgreSQL** (Modelo relacional preparado para futuras funciones)
- **JWT** (Autenticación opcional para administrador)

### DevOps & Infraestructura
- **Git & Git Flow**
- **Docker** para contenerización
- **GitHub Actions** para CI/CD
- **AWS EC2** (para despliegue)

---

## 🧩 Arquitectura del Sistema

El sistema sigue el patrón **MVC (Modelo - Vista - Controlador)** para una organización clara del código.

```
Cliente (React) → API REST (Express) → PostgreSQL
```

**Capas:**
- `client/` → Interfaz de usuario
- `server/` → Lógica del backend y conexión a la base de datos
- `shared/` → Utilidades comunes

---

## 👤 Roles de Usuario

| Rol         | Descripción                                                                 |
|--------------|------------------------------------------------------------------------------|
| Visitante    | Visualiza servicios, accede a contacto y recibe información.                |
| Administrador| Gestiona contenidos y responde consultas. *(Funcionalidad prevista)*         |

---

## 🧪 Historias de Usuario

### 1. Consulta de Servicios
> Como visitante, quiero ver todos los servicios disponibles para entender qué ofrece SERVIMAX.

### 2. Contacto Directo
> Como visitante, quiero poder enviar una consulta para obtener información personalizada.

### 3. Navegación desde Móvil
> Como visitante, quiero navegar desde mi teléfono sin problemas de diseño.

### 4. Escalabilidad Administrativa *(Futura)*
> Como administrador, quiero gestionar la información mostrada desde un panel privado.

---

## ⚙️ Instalación y Configuración

### 🔧 Requisitos Previos
- Node.js >= 18
- PostgreSQL >= 12
- Docker (opcional para producción)

### 🛠️ Instalación Local

1. Clona el repositorio:

```bash
git clone https://github.com/smith-ch/SERVIMAX-main.git
cd SERVIMAX-main
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea el archivo `.env` con tus variables:

```
PORT=3000
DB_HOST=localhost
DB_NAME=servimax
DB_USER=postgres
DB_PASS=****
```

4. Ejecuta el proyecto:

```bash
npm run dev
```

---

## 🗂️ Estructura de Carpetas

```
SERVIMAX-main/
│
├── client/               # Frontend React
├── server/               # Backend Express
├── .env.example          # Ejemplo de configuración
├── docker-compose.yml    # Contenedores para despliegue
├── README.md             # Documentación del proyecto
└── LICENSE               # Licencia MIT
```

---

## 🚀 Roadmap (Mejoras Futuras)

- [ ] Panel administrativo funcional
- [ ] Chat en tiempo real con técnicos
- [ ] Sistema de calificación de servicios
- [ ] Agendamiento de citas desde la web
- [ ] Aplicación móvil (React Native)


## 🖼️ Capturas de Pantalla

> *(Agrega imágenes si las tienes, por ejemplo:)*

```markdown
![Vista de servicios](./screenshots/servicios.png)
![Formulario de contacto](./screenshots/contacto.png)
```


## 🤝 Contribuciones

¿Te interesa colaborar? Sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama `feature/nueva-funcionalidad`.
3. Realiza tus cambios y haz commit.
4. Abre un Pull Request con una breve descripción.


## 📄 Licencia

Este proyecto está licenciado bajo la [MIT License](./LICENSE).  
Puedes usarlo, modificarlo y distribuirlo libremente con atribución.


## 📬 Contacto y Soporte

- Repositorio: [https://github.com/smith-ch/SERVIMAX-main](https://github.com/smith-ch/SERVIMAX-main)
- Reportar errores: [GitHub Issues](https://github.com/smith-ch/SERVIMAX-main/issues)

---

> 💼 Este proyecto fue desarrollado como parte de una evaluación académica para demostrar el uso de Git, Git Flow, buenas prácticas de desarrollo, y documentación efectiva.

```

