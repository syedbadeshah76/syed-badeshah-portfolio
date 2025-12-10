import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation, useStaggeredScrollAnimation } from '@/hooks/useScrollAnimation';

import knowledgeVillageImg from '@/assets/knowledge-village-project.jpg';
import gucciPerfumeImg from '@/assets/image.png';
import javascriptProjectsImg from '@/assets/javascript-projects.jpg';
import alshahshawarma from '@/assets/alshahshawarma.png';

const ProjectsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.4 });
  
  // 🔥 FIX: allow all items to animate instead of hiding some
  const { containerRef: projectsRef, visibleItems } = useStaggeredScrollAnimation(10, 0.3);

  const projects = [
    {
      title: "Knowledge Village Institute",
      description: "A comprehensive educational platform built with React.",
      image: knowledgeVillageImg,
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
      githubUrl: "https://github.com/syedbadeshah76/knowledge-village-nexus",
      liveUrl: "https://knowledge-village-institute.onrender.com/",
      featured: true
    },
    {
      title: "Wedding Website - Asif & Ariba",
      description: "Luxury Wedding Website with elegant UI.",
      image: gucciPerfumeImg,
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
      githubUrl: "https://asif-ariba-wedding.netlify.app/",
      liveUrl: "https://asif-ariba-wedding.netlify.app/",
      featured: true
    },
    {
      title: "AL-Shah Shawarma",
      description: "A modern, visually rich restaurant website.",
      image: alshahshawarma,
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
      githubUrl: "https://github.com/syedbadeshah76/al-shah-shawarma-.git",
      liveUrl: "https://syedbadeshah76.github.io/al-shah-shawarma-/",
      featured: true
    },
    {
      title: "TECHLYNX",
      description: "Innovating the Future with Cutting Edge Technology",
      image: javascriptProjectsImg,
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/syedbadeshah76/techvex-project",
      liveUrl: "https://syedbadeshah76.github.io/techvex-project/",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mt-0 pt-0">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div ref={titleRef} className="text-center mb-10 sm:mb-14">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <span className="text-gradient">Featured Projects</span>
          </h2>

          <p className={`text-muted-foreground text-lg mt-4 transition-all duration-700 delay-200 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            A showcase of my latest work
          </p>
        </div>

        {/* Projects */}
        <div ref={projectsRef} className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-6 items-center transition-all duration-700 ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              
              {/* Image */}
              <div>
                <div className="relative overflow-hidden rounded-lg border hover:shadow-lg group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-3">
                    <Button size="sm" className="bg-primary">
                      <a href={project.liveUrl} target="_blank" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    </Button>

                    <Button size="sm" variant="outline">
                      <a href={project.githubUrl} target="_blank" className="flex items-center gap-1">
                        <Github className="h-4 w-4" /> Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div>
                {project.featured && (
                  <span className="px-3 py-1 text-xs bg-primary/10 border border-primary/30 rounded-full">
                    Featured Project
                  </span>
                )}

                <h3 className="text-2xl font-bold mt-4">{project.title}</h3>

                <p className="text-muted-foreground mt-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent/10 border rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>

          <Button variant="outline" className="border-primary text-primary" asChild>
            <a href="https://github.com/syedbadeshah76" target="_blank">
              <Github className="h-5 w-5 mr-2" /> View All Projects
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
