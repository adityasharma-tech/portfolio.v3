import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./app";
import AppLayout from "./app/layout";
import Test from './app/test/test'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route index element={<Home/>}/> 
          <Route element={<Test/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
