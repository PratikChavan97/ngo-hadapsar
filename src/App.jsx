import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminHome from "./Pages/admin/AdminHome";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";
import Contact from "./Pages/site/Contact";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: "Main Content",
        },
        {
          path: "/about",
          element: "About US",
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog",
          element: "Blog",
        },
        {
          path: "/work",
          element: "Our Work",
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminHome />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
