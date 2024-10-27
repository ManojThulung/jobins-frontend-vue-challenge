# JoBins Frontend Challenge

This project is a recreation of an interactive web page, developed using **Vue.js** and **Tailwind CSS** as part of the JoBins frontend coding challenge. The page closely follows the design and coding guidelines provided, based on a Figma file.

### [Live Demo](https://jobins-frontend-challenge-mj.vercel.app/) - [url](https://jobins-frontend-challenge-mj.vercel.app/)

## 1. Project Introduction

This project aims to replicate the given screen design into a functional and interactive web page using HTML, CSS, and JavaScript. I chose **Vue.js 3 Composition API** as the JavaScript framework and **Vite** as the build tool for optimal performance and faster development. The design is implemented using **Tailwind CSS** to ensure consistency and responsiveness across different devices.

Additional packages and features include:

- **[Headless UI (Vue)](https://headlessui.com/)** for accessible, fully functional UI components.
- **[Vue Datepicker](https://vue3datepicker.com/)** for handling date selection in forms.
- **[Vue Countup v3](https://github.com/jizai1125/vue-countup-v3/#readme)** for number animations.
- **[Vite SVG Loader](https://www.npmjs.com/package/vite-svg-loader)** for importing and using SVGs as Vue components.
- CSS transitions and animations for enhanced interactivity.

## 2. Project Setup

To run this project locally, follow these steps:

### Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/ManojThulung/jobins-frontend-challenge.git
   ```
2. Navigate into the project directory:
   ```bash
   cd jobins-frontend-challenge
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   The app should now be running on http://localhost:5173

## 3. Project Structure

```bash
jobins-frontend-challenge/
├── public/
│   └── logo.svg                          # Project logo
├── src/
│   ├── assets/
│   │   ├── icons/                        # Folder for SVG icons
│   │   └── images/                       # Folder for image assets
│   ├── components/
│   │   ├── common/                       # Commonly used components across multiple pages
│   │   ├── dashboardLayout/              # Components for the dashboard page cards
│   │   ├── layout/                       # Main layout components
│   ├── constant/                         # Folder for static data
│   ├── lib/
│   │   ├── dataService.js                # Handles customer order list data in dashboard table
│   │   └── helper.js                     # Helper functions used across the project
│   ├── router/                           # Routing setup for different routes
│   ├── views/                            # Main files for each page
│   ├── App.vue                           # Main app component
│   ├── style.css                         # Global styles
│   └── main.js                           # Entry point for the vue app
├── .gitignore                            # Git ignore file
├── index.html                            # Main HTML file
├── package.json                          # Project dependencies and scripts
├── postcss.config.js                     # PostCSS configuration
├── tailwind.config.js                    # Tailwind CSS configuration
├── vite.config.js                        # Vite configuration
└── README.md                             # Project documentation
```

## 4. Features

- **Login and Logout Functions**: Allows authorized users to authenticate using local storage for session management.
- **Responsive Design**: The layout adjusts for different screen sizes, ensuring a seamless experience across devices.
- **Smooth Animation**: Includes smooth animations during page load and CSS transition on user interactions for better experience.
- **Headless UI Components**: Utilizes accessible, customizable UI elements without compromising user experience.
- **Date Picker**: Integrated with Vue Datepicker for seamless date selection in forms.
- **Table Data Filter and Search Function**: Allows users to filter and search through data tables efficiently.

## 5. Future Improvements

- **Comprehensive Animations**: Add more advanced animations for user interactions to improve the overall user experience.
- **Improved Accessibility**: Enhance accessibility features, such as keyboard navigation and ARIA labels, to accommodate all users.
- **Code Refactoring**: Continuously refactor components for better performance, maintainability, and reusability.
- **State Management**: Consider integrating a state management solution (like Redux or Context API) for better state handling across components.

## 6. Technologies Used

- **[Vue.js](https://vuejs.org/)**: Frontend framework for building user interfaces.
- **[Vite](https://vite.dev/)**: Fast build tool for development, providing a smooth development experience.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[Vue Countup v3](https://github.com/jizai1125/vue-countup-v3/#readme)**: For implementing number animations.
- **[Headless UI (Vue)](https://headlessui.com/)**: For accessible and customizable UI components.
- **[Vue Datepicker](https://vue3datepicker.com/)**: For handling date selection in forms.
- **[Vite SVG Loader](https://www.npmjs.com/package/vite-svg-loader)**: For importing and using SVGs as Vue components.
