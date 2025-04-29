import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Search } from "./pages/Search";
import { RootLayout } from "./layout/RootLayout";
import { Query } from "./pages/Query";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { HomePage } from "./pages/user/HomePage";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/auth/register" element={<Register />}></Route>
          <Route path="/transaksi"></Route>
        </Route>
          <Route path="query" element={<Query />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
