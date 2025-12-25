import Lottie from "lottie-react"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Hearo from "./components/Hero"
import MainContent from "./components/MainContent"
import whatsapp from "..//public/animation/Animationwhatsapp.json"
import Cursor from "./components/Cursor"

function App() {
  return (
    <>
    <Cursor />
    <div className="container relative">
      <Hearo />
      <MainContent />
      <ContactUs />
      <Footer />
      <a target="_blank" href="https://wa.me/201102893016"><Lottie className="h-[100px] fixed bottom-4 right-2" animationData={whatsapp} /></a>
    </div>
    </>
  )
}

export default App
