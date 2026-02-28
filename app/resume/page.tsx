import { Briefcase, GraduationCap, Award, Download, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: [
      "Led development of core platform features serving 1M+ users",
      "Architected microservices infrastructure reducing latency by 40%",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines improving deployment frequency by 3x",
    ],
  },
  {
    title: "Software Engineer",
    company: "Startup Inc.",
    location: "Remote",
    period: "2020 - 2022",
    description: [
      "Built full-stack applications using React, Node.js, and PostgreSQL",
      "Developed RESTful APIs and GraphQL endpoints",
      "Collaborated with design team to implement responsive UIs",
      "Reduced page load times by 50% through optimization",
    ],
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    location: "New York, NY",
    period: "2018 - 2020",
    description: [
      "Developed and maintained client websites and web applications",
      "Implemented responsive designs using HTML, CSS, and JavaScript",
      "Worked with CMS platforms including WordPress and Drupal",
      "Participated in agile development processes and daily standups",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    location: "City, State",
    period: "2014 - 2018",
    description: "Graduated with honors. Focus on software engineering and web development.",
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    school: "Coding Academy",
    location: "Online",
    period: "2018",
    description: "Intensive 12-week program covering modern web technologies.",
  },
];

const certifications = [
  { name: "AWS Certified Developer - Associate", year: "2023" },
  { name: "Google Cloud Professional Developer", year: "2022" },
  { name: "Meta Frontend Developer Certificate", year: "2022" },
  { name: "MongoDB Developer Certification", year: "2021" },
];

export default function ResumePage() {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white mb-4">
            Resume
          </h1>
          <p className="text-xl text-primary-600 dark:text-primary-300 mb-6">
            My professional journey and qualifications
          </p>
          <Link
            href="/resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-primary-900 dark:bg-white text-white dark:text-primary-900 rounded-lg font-medium hover:bg-primary-800 dark:hover:bg-primary-100 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Link>
        </div>

        {/* Experience */}
        <div className="bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-8">
            <Briefcase className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-300" />
            <h2 className="text-2xl font-bold text-primary-900 dark:text-white">
              Experience
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-primary-200 dark:border-primary-700">
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary-400" />
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-primary-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-primary-500 dark:text-primary-400">
                    <span className="font-medium text-primary-700 dark:text-primary-300">
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {exp.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="mt-3 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-primary-600 dark:text-primary-300 flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-300" />
            <h2 className="text-2xl font-bold text-primary-900 dark:text-white">
              Education
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-primary-200 dark:border-primary-700">
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary-400" />
                <h3 className="text-lg font-semibold text-primary-900 dark:text-white">
                  {edu.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-primary-500 dark:text-primary-400 mb-2">
                  <span className="font-medium text-primary-700 dark:text-primary-300">
                    {edu.school}
                  </span>
                  <span>•</span>
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.period}</span>
                </div>
                <p className="text-sm text-primary-600 dark:text-primary-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-8">
          <div className="flex items-center mb-8">
            <Award className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-300" />
            <h2 className="text-2xl font-bold text-primary-900 dark:text-white">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 bg-primary-50 dark:bg-primary-800 rounded-lg flex justify-between items-center"
              >
                <span className="text-primary-700 dark:text-primary-300">{cert.name}</span>
                <span className="text-sm text-primary-500 dark:text-primary-400">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}