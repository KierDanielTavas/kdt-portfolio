
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (<section id="home" 
    className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text text-transparent leading-right">
                Hi, I'm Kier
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Information Technology graduate majoring in Web Technology with experience in web development and public sector data management. 
                Skilled in PHP, Laravel, HTML, CSS, Tailwind, and Figma, with a passion for combining technology and public service. 
            </p>
            <div className="flex justify-center space-x-4">
                <a 
                    href="#projects" 
                    className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                >
                    View Projects
                </a>
                  <a 
                    href="#contact" 
                    className="border border-purple-500/50 text-purple-500 py-3 px-6 rouded font-medium transition-all duration-200 
                    hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-500 "
                >
                    Contact Me
                </a>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};