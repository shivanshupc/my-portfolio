import { MapPin, Heart, Briefcase, GraduationCap, Coffee } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-primary-600 dark:text-primary-300">
            Get to know me better
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Image Placeholder */}
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-5xl font-semibold flex-shrink-0">
              SS
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-2">
                Shivanshu Sharma
              </h2>
              <p className="text-primary-500 dark:text-primary-400 flex items-center justify-center md:justify-start mb-1">
                <MapPin className="w-4 h-4 mr-1" />
                Pune, India
              </p>
              <p className="text-sm text-primary-500 dark:text-primary-400 mb-4">
                shivanshupc@gmail.com • +91-7982398257 • linkedin.com/in/shivanshupc/ • github.com/shivanshupc
              </p>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                Hi there! I&apos;m an ML Engineer with 5+ years of experience designing, deploying, and optimizing ML
                and GenAI systems in production. AWS Machine Learning Specialty and NVIDIA AI Infrastructure Architect
                certified. I specialize in Kubernetes-based GPU deployments, MLOps pipelines, LLM serving
                infrastructure (vLLM, Langfuse), and building scalable, secure cloud architectures.
              </p>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-8 mb-8">
          <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-6 flex items-center">
            <Briefcase className="w-5 h-5 mr-2" />
            What I Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-primary-50 dark:bg-primary-800 rounded-lg">
              <h4 className="font-medium text-primary-900 dark:text-white mb-2">GenAI Infrastructure</h4>
              <p className="text-sm text-primary-600 dark:text-primary-300">
                Designing production-grade RAG applications including ReAct-based RAG agents handling GBs of data on Kubernetes-backed LLM serving infrastructure.
              </p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-800 rounded-lg">
              <h4 className="font-medium text-primary-900 dark:text-white mb-2">MLOps & Observability</h4>
              <p className="text-sm text-primary-600 dark:text-primary-300">
                Building CI/CD pipelines, MLflow versioning, and unified observability with vLLM metrics, Langfuse tracing, NVIDIA DCGM and Grafana.
              </p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-800 rounded-lg">
              <h4 className="font-medium text-primary-900 dark:text-white mb-2">ML & LLM Applications</h4>
              <p className="text-sm text-primary-600 dark:text-primary-300">
                Mortality rate prediction, OCR pipelines with DynamoDB, LLM+RAG chatbots for insurance document analysis, and Scikit-learn classification models.
              </p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-800 rounded-lg">
              <h4 className="font-medium text-primary-900 dark:text-white mb-2">Photography</h4>
              <p className="text-sm text-primary-600 dark:text-primary-300">
                Capturing landscapes, portraits, and street photography with a focus on natural light and authentic moments.
              </p>
            </div>
          </div>
        </div>

        {/* Background */}
        <div className="bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-8 mb-8">
          <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-6 flex items-center">
            <GraduationCap className="w-5 h-5 mr-2" />
            Background
          </h3>
          <div className="space-y-6">
            <div className="border-l-2 border-primary-300 dark:border-primary-700 pl-4">
              <h4 className="font-medium text-primary-900 dark:text-white">Machine Learning Consultant — Deloitte USI, Pune (Apr 2024 - Present)</h4>
              <p className="text-primary-600 dark:text-primary-300 text-sm">
                Architecting GenAI observability (vLLM + Langfuse + NVIDIA DCGM + Grafana), deploying RAG/ReAct agents on Kubernetes, automating preprocessing with Airflow, and standardizing MLOps with MLflow, Evidently AI and Splunk.
              </p>
            </div>
            <div className="border-l-2 border-primary-300 dark:border-primary-700 pl-4">
              <h4 className="font-medium text-primary-900 dark:text-white">Data Scientist — Yash Technologies, Pune (Jul 2022 - Apr 2024)</h4>
              <p className="text-primary-600 dark:text-primary-300 text-sm">
                Trained mortality-rate prediction models, built OCR pipelines with DynamoDB, deployed via AWS MLOps CI/CD, and implemented LLM+RAG chatbots for insurance documents.
              </p>
            </div>
            <div className="border-l-2 border-primary-300 dark:border-primary-700 pl-4">
              <h4 className="font-medium text-primary-900 dark:text-white">Software Engineer — TCS, Pune (Feb 2021 - Jul 2022)</h4>
              <p className="text-primary-600 dark:text-primary-300 text-sm">
                Deployed Python automation, performed EDA, and built Scikit-learn classification models for workflow optimization and predictive analysis.
              </p>
            </div>
            <div className="border-l-2 border-primary-300 dark:border-primary-700 pl-4">
              <h4 className="font-medium text-primary-900 dark:text-white">Education — B.E. Information Technology, R.G.P.V (2016 - 2020)</h4>
              <p className="text-primary-600 dark:text-primary-300 text-sm">
                Graduated from Rajiv Gandhi Proudyogiki Vishwavidyalaya with a strong foundation in information technology and software engineering.
              </p>
            </div>
            <div className="border-l-2 border-primary-300 dark:border-primary-700 pl-4">
              <h4 className="font-medium text-primary-900 dark:text-white">Achievement</h4>
              <p className="text-primary-600 dark:text-primary-300 text-sm">
                Runner-up in a GenAI hackathon for a music recommendation app using LLM and RAG techniques.
              </p>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white dark:bg-primary-900 rounded-2xl shadow-sm p-8">
          <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-6 flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Interests & Hobbies
          </h3>
          <div className="flex flex-wrap gap-3">
            {["GenAI", "AR/VR Technologies", "Photography", "Audiophile", "Music", "RAG Systems", "MLOps", "Cloud Architecture"].map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary-100 dark:bg-primary-800 rounded-full">
            <Coffee className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-300" />
            <span className="text-primary-700 dark:text-primary-300 text-sm">
              Fun fact: Runner-up in a GenAI hackathon for a music recommendation app using LLM + RAG!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}