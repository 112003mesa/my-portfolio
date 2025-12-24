import { useState } from "react";
import Box from "./Box";

type ProjectsProps = {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  link: string;
  image: string;
  skilsFilter: string[];
  githubLink: string;
};

const MainContent = () => {
  const [active, setActive] = useState<string>("all_projects");

  const projects: ProjectsProps[] = [
    {
      id: 1,
      name: "Airbnb Clone",
      description: "A website for booking and exploring places to stay",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://frontend-airbnb-clone.vercel.app/",
      githubLink: "https://github.com/112003mesa/frontend_airbnb_clone",
      image: "/image/airBnB.png", // Updated image path
      skilsFilter: ["next"],
    },
    {
      id: 2,
      name: "Movies App",
      description: "A website to browse movies and view their details",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://movies-app-alpha-woad.vercel.app/",
      githubLink: "https://github.com/112003mesa/Movies-App",
      image: "/image/Movies.png", // Updated image path
      skilsFilter: ["react"],
    },
    {
      id: 3,
      name: "E-commerce Website",
      description: "An online store for browsing products and shopping easily",
      techStack: ["React.js", "TypeScript", "Tailwind CSS"],
      link: "https://ecommerce-app-two-swart.vercel.app/",
      githubLink: "https://github.com/112003mesa/Ecommerce-App",
      image: "/image/user.png", // Updated image path
      skilsFilter: ["react"],
    },
    {
      id: 4,
      name: "Full Stack Admin Dashboard Forever",
      description: "An admin dashboard for managing products and users with demo access.",
      techStack: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
      link: "https://your-habit-tracker.com",
      githubLink: "https://github.com/mesa10",
      image: "/image/instant.png", // Updated image path
      skilsFilter: ["react", "node"],
    },
    {
      id: 5,
      name: "Full Stack E-commerce Forever",
      description: "A complete online store with products, cart, and orders",
      techStack: ["React.js", "TypeScript", "Node.js", "Tailwind CSS"],
      link: "https://ecommerce-full-stack-frontend-32f.vercel.app/",
      githubLink: "https://github.com/112003mesa/Ecommerce_FullStack-Frontend",
      image: "/image/135005_How_to_make_an_Ecommerce_website_in_React_js_complete_projectmin.png@1200w_0e.png", // Updated image path
      skilsFilter: ["react", "node"],
    },
    {
      id: 6,
      name: "Shopsy Website",
      description: "An online store for viewing products and shopping online",
      techStack: ["React.js", "TypeScript", "Node.js", "Tailwind CSS"],
      link: "https://shopsy-seven-pi.vercel.app/",
      githubLink: "https://github.com/112003mesa/Shopsy/",
      image: "/image/Shopsy.png", // Updated image path
      skilsFilter: ["react"],
    },
    {
      id: 7,
      name: "Task Manager",
      description: "A task management app to keep track of your tasks",
      techStack: ["React.js", "TypeScript", "Node.js", "Tailwind CSS"],
      link: "https://task-manager-frontend-six-red.vercel.app/",
      githubLink: "https://github.com/112003mesa/task-manager-frontend",
      image: "/image/Task.png", // Updated image path
      skilsFilter: ["react", "node"],
    },
  ];

  const filterProducts = () => {
    if (active === "all_projects") return projects;
    return projects.filter((item) => item.skilsFilter.includes(active));
  };

  const filterItems = filterProducts();

  // Filter categories dynamically
  const filters = ["all_projects", "react", "next", "node"];

  return (
    <div className="py-16 flex flex-col lg:flex-row items-start gap-[3rem] border-b border-gray-600">
      <div className="w-full lg:w-[11rem] grid grid-cols-3 lg:grid-cols-1 gap-5 lg:sticky md:top-5 transition">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`bg-[#252430] py-2 w-full rounded-md text-white font-semibold text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7611fa] ${
              active === filter
                ? "border-2 border-[#7611fa] opacity-100"
                : "opacity-60 hover:opacity-90"
            }`}
          >
            {filter.replace("_", " ").toUpperCase()}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 m-auto">
        {filterItems.map((product) => (
          <li key={product.id}>
            <Box {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainContent;
