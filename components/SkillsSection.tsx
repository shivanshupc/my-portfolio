import Link from "next/link";
import { ArrowRight, Code, Palette, Database, Cloud, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Go", "Rust"],
  },
  {
    icon: Palette,
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-primary-50 dark:bg-primary-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
            A quick overview of the technologies I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-white dark:bg-primary-900 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-lg flex items-center justify-center mr-3">
                  <category.icon className="w-5 h-5 text-primary-600 dark:text-primary-300" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-primary-600 dark:text-primary-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/skills"
            className="inline-flex items-center px-6 py-3 bg-primary-900 dark:bg-white text-white dark:text-primary-900 rounded-lg font-medium hover:bg-primary-800 dark:hover:bg-primary-100 transition-colors"
          >
            View All Skills
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}