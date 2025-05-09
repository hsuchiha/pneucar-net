import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import ProductsPage from "./pages/ProductsPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="servicos" element={<ServicesPage />} />
        <Route path="produtos" element={<ProductsPage />} />
        <Route path="contato" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
