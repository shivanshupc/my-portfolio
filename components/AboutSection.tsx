import Link from "next/link";
import { ArrowRight, Code, Camera, Briefcase, User } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      icon: User,
      title: "About Me",
      description:
        "Learn more about my background, interests, and what drives me.",
      href: "/about",
    },
    {
      icon: Code,
      title: "Skills",
      description:
        "Explore my technical expertise in languages, frameworks, and tools.",
      href: "/skills",
    },
    {
      icon: Briefcase,
      title: "Resume",
      description: "View my professional experience and download my CV.",
      href: "/resume",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Browse my photography portfolio and visual creations.",
      href: "/photography",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-primary-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 dark:text-white mb-4">
            Explore
          </h2>
          <p className="text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
            Discover more about my work, skills, and creative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group p-6 bg-primary-50 dark:bg-primary-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary-200 dark:bg-primary-700 rounded-lg flex items-center justify-center group-hover:bg-primary-900 dark:group-hover:bg-white transition-colors">
                  <card.icon className="w-6 h-6 text-primary-600 dark:text-primary-300 group-hover:text-white dark:group-hover:text-primary-900 transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-primary-600 dark:text-primary-300 text-sm mb-4">
                {card.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary-500 dark:text-primary-400 group-hover:text-primary-900 dark:group-hover:text-white transition-colors">
                View
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}