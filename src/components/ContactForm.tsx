import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import animationDone from "./../../public/animation/animationDone.json"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mdkavvyv");
  return (
    <form className='flex flex-col gap-4 flex-1'
    onSubmit={handleSubmit}>
    <div className='flex flex-col md:flex-row gap-3'>
    <label 
    className='text-gray-400 whitespace-nowrap'
    htmlFor="email">
        Email Address
    </label>
    <input
        className='w-full bg-transparent focus:outline-none border border-gray-600 py-2 ps-3 rounded text-gray-300'
        id="email"
        type="email" 
        name="email"
        required
    />
    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
    />
    </div>
    <div className='flex flex-col md:flex-row gap-3'>
    <label
    className='text-gray-400 whitespace-nowrap'
    htmlFor="email">
        Your Message:
    </label>
    <textarea
        className='bg-transparent border focus:outline-none resize-none border-gray-600 w-full py-2 ps-3 rounded min-h-[200px] text-gray-300'
        id="message"
        name="message"
        required
        />
    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />
    </div>
    <button
    className="bg-[#252430] py-3 w-[11rem] border border-gray-600 transition rounded text-white disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-[0.6]"
    type="submit" disabled={state.submitting}>
        {state.submitting? "Submitting...": "Submit"}
    </button>
    {state.succeeded && <p className='text-gray-400 text-3xl font-medium flex'><Lottie loop={false} animationData={animationDone} className='h-[45px]' /> Thanks For Joining!</p>}
    </form>
  );
}

export default ContactForm;