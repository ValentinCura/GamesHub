import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainPage from './components/mainPage/MainPage'
import Layout from './components/layout/Layout'
import UserCenterPage from './components/userCenterPage/UserCenterPage'
import Register from './components/registerPage/Register'
import ProductPage from './components/productPage/ProductPage'
import LoginPage from './components/loginPage/LoginPage'
import BuysFormPage from './components/buysFormPage/BuysFormPage'
import BuysPage from './components/buysPage/BuysPage'
import AboutUsPage from './components/aboutUsPage/AboutUsPage'



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <MainPage />
        </Layout>
      ),
    },
    {
      path: "/user-center",
      element: (
        <Layout>
          < UserCenterPage />
        </Layout>
      ),
    },
    {
      path: "/register",
      element: (
        <Layout>
          < Register />
        </Layout>
      ),
    },
    {
      path: "/product",
      element: (
        <Layout>
          <ProductPage />
        </Layout>
      ),
    },
    {
      path: "/login",
      element: (
        <Layout>
          <LoginPage />
        </Layout>
      ),
    },
    {
      path: "/buys-form",
      element: (
        <Layout>
          <BuysFormPage />
        </Layout>
      ),
    },
    {
      path: "/buys",
      element: (
        <Layout>
          <BuysPage />
        </Layout>
      ),
    },
    {
      path: "/about-us",
      element: (
        <Layout>
          <AboutUsPage />
        </Layout>
      ),
    },
  ])

  return <RouterProvider router={router} />
}

export default App
