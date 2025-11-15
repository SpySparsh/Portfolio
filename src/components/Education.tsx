const Education = () => {
  const educationItems = [
    {
      title: "B.Tech in Computer Science",
      institution: "Ajay Kumar Garg Engineering College (AKTU)",
      location: "Ghaziabad, Uttar Pradesh",
      period: "2022 - 2026 (Expected)",
      isPrimary: true,
    },
    {
      title: "Higher Secondary Education",
      institution: "GAIL DAV Public School",
      location: "CBSE Board",
      period: "Completed 2022",
      isPrimary: true,
    },
  ];

  const certifications = [
    {
      title: "The Web Developer Bootcamp 2025",
      provider: "Udemy",
      date: "May 2025",
    },
    {
      title: "Learn AI with TensorFlow",
      provider: "Infosys Springboard",
      date: "Apr 2025",
    },
    {
      title: "Introduction to Cyber Security",
      provider: "Cisco",
      date: "Feb 2025",
    },
  ];

  return (
    <section id="education" className="py-20 reveal relative z-10">
      <h2 className="text-4xl font-bold text-center mb-16">
        Education & <span className="gradient-text">Certifications</span>
      </h2>

      <div className="max-w-3xl mx-auto px-4">
        <div className="relative pl-8 border-l border-border ml-4 md:ml-0">
          {/* Education Items */}
          {educationItems.map((item, index) => (
            <div key={index} className="timeline-item mb-12 relative">
              <div className="absolute -left-[29px] top-[5px] w-[18px] h-[18px] border-3 border-background bg-primary rounded-full z-10"></div>
              <div className="glass-card p-6 rounded-xl">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-sm text-primary font-medium bg-primary/20 px-3 py-1 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>
                <p className="text-md text-muted-foreground">{item.institution}</p>
                <p className="text-sm text-muted-foreground/70 mt-1">{item.location}</p>
              </div>
            </div>
          ))}

          {/* Certifications Section */}
          <h3 className="text-2xl font-bold mb-8 -ml-8 pt-4">Certifications</h3>

          {certifications.map((cert, index) => (
            <div key={index} className="timeline-item mb-8 relative">
              <div className="absolute -left-[29px] top-[5px] w-[18px] h-[18px] border-3 border-background bg-secondary rounded-full z-10"></div>
              <div className="glass-card p-5 rounded-xl flex items-center justify-between hover:bg-muted/10 transition-colors">
                <div>
                  <h4 className="text-lg font-semibold">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                </div>
                <span className="text-xs text-muted-foreground/70">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
