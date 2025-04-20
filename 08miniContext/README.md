# 🙋‍♂️ React Context API Demo

A simple React project demonstrating the power of **Context API** for managing user authentication state across components without prop drilling. This app includes a basic login form and profile view, showcasing how data can be shared using context.

---

## ✨ Features

- ✅ Login with username and password (no backend)
- ✅ Share authenticated user data across components
- ✅ Conditional rendering based on login state
- ✅ Clean and minimal Context API setup

---

## 🧠 Concepts Covered

| Concept             | Description                                                             |
|---------------------|-------------------------------------------------------------------------|
| `Context API`        | Create global state accessible to multiple components                   |
| `useContext` Hook    | Access and manipulate context state                                     |
| `useState` Hook      | Manage local state for inputs and user data                            |
| Conditional Rendering| Show/hide components based on authentication status                    |
| Provider Component   | Wrap the app with context provider to share state                      |

---

## 📂 Pages & Routes

- **Login** – Enter username and password
- **Profile** – View logged-in user details (conditionally rendered)

> 📌 This project does not use routing (React Router), and instead focuses on shared state.

---

## 📦 Packages Used

- **React** – JavaScript library for building user interfaces
- **Vite** – For fast builds and development environment

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Vivek-aDev/i-am-ReactJS.git
cd react-mini-projects/08miniContext

# Install dependencies
npm install

# Run the development server
npm run dev
