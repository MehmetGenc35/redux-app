import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root-layout";
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";


const router = createBrowserRouter( [
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "about",
                element: <AboutPage/>
            },
            {
                path: "contact",
                element: <ContactPage/>
            }
        ]
    }
])




const AppRouter = () => {
  return <RouterProvider router={router}/>  
}

export default AppRouter