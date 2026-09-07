import { Code, Brain, Cloud, Workflow, Wrench, Users, Terminal, Award } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming & AI",
    skills: [
      { name: "Python", level: 95 },
      { name: "LangChain", level: 90 },
      { name: "LangFuse", level: 90 },
      { name: "PyTorch", level: 88 },
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-learn", level: 90 },
    ],
  },
  {
    icon: Brain,
    title: "GenAI & LLM Systems",
    skills: [
      { name: "RAG Pipelines", level: 92 },
      { name: "LLM Fine-tuning", level: 85 },
      { name: "Agent Orchestration (ReAct)", level: 90 },
      { name: "vLLM Serving", level: 90 },
      { name: "AWS Bedrock", level: 88 },
      { name: "OCR Pipelines", level: 85 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS (Bedrock, SageMaker, DynamoDB)", level: 90 },
      { name: "Kubernetes (GPU Deployments)", level: 88 },
      { name: "Docker", level: 90 },
      { name: "Load Balancer Configuration", level: 85 },
      { name: "NVIDIA DCGM / GPU Metrics", level: 82 },
      { name: "Grafana Observability", level: 88 },
    ],
  },
  {
    icon: Workflow,
    title: "MLOps & CI/CD",
    skills: [
      { name: "CI/CD Pipelines", level: 90 },
      { name: "MLflow", level: 88 },
      { name: "Apache Airflow", level: 85 },
      { name: "Evidently AI (Monitoring)", level: 85 },
      { name: "Splunk (Logging)", level: 82 },
      { name: "EDA & Predictive Modeling", level: 90 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Linux", level: 85 },
      { name: "SageMaker", level: 85 },
      { name: "DynamoDB", level: 85 },
      { name: "Langfuse Tracing", level: 90 },
      { name: "Adobe Lightroom", level: 75 },
    ],
  },
  {
    icon: Users,
    title: "Professional Strengths",
    skills: [
      { name: "System Design (Scalable Cloud)", level: 88 },
      { name: "Production GenAI Deployment", level: 92 },
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 88 },
      { name: "Team Collaboration", level: 88 },
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
            {["AR/VR Applications", "Advanced Agent Orchestration", "LLM Optimization", "Secure Cloud Architectures", "Multimodal GenAI"].map((skill) => (
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
            <Award className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-300" />
            <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
              Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "AWS Machine Learning Specialty",
              "NVIDIA AI Infrastructure Architect",
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