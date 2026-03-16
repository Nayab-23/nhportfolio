export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["English", "Hindi", "German"],
    },
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "Python", "HTML", "CSS", "JavaScript", "C"],
    },
    {
      title: "Technologies/Frameworks",
      skills: ["Git", "GitHub", "Ubuntu", "TensorFlow", "Scikit-Learn"],
    },
    {
      title: "Technical Skills",
      skills: ["Data Structures and Algorithms", "Data Preprocessing", "Data Analysis"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Time Management and Organization",
        "Adaptability",
        "Problem Solving",
        "Fluent in technical and non-technical discussions",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">My Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I've worked with a variety of languages, technologies and tools throughout my career. Here's a snapshot of
            my skill expertise.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
