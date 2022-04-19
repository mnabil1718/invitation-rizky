export const coverVariants = {
    bgVariants: {
        exit: {
            y: -1000,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            }

        }
    },
    titleVariants: {
        initial: {
            opacity: 0,
            y: 10,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeOut',
                staggerChildren: 0.2,
            }
        }
    },
    titleChildrenVariants: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: 'easeInOut',
            }
        }
    },
    sentence: {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.08,
            }
        }
    },
    letter: {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    },
    inviteVariants: {
        initial: {
            y: 0,
        },
        animate: {
            y: 0,
            transition: {
                ease: 'easeOut',
                delayChildren: 1.3,
                staggerChildren: 0.01,
            }
        }
    },
    inviteChildrenVariants: {
        initial: {
            opacity: 0,
            y: 10,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeOut',
            }
        }
    },
    buttonVariants: {
        initial: {
            y: 150,
        },
        animate: {
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                delay: 1.5,
            }
        }
    },
    curvedVariants: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 2.2,
                duration: 1.7,
                ease: 'easeOut',
            }
        }
    }
}

export const soundVariants = {
    variants: {
        initial: {
            x: 100,
            rotate: 180,

        },
        animate: {
            x: 0,
            rotate: 0,
            transition: {
                duration: 1,
                type: 'spring',
            }
        }
    },
}

export const showcaseVariants = {
    invitedVariants: {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    },
    invitedChildrenVariants: {
        initial: {
            opacity: 0,
            y: 30,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeOut',
            }
        }
    },
    ornamentRight: {
        initial: {
            opacity: 0,
            x: 30,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 1.2,
                duration: 0.8,
                ease: 'easeOut',
            }
        }
    },
    ornamentLeft: {
        initial: {
            opacity: 0,
            x: -30,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 1.2,
                duration: 0.8,
                ease: 'easeOut',
            }
        }
    },
    fade: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 1,
                duration: 0.5,
                ease: 'easeOut',
            }
        }
    },
    line: {
        initial: {
            width: 0,
        },
        animate: {
            width: 56,
            transition: {
                delay: 1,
                duration: 1,
                ease: 'easeOut',
            }
        }
    }
}

export const ayatVariants = {
    bg: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 2,
                ease: 'easeInOut',
            }
        }
    },
    slideUp: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 1,
                duration: 0.3,
                ease: 'easeOut',
            }
        }
    },
    sentence: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: 'easeOut',
                staggerChildren: 0.005,
            }
        }
    },
    letter: {
        initial: {
            opacity: 0,
            y: 5,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeOut',
            }
        }
    },
    line: {
        initial: {
            width: 0,
        },
        animate: {
            width: '128px',
            transition: {
                delay: 1,
                duration: 0.5,
                ease: 'easeOut',
            }
        }
    },
    countParent: {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.1,
            }
        }
    },
    count: {
        initial: {
            opacity: 0,
            y: 15,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
            }
        }
    },
    buttonVariants: {
        initial: {
            opacity: 0,
            y: 30,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
                delay: 2,
            }
        }
    },
}

export const coupleVariants = {
    ornaments: {
        initial: {
            opacity: 0,
            y: -200
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            }
        },
        exit: {
            opacity: 0,
            y: 200,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            }
        },
    },
    fade: {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1,
                duration: 1,
                ease: 'easeOut',
            }
        },
    },
}

export const eventVariants = {
    parent: {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.2,
            }
        },
    },
    children: {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            }
        }
    },
    childrenLine: {
        initial: {
            width: 0,
        },
        animate: {
            width: 80,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            }
        }
    },
    slideParent: {
        initial: {
            x: 1
        },
        animate: {
            x: 1,
            transition: {
                delayChildren: 0.7,
                staggerChildren: 0.2,
            }
        }
    },
    slideRight: {
        initial: {
            opacity: 0,
            x: -70,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            }
        }
    },
    slideLeft: {
        initial: {
            opacity: 0,
            x: 70,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            }
        }
    },
    sentence: {
        initial: {
            x: 1
        },
        animate: {
            x: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    },
    letter: {
        initial: {
            y: 70,
        },
        animate: {
            y: 0,
            transition: {
                ease: 'easeOut',
            }
        }
    },

}

export const closingVariants = {
    fadeLong: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 2,
                duration: 2,
                ease: 'easeOut',
            }
        }
    },
    parentFade: {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.4,
            }
        }
    },
    fade: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeOut',
            }
        }
    },
    parent: {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.3,
            }
        }
    },
    child: {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            }
        }
    },
    line: {
        initial: {
            width: 0,
        },
        animate: {
            width: 80,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            }
        }
    },
    wiggle: {
        animate: {
            scale: [1, 1.2, 1.2, 1.2, 1.2, 1],
            rotate: [0, 15, -15, 15, -15, 0],
            transition: {
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 2
            }
        }
    },
    wiggle2: {
        animate: {
            scale: [1, 1.2, 1.2, 1.2, 1.2, 1],
            rotate: [0, 15, -15, 15, -15, 0],
            transition: {
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 2.5
            }
        }
    },
    wiggle3: {
        animate: {
            scale: [1, 1.2, 1.2, 1.2, 1.2, 1],
            rotate: [0, 15, -15, 15, -15, 0],
            transition: {
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1.7
            }
        }
    }
}