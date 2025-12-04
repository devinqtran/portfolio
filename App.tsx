import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ProjectCard } from "./components/ProjectCard";
import { ResearchList } from "./components/ResearchList";
import { PdfModal } from "./components/PdfModal";
import { PROJECTS, PAPERS, SKILLS, RESUME_URL } from "./constants";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const gisProjects = PROJECTS.filter((p) => p.category === "GIS");
  const csProjects = PROJECTS.filter((p) => p.category === "CS");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-accent selection:text-white">
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* GIS Section */}
        <section id="gis" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <span className="text-accent font-bold tracking-wider text-sm uppercase">
                Spatial Analysis
              </span>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mt-2">
                GIS & Mapping
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl">
                Leveraging geographic information systems to uncover patterns,
                manage resources, and visualize complex spatial data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gisProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Computer Science Section */}
        <section id="cs" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="mb-12 md:text-right">
              <span className="text-accent font-bold tracking-wider text-sm uppercase">
                Engineering
              </span>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mt-2">
                Computer Science & UI
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl ml-auto">
                Building scalable web applications and intuitive user
                interfaces. Bridging the gap between data and user experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {csProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}

              {/* Skills Card Placeholder in grid */}
              <div className="bg-slate-900 rounded-xl p-8 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-serif font-bold mb-6">
                  Technical Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        skill.category === "GIS"
                          ? "border-green-500 text-green-400"
                          : skill.category === "Design"
                          ? "border-purple-500 text-purple-400"
                          : "border-blue-500 text-blue-400"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section
          id="research"
          className="py-24 bg-white relative overflow-hidden"
        >
          {/* Decorative background number */}
          <div className="absolute right-0 top-20 text-[20rem] font-serif font-bold text-slate-50 select-none leading-none -z-10 opacity-50">
            &
          </div>

          <div className="container mx-auto px-6">
            <div className="mb-12">
              <span className="text-accent font-bold tracking-wider text-sm uppercase">
                Academic Work
              </span>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mt-2">
                Research Papers
              </h2>
              <p className="text-slate-600 mt-4 max-w-2xl">
                Research and conference papers focusing on spatial algorithms,
                urban planning, and machine learning applications in geography.
              </p>
            </div>

            <div className="max-w-4xl">
              <ResearchList papers={PAPERS} />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Let's Collaborate
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              I am currently open to new opportunities in GIS analysis and
              frontend engineering. Whether you have a question or just want to
              say hi, my inbox is open.
            </p>
            <a
              href="mailto:contact@devinqtran.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-accent/40"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Resume Modal */}
      <PdfModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        pdfUrl={RESUME_URL}
        title="Devin Q. Tran - Resume"
      />
    </div>
  );
}

export default App;
