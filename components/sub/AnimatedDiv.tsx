import { slideInFromBottom } from '@/lib/motion';
import { motion } from 'framer-motion';

type AnimatedDivProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  const AnimatedDiv = ({ children, className }: AnimatedDivProps) => {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromBottom}
        className={className}
      >
        {children}
      </motion.div>
    );
  };
  
  export default AnimatedDiv;