# 🚀 React Mini Projects Collection

A curated collection of simple yet powerful React mini-projects — perfect for learning, practicing, and showcasing core concepts like hooks, state, styling, and interactivity. Built with **React + Vite** for fast performance and modern developer experience.

---

## 📁 Projects

### 🔗 React Router App  
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
