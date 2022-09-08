import Home from "./routes/home.component";
import Shop from "./routes/shop.component";
import { Routes, Route, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>I am navigation</h1>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
