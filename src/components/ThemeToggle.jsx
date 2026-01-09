import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative w-10 h-10 rounded-full
                 flex items-center justify-center
                 bg-secondary-100 dark:bg-secondary-800
                 hover:bg-secondary-200 dark:hover:bg-secondary-700
                 transition-colors"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <FiSun className="text-yellow-400" />
        ) : (
          <FiMoon className="text-secondary-700" />
        )}
      </motion.div>
    </button>
  );
}
