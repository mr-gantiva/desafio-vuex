# Proyecto Vue 3 - Lista de Juegos

Este es un proyecto sencillo hecho con Vue 3 y Pinia, que permite gestionar una lista de juegos. Cada juego tiene un código, un nombre, un stock disponible y un precio. Además, puedes incrementar o decrementar el stock de cada juego.

## Características

- **Lista de Juegos**: Se muestra una tabla con los juegos disponibles.
- **Acciones**: Puedes incrementar o decrementar el stock de cada juego.
- **Alertas**: Si intentas decrementar el stock de un juego con 0 unidades, se mostrará una alerta.


## Demo
Puedes ver una demo del proyecto en [este enlace](https://vue3-juegos)

## Tecnologías

- Vue 3
- Pinia (gestión del estado)
- Bootstrap 5 (para los estilos y la tabla)
- JSON como fuente de datos

## Instalación

1. Clona el repositorio a tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
```
2. Entra en el directorio del proyecto:
```bash
cd nombre-del-repositorio
```
3. Instala las dependencias:
```bash
npm install
```
4. Inicia el servidor de desarrollo:
```bash
npm run dev
```
5. Abre tu navegador y ve a `http://localhost:5173` para ver la aplicación