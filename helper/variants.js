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
                duration: 1,
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
            y: 100,
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
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
            }
        }
    }
}