# 🚀 SERVIMAX – Sistema Informativo de Servicios Técnicos

## 📌 Descripción General

**SERVIMAX** es una plataforma informativa que presenta los servicios técnicos disponibles de forma clara y profesional. Su objetivo es facilitar el acceso a la información sobre mantenimiento, soporte y servicios generales, además de ofrecer un medio de contacto directo para resolver dudas o solicitar asistencia.

A diferencia de un sistema de tickets tradicional, SERVIMAX **no gestiona la creación ni edición de solicitudes**, sino que se enfoca en brindar información útil y permitir al usuario conectarse con el equipo de atención al cliente.

### ✨ Características destacadas:
- ✅ Información detallada sobre servicios técnicos disponibles.
- ✅ Diseño responsivo y moderno.
- ✅ Sección de contacto para consultas personalizadas.
- ✅ Código modular y limpio para fácil mantenimiento.

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Framework:** React.js + TypeScript  
- **UI:** Material-UI  
- **Estado:** Redux  
- **Empaquetador:** Vite  

### Backend
- **Servidor:** Node.js con Express.js  
- **Base de Datos:** PostgreSQL (estructurada para futuras funciones)  
- **Autenticación (opcional para admin):** JWT  

### Infraestructura
- **Despliegue:** Docker, AWS EC2  
- **CI/CD:** GitHub Actions  

## 🧩 Arquitectura del Sistema

El sistema está estructurado bajo el patrón **MVC (Modelo – Vista – Controlador)** para una separación de responsabilidades clara y escalabilidad.

```
Cliente (Frontend) → API REST (Backend) → Base de Datos
```

## 👥 Roles de Usuario

| Rol           | Descripción                                                                 |
|----------------|------------------------------------------------------------------------------|
| Usuario        | Visualiza información sobre servicios y se contacta vía formulario.         |
| Administrador  | Gestiona el contenido del sitio y responde a consultas.                     |

## 🧪 Historias de Usuario

### 📌 Usuario – Consulta de servicios
> Como visitante, quiero ver todos los servicios disponibles para saber cómo SERVIMAX me puede ayudar.

### 📌 Usuario – Formulario de contacto
> Como visitante, quiero poder enviar una consulta para que el equipo me brinde más información personalizada.

### 📌 Usuario – Experiencia responsiva
> Como visitante, quiero navegar cómodamente desde mi celular o tablet sin problemas de diseño.

### 📌 Administrador – Responder consultas
> Como administrador, quiero recibir las consultas de los usuarios para poder darles seguimiento.

## 🖥️ Capturas de Pantalla

> *(Aquí puedes agregar imágenes del sitio, la interfaz principal, formulario de contacto, etc. Puedes usar Markdown como esto:)*

```markdown
![Inicio de SERVIMAX](./screenshots/home.png)
![Formulario de Contacto](./screenshots/contact.png)
```

## ⚙️ Instalación Local

1. Clona el repositorio:
```bash
git clone https://github.com/smith-ch/SERVIMAX-main.git
cd SERVIMAX-main
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno en un archivo `.env`.

4. Inicia la aplicación:
```bash
npm run dev
```

## 🔭 Roadmap (Futuras Funcionalidades)

- [ ] Chat en tiempo real con el equipo de soporte.
- [ ] Aplicación móvil con React Native.
- [ ] Agendamiento de citas para servicios técnicos.
- [ ] Panel administrativo visual para gestión de contenido.
- [ ] Integración con WhatsApp Business API.

## 🤝 Contribuciones

¿Quieres contribuir? ¡Eres bienvenido/a!

1. Haz un fork del proyecto.
2. Crea una nueva rama: `feature/tu-funcionalidad`.
3. Realiza tus cambios y haz commit.
4. Abre un Pull Request describiendo tus cambios.

## 📄 Licencia

Este proyecto está licenciado bajo la **MIT License**. Consulta el archivo [`LICENSE`](./LICENSE) para más información.


## 📬 Contacto

- Repositorio: [https://github.com/smith-ch/SERVIMAX-main](https://github.com/smith-ch/SERVIMAX-main)  
- Reporte de errores: [Sección Issues del repositorio](https://github.com/smith-ch/SERVIMAX-main/issues)

> ✨ Este proyecto fue desarrollado como parte de una asignación académica para demostrar el uso de Git, Git Flow y buenas prácticas de documentación.

---

