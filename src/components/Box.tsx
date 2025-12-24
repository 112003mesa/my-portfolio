import { FaGithub, FaLink, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface BoxProps {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  link: string;
  image: string;
  githubLink: string;
}

const Box: React.FC<BoxProps> = ({ name, description, techStack, link, image, githubLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }} 
      animate={{ opacity: 1, scale: 1, y: 0 }} 
      exit={{ opacity: 0, scale: 0.95, y: -15 }} 
      transition={{ type: "spring", stiffness: 140, damping: 10 }}
      whileHover={{ 
        scale: 1.03, 
        rotate: 0.5, 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        transition: { duration: 0.15 }
      }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
      className="min-h-[375px] bg-gradient-to-b from-white/5 to-white/10 pb-3 rounded transition border border-transparent hover:border-[#607d8b]"
    >
      <img src={image} alt={name} className="w-full h-[160px] rounded" />
      <div className="px-3 mt-3">
        <h1 className="truncate text-white text-2xl font-bold">{name}</h1>
        <p className="text-gray-400 mt-2 text-base">{description}</p>
        <div className="mt-3 flex items-center gap-1 text-gray-300">
          Skils:
          {techStack.map((stack) => (
            <span key={stack} className="text-gray-400 text-[13px]">{stack}</span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a target="_blank" href={link}>
              <FaLink className="text-xl text-gray-400 hover:text-white transition" />
            </a>
            <a target="_blank" href={githubLink}>
              <FaGithub className="text-xl text-gray-400 hover:text-white transition" />
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-400 hover:text-white">
            <span>More</span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Box;
