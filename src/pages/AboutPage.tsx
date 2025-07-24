import { FaGithub, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

function AboutPage(){
    const techStack = [
        { name: 'React', icon: <FaReact className="text-blue-500" />, description: 'A powerful JavaScript library for building user interfaces.' },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" />, description: 'A statically typed superset of JavaScript that adds safety and robustness.' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" />, description: 'A utility-first CSS framework for rapid, custom UI development.' },
        { name: 'React Router', icon: <FaReact className="text-red-500" />, description: 'The standard library for declarative routing in React applications.' },
        { name: 'GitHub', icon: <FaGithub className="text-gray-800" />, description: 'Used for version control and hosting the project repository.' },
    ];

    return (
        <div className="py-10 px-10 ">
            <div className="container flex flex-col gap-10 mx-auto max">
                <div className="text-center">
                    <h1 className=" text-4xl font-bold">About Campus Club Finder</h1>
                    <p className="mt-5 mx-auto">Helping students finding their club of passion</p>
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">What is UniClubs?</h2>
                    <p className="text-gray-700 leading-relaxed">
                        UniClubs is a centralized platform designed to help university students discover and connect with the diverse range of clubs and organizations available on campus. Navigating student life can be overwhelming, and finding a community shouldn't be.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission is to simplify this process by providing a comprehensive, searchable directory of clubs. Whether you're interested in academic societies, sports teams, arts and culture groups, or volunteer organizations, UniClubs makes it easy to find your perfect fit.
                    </p>
                </div>
                <div className="container space-y-5">
                    <h2 className="text-2xl font-bold">Text Stack Used</h2>
                    <div className="flex gap-3 flex-wrap">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="flex p-4 bg-gray-50 border-2 rounded-lg shadow-xl hover:shadow-md transition-shadow duration-300 min-w-3xs max-w-3xs">
                            <div className="flex-shrink-0 text-3xl mr-4 mt-1">
                                {tech.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900">{tech.name}</h3>
                                <p className="text-gray-600">{tech.description}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutPage;