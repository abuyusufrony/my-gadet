# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# my-gadet



# Gadget Heaven

## Project Overview
Gadget Heaven is an e-commerce web application where users can explore and purchase cutting-edge gadgets. The platform provides product details, filtering options, and an interactive shopping experience.

## Features
- Browse various gadgets including laptops, smartphones, power banks, and chargers.
- Filter gadgets by category.
- View detailed product descriptions and specifications.
- Add products to the dashboard (cart feature using local storage).
- Responsive UI with a user-friendly interface.

## Technologies Used
- **React.js** – For building the frontend components.
- **React Router** – For navigation between pages.
- **Tailwind CSS** – For styling and layout.
- **DaisyUI** – For UI components.
- **React Toastify** – For notifications.
- **Local Storage** – To store selected products.
- **JavaScript (ES6+)** – For handling logic and state management.

## Project Structure
```
📂 Gadget Heaven
│-- 📂 src
│   │-- 📂 Components
│   │   │-- 📂 Home
│   │   │-- 📂 Navbar
│   │   │-- 📂 Footer
│   │   │-- 📂 Gadgets
│   │   │-- 📂 GagetDetails
│   │   │-- 📂 Dashboard
│   │   │-- 📂 Statistics
│   │-- 📂 Assets (Images, Icons)
│   │-- 📂 Scripts (Local Storage utilities)
│   │-- App.jsx
│   │-- index.jsx
│-- 📂 Public (Static Files)
│-- package.json
│-- README.md
```

## JavaScript/React Features Implemented
- **State Management**: `useState` and `useEffect` hooks for managing component states.
- **Filtering System**: Allows users to filter gadgets dynamically.
- **Routing System**: React Router is used for seamless navigation.
- **Local Storage Management**: Products added to the dashboard are stored in local storage.
- **Responsive Design**: UI adjusts well on different screen sizes using Tailwind CSS.
- **Dynamic Product Details**: Each product has a detailed page using `useParams` and `useLoaderData`.

## Live Site Link
[Click Here to Visit the Site](#)  
*(Replace `#` with your actual deployment link)*
