import { useState } from "react";
import Header from "./components/Header.jsx";
import Title from "./components/Title.jsx";
import Dashboard from "./components/Dashboard.jsx";

export function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeBtn, setActiveBtn] = useState(2);

  function handleBtnChange(i) {
    setActiveBtn(i);
  }

  function handleThemeChange() {
    if (isDark) document.body.classList.remove("dark");
    else document.body.classList.add("dark");

    setIsDark(!isDark);
  }

  return (
    <>
      <Header handleThemeChange={handleThemeChange} isDark={isDark} />
      <Title activeBtn={activeBtn} handleBtnChange={handleBtnChange} />
      <Dashboard btnState={activeBtn} />
    </>
  );
}
