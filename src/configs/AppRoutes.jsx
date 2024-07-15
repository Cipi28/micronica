import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Home } from "../components/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<App />}>
        <Route path={"/"} element={<Home />} />
        {/* <Route path={"/categories"} element={<Categories />} />
        <Route path={"/upload-receipt"} element={<UploadReceipt />} />
        <Route path={"/statistics"} element={<Statistics />} />{" "}
        <Route path={"/products"} element={<Products />} /> */}
      </Route>
    </Routes>
  );
};