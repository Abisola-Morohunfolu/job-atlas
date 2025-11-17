import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  placeholder?: ReactNode;
  variant?: 'text' | 'placeholder';
}

const FeatureCard = ({ title, description, icon, placeholder, variant = 'text' }: FeatureCardProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  if (variant === 'placeholder') {
    return (
      <motion.div
        variants={fadeInUp}
        className="bg-gradient-to-br from-gray-900 to-black rounded-3xl aspect-square border border-gray-800 relative overflow-hidden hover:border-gray-700 transition-all duration-500"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {placeholder}
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-gray-800 relative overflow-hidden group hover:border-gray-700 transition-all duration-500"
    >
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          {title?.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          {description?.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < description.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
      {icon && (
        <motion.div
          className="absolute right-8 bottom-8"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
      )}
    </motion.div>
  );
};

export default FeatureCard;
