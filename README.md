# 🚀 React Mini Projects Collection

>## 📚 About This Collection

Welcome to my **React Mini Projects Collection**! 🎉

This repository showcases a variety of **React** mini-projects that I've created to explore core web development concepts, improve my React skills, and build dynamic web applications. These projects range from simple interactive components to real-world applications using **React**, **React Router**, **Vite**, and **Tailwind CSS**. They cover essential aspects such as **state management**, **hooks**, **routing**, **styling**, and **API integration**. 

Whether you’re a beginner or looking to improve your skills with hands-on practice, these projects are a great way to get started. Each project is focused on learning a specific concept and comes with its own set of challenges, helping me grow as a front-end developer.
<br>
<br>

># 📁 Projects


## 🔦 Highlight: 09themeSwitcher 🫵🏻[View Project](./09themeSwitcher)

A polished **Theme Switcher** project built with Context API and Tailwind CSS. Users can toggle between **light and dark** themes, and the preference is applied using dynamic Tailwind class manipulation.

### 🧠 Concepts in this project

- `useState`, `useEffect`
- Context API with `useContext`
- Custom hook: `useTheme()`
- Tailwind-based dynamic theming
- Responsive UI layout with flex and utility classes

### 📦 Features

- Toggle switch to change themes  
- Real-time DOM updates using Tailwind class toggling  
- Clean UI with card layout and rating system  

### 🚀 Usage

1. Start the dev server and open the project in browser.  
2. Toggle the switch to see theme changes instantly.



## 🔗 React Router App  
> A multi-page React app with nested routes, dynamic user pages, and live GitHub data loading using React Router v6.

- React Router: `createBrowserRouter`, `createRoutesFromElements`, `useLoaderData`, `<Outlet />`  
- Pages & Routes: Home `/`, About `/about`, Contact `/contact`, User `/:userId`, GitHub `/github`  
- Features: Nested layout (`<Layout />`), dynamic route params, loader for API call, Tailwind-styled UI  
- [View Project](./07reactRouter)

---

### 💸 Currency Converter  
> Convert currencies in real time with a clean UI and live exchange rates. Includes swap feature and glassmorphism-styled interface.

- React Hooks: `useState` + custom `useCurrencyInfo()`  
- Features: Currency selection, conversion, swap, and a reusable `InputBox` component  
- [View Project](./06currencyConverter)

---

### 🔑 Password Generator  
> Generate strong, customizable passwords using a length slider and toggleable options for numbers and symbols.

- React Hooks: `useState`, `useEffect`, `useCallback`, `useRef`
- Features: Clipboard copy, dynamic password generation
- [View Project](./05passwordGenerator)

---

### 🔢 Counter App  
> Simple counter with increment, decrement, and reset functionality — demonstrates React batching behavior.

- React Hook: `useState` with multiple functional updates
- Features: Add+, Subtract, Reset
- [View Project](./02counter)

---

### 🎨 Background Color Changer  
> Change the entire screen’s background color using buttons — a great intro to state-driven inline styling.

- React Hook: `useState`
- Features: Dynamic background via button clicks
- [View Project](./04bgChanger)

---

## 📚 Concepts Covered

| Project                | React Hooks                          | Other Concepts                                     |
|------------------------|---------------------------------------|----------------------------------------------------|
| Password Generator     | `useState`, `useEffect`, `useRef`, `useCallback` | Clipboard API, Dynamic password logic             |
| Counter App            | `useState`                            | Functional updates, batching                       |
| Background Color Changer | `useState`                          | Dynamic inline styles                              |
| Currency Converter     | `useState`, Custom Hook               | Fetching API data, Component reuse, Glassmorphism UI |
| React Router App       | `useLoaderData`, Routing hooks        | Nested routing, Dynamic params, Loader for fetch   |

---

## 🛠️ Tech Stack

| Technology     | Purpose                                                      |
|----------------|--------------------------------------------------------------|
| ⚛️ React       | Core library for building UI components                      |
| ⚡ Vite         | Next-gen front-end tooling for ultra-fast development       |
| 💨 Tailwind CSS | Utility-first CSS framework for custom styling              |
| 🌐 React Router | Client-side routing (used in the `reactrouter` project)     |
| 🪝 React Hooks  | `useState`, `useEffect`, `useRef`, `useCallback`, etc.      |
| 🔁 Custom Hooks | Reusable logic abstraction (used in `currency-converter`)   |
| 📦 npm          | Package manager for installing dependencies                 |
| 📁 GitHub       | Hosting the code and project pages                          |
| 🌐 Fetch API    | Calling external APIs (like GitHub API in `reactrouter`)    |

---

## 🧪 Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/Vivek-aDev/i-am-ReactJS.git
cd i-am-ReactJS

# 2. Navigate to a specific project
cd 07reactRouter  # or any other project folder

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
