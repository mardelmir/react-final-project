# Bienvenidos a On Ground Footwear
## react-final-project
¡Gracias por visitar nuestro proyecto! Somos María, Jose y Carlos, tres entusiastas alumnos del bootcamp The Bridge 2023-24. On Ground Footwear es nuestro proyecto final, y estamos emocionados de presentarte nuestra tienda de calzado minimalista.
En un mundo donde la comodidad y el estilo van de la mano, creemos firmemente en la importancia del calzado minimalista para una vida activa y saludable. Con una combinación de habilidades en programación y una pasión compartida por el diseño, hemos creado On Ground Footwear como una plataforma para ofrecer productos que no solo cuidan de tus pies, sino también del medio ambiente.
¡Únete a nosotros en este viaje hacia la comodidad consciente y el estilo sostenible con On Ground Footwear!

## Estructura del proyecto
La aplicación 'Tienda de zapatilas minimalistas On Ground Footwear' posee la siguiente estructura de archivos: 
```
on-ground-footwear/
├── public/
│   └── ...
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── ...
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Card.jsx
│   │   ├── Cart.jsx
│   │   ├── DarkButton.jsx
│   │   ├── Filter.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── NewProduct.jsx
│   │   ├── Products.jsx
│   │   └── Register.jsx
│   ├── hooks/
│   │   ├── useFetchData.js
│   │   └── useFilterProducts.js
│   ├── storage/
│   │   ├── CartContext.jsx
│   │   ├── CurrentUserContext.jsx
│   │   ├── LanguageContext.jsx
│   │   └── ThemeContext.jsx
│   ├── styles/
│   │   ├── About.css
│   │   ├── App.css
│   │   ├── DarkButton.css
│   │   ├── Filter.css
│   │   ├── Footer.css
│   │   ├── Form.css
│   │   ├── Header.css
│   │   ├── Home.css
│   │   └── ProductsAndCard.css
│   ├── utils/
│   │   ├── carruselData.js
│   │   └── formatPayload.js
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .gitignore
├── README.md
├── package.json
└── ...
```

## Funcionalidades
* Explora nuestra colección de zapatillas minimalistas desde la página  **Products**.
* Filtra los productos por **categoría**, **talla**, **género**, **uso** y **precio**.
* Te puedes registrar como usuario y si tienes los permisos de administrador puedes **añadir** y **editar**, y **borrar** productos existentes.
* Actualmente hay dos usuarios operativos: un usuario normal y un usuario con rol de admin, el cual podrá editar, crear
y eliminar productos: Usuario normal: user@example.com, user1234. Usuario admin: admin@example.com, admin1234.
* Explora el modo *dark* y el modo *light*.

## Tecnologías Utilizadas
* React: Biblioteca de JavaScript para construir interfaces de usuario.
* React DOM: Biblioteca para manejar el DOM en aplicaciones web utilizando React.
* React Hook Form: Librería para construir formularios en React de forma sencilla y con buen rendimiento.
* React Router DOM: Enrutador para aplicaciones React que permite la navegación entre diferentes componentes de forma declarativa.
* Vite: Herramienta de desarrollo rápido para la creación de aplicaciones web modernas con JavaScript y TypeScript.
* ESLint: Herramienta de linting para identificar y reportar patrones problemáticos en código JavaScript.
* @vitejs/plugin-react-swc: Plugin de Vite para transpilar código React utilizando SWC (Super-fast WebAssembly-based Compiler).
* @types/react: Tipos de TypeScript para React.
* @types/react-dom: Tipos de TypeScript para React DOM.
* eslint-plugin-react: Plugin ESLint para reglas específicas de React.
* eslint-plugin-react-hooks: Plugin ESLint para reglas específicas de los hooks de React.
* eslint-plugin-react-refresh: Plugin ESLint para reglas específicas de React Refresh.

# Iniciar Sesión

## Como Usuario Registrado
Para iniciar sesión como usuario registrado, sigue estos pasos:

1. Abre la página de inicio de sesión.
2. Ingresa la dirección de correo electrónico asociada a tu cuenta de usuario: user@example.com.
3. Ingresa la contraseña de tu cuenta de usuario: user1234.
4. Haz clic en el botón de "Iniciar Sesión".
Ahora deberías tener acceso a tu cuenta de usuario.

## Como Administrador
Si deseas iniciar sesión como administrador, sigue estos pasos:

1. Ve a la página de inicio de sesión.
2. Ingresa la dirección de correo electrónico de administrador: admin@example.com.
3. Ingresa la contraseña de administrador: admin1234.
4. Haz clic en el botón de "Iniciar Sesión".
Ahora tendrás acceso a las funciones administrativas de la plataforma.

# Equipo
* María: Full Stack Development
* Jose: Full Stack Development
* Carlos: Full Stack Development
