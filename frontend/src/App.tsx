import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./app";
import AppLayout from "./app/layout";
import Test from "./app/test/test";
import Links from "./app/links";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Links />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
