import { useState } from "react";
import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <>
      <div className="bg-green-600 flex min-h-screen p-5">
        <div className="bg-green-200 w-full max-w-[1144px] border-4 border-black rounded-2xl mx-auto flex flex-col">
          <Header />
          <Board />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
