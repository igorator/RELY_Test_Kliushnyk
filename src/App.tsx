import "./App.css";
import { CatFilterBar } from "./components/Filters/CatFilterBar";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router";
import { useBreeds } from "./hooks/useBreeds";

function App() {
  const { breeds, isLoading } = useBreeds();

  return (
    <main className="w-full flex flex-col max-w-[1440px] mx-auto p-[24px] text-white gap-16">
      <h1 className="font-bold text-[59px]">Cats</h1>
      <CatFilterBar breeds={breeds} isLoading={isLoading} />

      <Outlet />

      <ToastContainer theme="dark" hideProgressBar={true} />
    </main>
  );
}

export default App;
