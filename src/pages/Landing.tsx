import { motion } from "framer-motion";
import { Lock, FileEdit } from "lucide-react";
import FeatureCard from "../components/FeatureCard";

const Landing = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {},
    viewport: { once: true },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-lg font-semibold">Job Atlas®</div>
          <button className="text-sm hover:text-gray-300 transition-colors">
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
              Track Every Opportunity.
              <br />
              <span className="text-gray-500">
                Clarity and confidence in your job search.
              </span>
            </h1>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-[16/9] bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden mb-8 border border-gray-800"
          >
            {/* Gradient overlay for glassy effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-transparent to-black/50 z-10 pointer-events-none" />

            {/* Screenshot Image */}
            <img
              src="/src/assets/screen.png"
              alt="Job Atlas Dashboard"
              className="w-full h-full object-contain"
            />

            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent z-20 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Job tracking made simple */}
            <FeatureCard
              title="Job tracking made\nsimple."
              description="Easily add, manage,\nand monitor your job\napplications in one place."
              icon={
                <motion.div
                  className="w-32 h-32 bg-gray-800 rounded-2xl"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
              }
            />

            {/* Placeholder for second feature image */}
            <FeatureCard
              variant="placeholder"
              placeholder={
                <div className="w-48 h-48 bg-gray-800 rounded-full" />
              }
            />

            {/* Placeholder for third feature image */}
            <FeatureCard
              variant="placeholder"
              placeholder={
                <div className="w-48 h-32 bg-gray-800 rounded-2xl" />
              }
            />

            {/* Secure CV storage */}
            <FeatureCard
              title="Secure CV storage."
              description="Keep your CVs safe,\norganized, and accessible\nfrom anywhere, anytime."
              icon={<Lock className="w-24 h-24 text-gray-700" />}
            />

            {/* Create CVs from scratch */}
            <FeatureCard
              title="Create CVs from\nscratch."
              description="Build polished CVs within\nJob Atlas in seconds—\nno external tools needed."
              icon={<FileEdit className="w-24 h-24 text-gray-700" />}
            />

            {/* Placeholder for last feature image */}
            <FeatureCard
              variant="placeholder"
              placeholder={
                <div className="w-32 h-48 bg-gray-800 rounded-3xl" />
              }
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Get started with Job Atlas.
            </h2>
            <p className="text-gray-400 text-xl mb-8">
              Start tracking your job
              <br />
              search today for free. Secure,
              <br />
              simple, modern.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Sign Up Free
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="text-2xl font-bold">Job Atlas®</div>
            <div className="grid grid-cols-2 md:flex gap-x-8 gap-y-4 md:gap-12 text-sm text-gray-400">
              <div className="space-y-2">
                <div className="font-semibold text-white mb-3">Features</div>
                <div className="hover:text-white transition-colors cursor-pointer">
                  Dashboard
                </div>
                <div className="hover:text-white transition-colors cursor-pointer">
                  Notifications
                </div>
                <div className="hover:text-white transition-colors cursor-pointer">
                  Filters
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-white mb-3">Support</div>
                <div className="hover:text-white transition-colors cursor-pointer">
                  Help Center
                </div>
                <div className="hover:text-white transition-colors cursor-pointer">
                  Connect
                </div>
                <div className="hover:text-white transition-colors cursor-pointer">
                  Docs
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
