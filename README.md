# Apple Store - Simulador de Carrito de Compras

Este es un simulador de carrito de compras para una tienda de Apple, desarrollado utilizando **HTML**, **CSS** y **JavaScript**. El proyecto incluye una interfaz de usuario donde se pueden agregar productos al carrito, visualizar las características de cada producto, y guardar el carrito utilizando **localStorage** para mantener la información entre recargas de la página.

## Descripción

El simulador presenta una variedad de productos Apple organizados en categorías: **MacBook**, **iPad**, **iPhone**, **Apple Watch**, y **Accesorios**. Los usuarios pueden ver las características de los productos, agregarlos al carrito y ver un contador de productos en la barra superior. Los productos del carrito se guardan en `localStorage` para que se mantengan disponibles incluso después de recargar la página.

### Funcionalidades

- **Visualización de productos**: Los productos están organizados en categorías con detalles sobre el nombre, precio y características.
- **Añadir al carrito**: Los usuarios pueden añadir productos al carrito y ver la cantidad de productos en la barra superior.
- **Persistencia del carrito**: Los productos añadidos al carrito se almacenan en `localStorage`, lo que permite mantener el carrito entre recargas.
- **Ver carrito**: Los usuarios pueden ver el contenido del carrito, incluyendo el nombre de los productos, su cantidad y el precio total.

## Estructura del Proyecto

El proyecto está dividido en tres partes principales:

1. **HTML**: La estructura de la página, que incluye la visualización de los productos y el carrito.
2. **CSS**: El estilo de la página, usando una paleta de colores oscuros, que simula el diseño elegante de la tienda de Apple.
3. **JavaScript**: La funcionalidad del carrito de compras, donde se gestionan los productos y el almacenamiento en `localStorage`.

### Archivos

- `index.html`: Archivo principal que contiene la estructura de la tienda.
- `styles.css`: Archivo de estilo que define la apariencia de la tienda.
- `script.js`: Archivo JavaScript que gestiona la lógica de los productos, el carrito y el almacenamiento.
