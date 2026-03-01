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
              YN
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-2">
                Shivanshu Sharma
              </h2>
              <p className="text-primary-500 dark:text-primary-400 flex items-center justify-center md:justify-start mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                Your City, Country
              </p>
              <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                Hi there! I&apos;m a passionate developer and photographer based in [Your City].
                I love building beautiful digital experiences and capturing moments through my lens.
                With a background in [Your Background], I bring a unique perspective to every project I work on.
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
              <h4 className="font-medium text-primary-900 dark:text-white mb-2">Web Development</h4>
              <p className="text-sm text-primary-600 dark:text-primary-300">
                Building modern, responsive web applications using React, Next.js, and other cutting-edge technologies.
              </p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-800 rounded-lg">
              <h4 className="font-medium text-primary-900 dark:text-white mb-2">Photography</h4>
              <p className="text-sm text-primary-600 dark:text-primary-300">
                Capturing landscapes, portraits, and street photography with a focus on natural light and authentic moments.
              </p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-800 rounded-lg">
              <h4 className="font-medium text-primary-900 dark:text-white mb-2">UI/UX Design</h4>
              <p className="text-sm text-primary-600 dark:text-primary-300">
                Creating intuitive and beautiful user interfaces with attention to detail and user experience.
              </p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-800 rounded-lg">
              <h4 className="font-medium text-primary-900 dark:text-white mb-2">Content Creation</h4>
              <p className="text-sm text-primary-600 dark:text-primary-300">
                Writing technical articles, creating tutorials, and sharing knowledge with the community.
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
              <h4 className="font-medium text-primary-900 dark:text-white">Present</h4>
              <p className="text-primary-600 dark:text-primary-300 text-sm">
                Working as a [Your Role] at [Company/Organization], building impactful products and learning every day.
              </p>
            </div>
            <div className="border-l-2 border-primary-300 dark:border-primary-700 pl-4">
              <h4 className="font-medium text-primary-900 dark:text-white">Education</h4>
              <p className="text-primary-600 dark:text-primary-300 text-sm">
                Graduated from [University] with a degree in [Field of Study]. Developed a strong foundation in computer science and design.
              </p>
            </div>
            <div className="border-l-2 border-primary-300 dark:border-primary-700 pl-4">
              <h4 className="font-medium text-primary-900 dark:text-white">Journey</h4>
              <p className="text-primary-600 dark:text-primary-300 text-sm">
                Started coding at [Age/Year] and fell in love with building things. Picked up photography as a creative outlet and haven&apos;t stopped since.
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
            {["Photography", "Travel", "Reading", "Coffee", "Music", "Hiking", "Movies", "Cooking", "Technology", "Design"].map((interest) => (
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
              Fun fact: I&apos;ve visited [Number] countries and counting!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}