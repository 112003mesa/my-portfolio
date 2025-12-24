

const Footer = () => {
    const date = new Date()
  return (
    <div className='py-6 flex items-center justify-center'>
    <p className="text-gray-400 text-xl">@ {date.getFullYear()}, All Rights Reserved</p>
    </div>
  )
}

export default Footer
