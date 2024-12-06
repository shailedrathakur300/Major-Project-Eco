'use client'

import { Button } from '@/components/ui/button'
import anime from 'animejs'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Menu, Twitter, Youtube } from 'lucide-react'

const GRID_WIDTH = 15
const GRID_HEIGHT = 12

function AnimatedGrid() {
  const handleCellClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement

    anime({
      targets: '.grid-cell',
      scale: [
        { value: 1, duration: 0 },
        { value: 1.15, duration: 150 },
        { value: 1, duration: 300 },
      ],
      backgroundColor: [
        { value: 'rgba(147, 51, 234, 0)', duration: 0 },
        { value: 'rgba(147, 51, 234, 0.3)', duration: 150 },
        { value: 'rgba(147, 51, 234, 0)', duration: 300 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: parseInt(target.dataset.index || '0'),
        direction: 'normal',
      }),
      easing: 'easeInOutQuad',
    })
  }

  const cells = []
  let index = 0

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      cells.push(
        <div
          key={`${i}-${j}`}
          data-index={index}
          className="grid-cell relative border border-gray-800/50 rounded-lg backdrop-blur-sm transition-transform duration-200 hover:bg-primary/10"
          style={{
            transformOrigin: 'center',
            transform: 'scale(1)',
          }}
        />,
      )
      index++
    }
  }

  return (
    <div
      onClick={handleCellClick}
      style={{
        gridTemplateColumns: `repeat(${GRID_WIDTH}, minmax(0, 1fr))`,
        gap: '1rem',
        padding: '2rem',
      }}
      className="grid w-full h-full absolute inset-0"
    >
      {cells}
    </div>
  )
}

export default function Component() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Grid Background */}
      <AnimatedGrid />

      {/* Floating Social Icons */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          className="absolute left-1/4 top-1/4"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Youtube className="w-16 h-16 text-red-500 drop-shadow-glow-red" />
        </motion.div>

        <motion.div
          className="absolute right-1/4 top-1/4"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <Instagram className="w-16 h-16 text-pink-500 drop-shadow-glow-pink" />
        </motion.div>

        <motion.div
          className="absolute left-1/4 bottom-1/4"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <Twitter className="w-16 h-16 text-cyan-500 drop-shadow-glow-cyan" />
        </motion.div>

        <motion.div
          className="absolute right-1/4 bottom-1/4"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        >
          <Linkedin className="w-16 h-16 text-blue-500 drop-shadow-glow-blue" />
        </motion.div>

        {/* Main Text */}
        <div className="max-w-4xl text-center px-4 z-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-gray-400">Expand the </span>
            <span className="text-white">reach</span>
            <span className="text-gray-400">
              {' '}
              of your brand across various{' '}
            </span>
            <span className="text-white">social media</span>
            <span className="text-gray-400"> platforms.</span>
          </h1>
        </div>
      </div>

      {/* Let's Talk Button */}
      <motion.div
        className="fixed bottom-8 left-8 z-20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary/20 hover:text-primary-foreground transition-colors duration-300"
        >
          Let&#39;s Talk
        </Button>
      </motion.div>

      {/* Menu Button */}
      <motion.div
        className="fixed top-8 right-8 z-20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Custom styles for glowing effects */}
      <style
        jsx
        global
      >{`
        .drop-shadow-glow-red {
          filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.5));
        }
        .drop-shadow-glow-pink {
          filter: drop-shadow(0 0 10px rgba(236, 72, 153, 0.5));
        }
        .drop-shadow-glow-cyan {
          filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.5));
        }
        .drop-shadow-glow-blue {
          filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.5));
        }
      `}</style>
    </div>
  )
}
