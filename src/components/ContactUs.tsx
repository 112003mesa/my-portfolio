import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";
import Lottie from "lottie-react";
import contactAnimation from "../../public/animation/contactAnimation.json"

const ContactUs = () => {
  return (
    <div className="py-16 border-b border-gray-600">
        <div className="flex items-center gap-3 text-3xl mb-6">
            <span className="text-gray-400"><MdEmail /></span>
            <h1 className="text-white font-bold">Contact Us</h1>
        </div>
        <div className="flex items-center justify-between">
            <ContactForm />
            <div className="hidden lg:flex flex-1 justify-center items-center">
            <Lottie animationData={contactAnimation} className='h-[300px]' />
            </div>
        </div>
    </div>
  )
}

export default ContactUs
