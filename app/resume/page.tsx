import { Briefcase, GraduationCap, Award, Download, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    title: "Machine Learning Consultant",
    company: "Deloitte USI",
    location: "Pune, M.H.",
    period: "Apr 2024 - Present",
    description: [
      "End-to-End Observability: Architected centralized observability platform integrating vLLM serving metrics, Langfuse LLM tracing, and NVIDIA DCGM GPU metrics into unified Grafana dashboard for real-time GenAI app, model, and infra monitoring",
      "Scalable GenAI Infrastructure: Designed and deployed production-grade RAG-based applications including ReAct-based RAG agent handling GBs of data on Kubernetes-backed LLM serving infrastructure",
      "Kubernetes Infrastructure: Deployed applications on Kubernetes clusters with load balancer configuration for scalability, automating data preprocessing workflows via Apache Airflow",
      "MLOps CI/CD: Established standardized MLOps practices with CI/CD pipelines, MLflow for model versioning, Evidently AI for monitoring, and Splunk for logging",
    ],
  },
  {
    title: "Data Scientist",
    company: "Yash Technologies",
    location: "Pune, M.H.",
    period: "July 2022 - Apr 2024",
    description: [
      "Trained ML models for mortality rate prediction and developed OCR pipeline to extract and store data from historical documents in DynamoDB, both deployed via AWS-based MLOps CI/CD pipeline",
      "Implemented Chatbot using LLM with RAG architecture to extract insights from insurance documents, enhancing efficiency in document analysis",
    ],
  },
  {
    title: "Software Engineer",
    company: "Tata Consultancy Services (TCS)",
    location: "Pune, M.H.",
    period: "Feb 2021 - Jul 2022",
    description: [
      "Deployed Python scripts, performed EDA, and built Scikit-learn classification model for workflow optimization and predictive analysis",
    ],
  },
];

const education = [
  {
    degree: "B.E. in Information Technology",
    school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V)",
    location: "India",
    period: "2016 - 2020",
    description: "Bachelor of Engineering in Information Technology with strong foundation in software engineering and computing.",
  },
];

const certifications = [
  { name: "AWS Machine Learning Specialty", year: "Certified" },
  { name: "NVIDIA AI Infrastructure Architect", year: "Certified" },
];

const achievements = [
  "Runner-up in GenAI hackathon — music recommendation app using LLM and RAG techniques",
  "Strong interest in AR/VR technologies and innovative product development",
  "Hobbies: Photography, Audiophile",
];

export default function ResumePage() {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white mb-4">
            Shivanshu Sharma
          </h1>
          <p className="text-xl text-primary-600 dark:text-primary-300 mb-2">
            ML Engineer | Pune, India • +91-7982398257
          </p>
          <p className="text-sm text-primary-500 dark:text-primary-400 mb-6">
            shivanshupc@gmail.com • linkedin.com/in/shivanshupc/ • github.com/shivanshupc
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
        <div className="bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-8 mb-8">
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

        {/* Achievements & Interests */}
        <div className="bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-8">
          <div className="flex items-center mb-8">
            <Award className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-300" />
            <h2 className="text-2xl font-bold text-primary-900 dark:text-white">
              Achievements & Interests
            </h2>
          </div>

          <ul className="space-y-3">
            {achievements.map((item, index) => (
              <li key={index} className="text-sm text-primary-600 dark:text-primary-300 flex items-start">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}