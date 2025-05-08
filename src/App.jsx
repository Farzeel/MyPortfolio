import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from "react";


function App() {

  const [look, setLook] = useState('');
  localStorage.setItem("theme", "dark");
  // useEffect(() => {
  
  //   localStorage.setItem("theme", "dark");
  
  // }, []);
  return (
    <>
     {/* <ScrollProgressTimeline/> */}
      <Toaster />
      <BrowserRouter basename="/MyPortfolio">
        <Routes>
          <Route index element={<Home look={look} setLook={setLook}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
