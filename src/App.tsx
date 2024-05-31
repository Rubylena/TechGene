import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./app/Home";
import Error from "./components/Error";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "./store/context";

const router = createBrowserRouter([
  {
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
      <ToastContainer
        autoClose={3000}
        draggable={false}
        position="top-right"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </StoreProvider>
  );
}

export default App;
