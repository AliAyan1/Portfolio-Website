'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProfileImageAnimatedProps {
  size?: number;
  animation?: 'fade' | 'rotate' | 'scale' | 'glow';
  className?: string;
  style?: React.CSSProperties;
}

export default function ProfileImageAnimated({
  size = 96,
  animation = 'fade',
  className = '',
  style = {},
}: ProfileImageAnimatedProps) {
  // Variants define animation states
  const variants = {
    fade: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    rotate: {
      initial: { opacity: 0, rotate: -90, scale: 0.7 },
      animate: { opacity: 1, rotate: 0, scale: 1 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
    },
    glow: {
      initial: { opacity: 0, boxShadow: '0 0 0px 0px #7f5af0' },
      animate: { opacity: 1, boxShadow: '0 0 24px 6px #7f5af0' },
    },
  };

  const selectedVariants = variants[animation] || variants.fade;

  return (
    <motion.div
      initial={selectedVariants.initial}
      animate={selectedVariants.animate} // Directly passing initial and animate properties
      whileInView={{ opacity: 1 }}  // You can add additional transitions when the element is in view
      transition={{ duration: 0.8 }}
      className={`inline-block ${className}`}
      style={style}
    >
      <Image
        src="/assets/profile.jpg"
        alt="Ali Ayan"
        width={size}
        height={size}
        className="rounded-full border-2 border-blue-500 shadow-lg object-cover bg-black"
        priority
      />
    </motion.div>
  );
}
