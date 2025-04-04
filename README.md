# **SERVIMAX - Sistema de Gestión de Servicios**  

## **Descripción**  
SERVIMAX es una plataforma diseñada para gestionar y visualizar información sobre distintos servicios sin la necesidad de manipulación de datos. Su propósito es presentar contenido estático o dinámico sin la opción de crear, editar o eliminar registros.  

## **Características**  
✅ **Visualización de Información**: Interfaz clara y organizada para mostrar datos relevantes.  
✅ **Diseño Responsivo**: Adaptable a diferentes dispositivos y tamaños de pantalla.  
✅ **Optimización de Carga**: Código optimizado para un mejor rendimiento.  
✅ **Implementación de Git Flow**: Estructura de ramas organizada para el control del código.  


## **Tecnologías Utilizadas**  
- **Frontend**: HTML, CSS, JavaScript (o frameworks como React/Vue/Angular, si aplica).  
- **Backend (si aplica)**: Node.js, Python o cualquier otro lenguaje utilizado para el procesamiento de datos.  
- **Control de Versiones**: Git & GitHub.  
- **Metodología**: Git Flow.  


## **Instalación y Configuración**  

### **Requisitos Previos**  
🔹 Tener **Git** instalado en el sistema.  
🔹 Tener **Node.js** y **npm** instalados (solo si el proyecto usa JavaScript).  

### **Pasos de Instalación**  
1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/smith-ch/SERVIMAX-main.git
   cd SERVIMAX-main
   ```
2. Si es un proyecto basado en Node.js, instalar dependencias:  
   ```bash
   npm install
   ```
3. Iniciar el servidor (si aplica):  
   ```bash
   npm start
   ```
4. Alternativamente, abrir el archivo `index.html` en el navegador *(si es un proyecto estático)*.  


## **Estructura del Proyecto**  
```
📂 SERVIMAX-main
 ├── 📂 src/        # Código fuente del frontend
 ├── 📂 assets/     # Imágenes y archivos estáticos
 ├── 📂 docs/       # Documentación
 ├── .gitignore
 ├── README.md
 ├── package.json   # Dependencias (si usa Node.js)
 ├── index.html     # Página principal
 └── LICENSE
```


## **Uso de Git Flow en el Proyecto**  

Este proyecto sigue la metodología **Git Flow** para organizar el desarrollo.  

1️⃣ **Ramas Principales**:  
   - `main` → Versión estable del proyecto.  
   - `developer` → Rama de desarrollo donde se integran nuevas funcionalidades.  
   - `qa` → Rama para pruebas antes de integrar a `main`.  

2️⃣ **Ramas de Características (feature)**:  
   - Cada nueva funcionalidad se desarrolla en una rama `feature/{nombre}`.  
   - Ejemplo: `feature/responsive-design`.  

3️⃣ **Proceso de Desarrollo**:  
   ```bash
   git checkout developer
   git checkout -b feature/nueva-funcionalidad
   # Agregar cambios
   git commit -m "Nueva funcionalidad agregada"
   git push origin feature/nueva-funcionalidad
   ```
   Luego, se debe hacer un **Pull Request** para fusionar la rama `feature` en `developer`.  


## **Contribuciones**  
Las contribuciones son bienvenidas. Para contribuir:  
1. **Haz un fork** del repositorio.  
2. **Crea una rama** con tu mejora (`git checkout -b mejora/ajuste-interfaz`).  
3. **Haz commit** de tus cambios (`git commit -m "Ajuste en interfaz"`).  
4. **Haz push** a tu rama (`git push origin mejora/ajuste-interfaz`).  
5. Abre un **Pull Request**.  


## **Licencia**  
📜 Este proyecto está bajo la licencia **MIT**.  


## **Contacto**  
📧 **Correo:** smithrodriguez345@gmail.com  
🌐 **GitHub:** [smith-ch](https://github.com/smith-ch)  


