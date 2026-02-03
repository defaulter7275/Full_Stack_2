# EXP-3 React Single Page Application (SPA) Routing Experiments

This repository contains experiments focused on implementing client-side routing in React Single Page Applications using `react-router-dom`. These experiments demonstrate how to navigate between different views without full page reloads, creating a seamless user experience.

## Table of Contents

- [Experiment 3.1: Basic Client-Side Routing Using React Router](#experiment-1-basic-client-side-routing-using-react-router)
- [Experiment 3.2: Navigation Using Link Component](#experiment-2-navigation-using-link-component)
- [Experiment 3.3: Multi-Page SPA Using Routing](#experiment-3-multi-page-spa-using-routing)

---

## Experiment 3.1: Basic Client-Side Routing Using React Router

### Aim
To implement basic client-side routing in a Single Page Application using React Router.

### Software Requirements
- Node.js
- React
- React Router DOM
- Web Browser

### Theory
Routing in a Single Page Application allows navigation between different views without reloading the page. React Router is a popular library used to handle client-side routing in React applications using components such as `BrowserRouter`, `Routes`, and `Route`. This provides a dynamic and fluid user experience.

### Procedure
1. Create a React application.
2. Install `react-router-dom` package.
3. Wrap the application with `BrowserRouter`.
4. Define routes using `Routes` and `Route` components, mapping paths to specific components.
5. Implement basic navigation to test page transitions without a full page reload.

### Output
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20111020.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20111032.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20111056.png">

---

## Experiment 3.2: Navigation Using Link Component

### Aim
To implement navigation links in a SPA using React Router's `Link` component.

### Procedure
1. Import `Link` from `react-router-dom`.
2. Create navigation links using the `Link` component instead of standard `<a>` tags to prevent page reloads.
3. Place these links within a navigation bar or menu.
4. Enable smooth navigation between defined routes.

### Output
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20162156.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20162210.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20162227.png">

---

## Experiment 3.3: Multi-Page SPA Using Routing

### Aim
To create a multi-page SPA using client-side routing, demonstrating navigation across multiple distinct views.

### Procedure
1. Create multiple components, each representing a "page" or distinct view (e.g., Home, Features, Contact, Profile, Skills, About).
2. Map each component to a unique route path using `Route` components within `Routes`.
3. Implement `Link` components in the navigation bar or within components to allow users to navigate between these "pages."
4. Test navigation to ensure all defined routes are accessible and display the correct content without page reloads. This includes forms and data submission within routes.

### Output
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20154938.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20154927.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20154913.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20115649.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20115649.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20115615.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20115627.png">
 <img src="https://github.com/BaivhavKummar/FULLSTACK-2/blob/main/EXP-3/assets3/Screenshot%202026-01-27%20115637.png">
