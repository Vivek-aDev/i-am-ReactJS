import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_=+{}~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full h-screen ">
        <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ">
          Password 🔑 Generator
        </h1>
        <div className="top-0 left-0 p-6 rounded-2xl bg-blue-900 ">
          <div className="flex mb-4">
            <input
              className="w-full border rounded-xl"
              type="text"
              value={password}
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button className="rounded-xl" onClick={copyPasswordToClipboard}>
              copy
            </button>
          </div>
          <div className="flex gap-2">
            <label class="block text-sm font-medium text-gray-900 dark:text-white">
              Range:{length}
            </label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              class="w-full bg-gray-200 rounded-lg  cursor-pointer dark:bg-gray-700"
            />

            <input
              type="checkbox"
              name="Numbers"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="Numbers">Numbers</label>
            <input
              type="checkbox"
              name="Characters"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="Characters">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
