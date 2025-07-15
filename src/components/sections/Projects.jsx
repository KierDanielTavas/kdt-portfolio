import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return ( 
     <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text text-transparent text-center"> 
                {' '}
                Sample Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Sample 1</h3>
                    <p className="tet-gray-400 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <div>
                        {["React","Tailwind"].map((tech,key)=>(
                        <span
                            key={key}
                            className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                            >
                            {tech}
                        </span>
                        ))}
                    </div>
                    <div>
                        <a href="#" className="text-purple-400 hover:text-purple-200 transition-colors my-4">View Project →</a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Sample 1</h3>
                    <p className="tet-gray-400 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <div>
                        {["React","Tailwind"].map((tech,key)=>(
                        <span
                            key={key}
                            className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                            >
                            {tech}
                        </span>
                        ))}
                    </div>
                    <div>
                        <a href="#" className="text-purple-400 hover:text-purple-200 transition-colors my-4">View Project →</a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Sample 1</h3>
                    <p className="tet-gray-400 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <div>
                        {["React","Tailwind"].map((tech,key)=>(
                        <span
                            key={key}
                            className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                            >
                            {tech}
                        </span>
                        ))}
                    </div>
                    <div>
                        <a href="#" className="text-purple-400 hover:text-purple-200 transition-colors my-4">View Project →</a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Sample 1</h3>
                    <p className="tet-gray-400 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <div>
                        {["React","Tailwind"].map((tech,key)=>(
                        <span
                            key={key}
                            className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                            >
                            {tech}
                        </span>
                        ))}
                    </div>
                    <div>
                        <a href="#" className="text-purple-400 hover:text-purple-200 transition-colors my-4">View Project →</a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};