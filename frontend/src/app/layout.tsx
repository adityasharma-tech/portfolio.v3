import { Outlet } from "react-router";
import Header from "./home/header";

export default function AppLayout() {
  return (
    <main className="h-screen relative flex flex-col items-center w-screen overflow-x-hidden overflow-y-auto">
        <Header/>
      <div className="px-10 py-10 w-7xl h-full">
        <Outlet />
      </div>
    </main>
  );
}
