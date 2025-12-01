# Tienda Gamer - Proyecto Final React

Este es un E-commerce de productos tecnológicos (Hardware y Periféricos) desarrollado como proyecto final para el curso de React JS.

## 🚀 Funcionalidades

* **Navegación:** Menú con categorías (Periféricos, Componentes, Monitores) usando React Router.
* **Catálogo:** Visualización de productos traídos dinámicamente desde Firebase (Firestore).
* **Detalle de Producto:** Vista individual con descripción, precio y control de stock.
* **Carrito de Compras:** Lógica completa para agregar items, eliminar y ver el total (usando Context API).
* **Checkout:** Formulario de compra que valida datos, guarda la orden en Firebase y devuelve un ID de seguimiento.
* **Feedback Visual:** Uso de Loaders para tiempos de carga y SweetAlert2 para notificaciones.

## 🛠️ Tecnologías utilizadas

* React JS (Vite)
* Firebase (Firestore Database)
* React Router DOM
* SweetAlert2
* CSS3

## 📦 Instalación y Uso

1.  **Clonar el repositorio:**
    ```bash
    git clone [PEGA_AQUI_EL_LINK_DE_TU_GITHUB]
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el proyecto:**
    ```bash
    npm run dev
    ```

## ⚙️ Configuración

El proyecto utiliza Firebase. Las credenciales de la base de datos se encuentran configuradas en `src/service/firebase.jsx`.

---
**Alumno:** Emilio
**Curso:** React JS - Coderhouse