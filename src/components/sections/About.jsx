import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills =[
        "React",
        "Html", 
        "CSS","Laravel",
        "Tailwind"
    ];
    const webDesign =[
        "Figma",
        "Canva", 
        "Wordpress"
    ];
    return (
    <section 
        id="about"  
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text text-transparent text-center"> 
                {" "}
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I’m passionate about combining technology and public service, 
                     and I bring strong leadership, adaptability,
                  and a solid foundation in web development to every project I take on.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Frontend */}
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech) => (
                        <span
                        key={tech}
                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>

                {/* Web Design */}
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Web Design</h3>
                    <div className="flex flex-wrap gap-2">
                    {webDesign.map((tech) => (
                        <span
                        key={tech}
                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"> 
                        <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>
                                <strong>B.S. in Iformation Technology </strong>
                            </li>
                            <li>
                                Major in Web Technology 
                            </li>
                            <li>
                                    University of the Cordilleras (2019-2023) 
                            </li>                                                                   
                        </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"> 
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <h4 className="font-bold">Administrative Aide VI - DENR Region 1 (2024-2025)</h4>
                            <p>
                                Experienced geospatial data systems and digital record management.
                                 Utilizes tools like GeoRef and advanced Excel to streamline data cleansing
                                 and land information system updates.
                            </p>
                            <div> 
                            <h4 className="font-bold">Intern at BitShares Labs Inc. (2023)</h4>
                            <p className="mt-4">
                               Worked as a Junior Web Developer and developed a 
                               content management system using PHP and Laravel, 
                               built responsive websites from scratch with HTML, CSS, and Tailwind,
                                and collaborated on UI/UX design using Figma. Gained hands-on 
                               experience in full-stack web development and modern design practices.
                            </p>
                            </div>
                        </div>
                        
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};

