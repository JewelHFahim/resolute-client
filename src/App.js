import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import router from "./Component/Router/Router";

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Home></Home>
        <Toaster />
      </RouterProvider>
    </div>
  );
}

export default App;
