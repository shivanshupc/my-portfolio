import { Code, Palette, Database, Cloud, Wrench, Terminal, Smartphone, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "Python", level: 90 },
      { name: "Go", level: 80 },
      { name: "Rust", level: 70 },
      { name: "Java", level: 75 },
      { name: "C/C++", level: 65 },
    ],
  },
  {
    icon: Palette,
    title: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "Three.js", level: 70 },
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 70 },
      { name: "Vercel", level: 90 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Linux", level: 85 },
      { name: "Adobe Lightroom", level: 80 },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 95 },
      { name: "Team Leadership", level: 85 },
      { name: "Project Management", level: 80 },
      { name: "Agile/Scrum", level: 85 },
      { name: "Mentoring", level: 80 },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white mb-4">
            Skills & Expertise
          </h1>
          <p className="text-xl text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-lg flex items-center justify-center mr-3">
                  <category.icon className="w-5 h-5 text-primary-600 dark:text-primary-300" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-primary-700 dark:text-primary-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary-500 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-primary-100 dark:bg-primary-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Terminal className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-300" />
            <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
              Currently Learning
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Web3", "Machine Learning", "System Design", "Rust", "WASM"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Smartphone className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-300" />
            <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
              Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "AWS Certified Developer - Associate",
              "Google Cloud Professional Developer",
              "Meta Frontend Developer Certificate",
            ].map((cert) => (
              <div
                key={cert}
                className="p-4 bg-primary-50 dark:bg-primary-800 rounded-lg flex items-center"
              >
                <div className="w-2 h-2 bg-primary-400 rounded-full mr-3" />
                <span className="text-primary-700 dark:text-primary-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}