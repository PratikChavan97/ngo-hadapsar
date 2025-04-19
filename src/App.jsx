import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./features/PageLayout";
import Error from "./components/Error";
import Contact from "./Pages/site/Contact";
import DashboardLayout from "./features/DashboardLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <PageLayout />,
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
      element: <DashboardLayout />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
