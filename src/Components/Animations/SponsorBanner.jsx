import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import TreeSVG from '../../Images/TreeSVG';

const dropIn = {
    hidden: {
        x: '-100vw',
        opacity: 0
    },
    visible: {
        x: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 50,
            stiffness: 250
        },
    },
    exit: {
        x: '100vw',
        opacity: 0,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 50,
            stiffness: 150
        }
    },
}

const SponsorBanner = () => {
    const [isPresent, setIsPresent] = useState(false);
    let delay;

    const hangTime = 5000;
    const downTime = 10000;

    useEffect(() => {
        animate();
        return () => {
            clearInterval(delay)
            console.log("Clearing Intervals")
        };
    }, [isPresent])
    
    function animate () {
        

        if (isPresent) {
            delay = setInterval(() => {
                setIsPresent(!isPresent)
            }, hangTime)

            setTimeout(() => {
                clearInterval(delay)
            }, hangTime + 1)
        }
        else if(!isPresent) {
            delay = setInterval(() => {
                setIsPresent(!isPresent)
            }, downTime)

            setTimeout(() => {
                clearInterval(delay)
            }, downTime + 1)
        }
    }
    
    return ( 
        <div className="bg-transparent w-screen h-screen flex justify-center items-center text-white overflow-x-hidden">
            <AnimatePresence
                mode='wait'
                initial={false}
            >   
                {
                    isPresent &&
                    
                    <motion.div 
                        id="base"
                        variants={dropIn}
                        initial='hidden'
                        animate='visible'
                        exit="exit"
                        className='bg-gradient-to-tl relative from-green-500/90 to-green-700/90 w-2/3 h-3/5 text-center rounded-3xl flex-col shadow-2xl'
                    >
                        <motion.div 
                            className='absolute top-24 right-8 space-y-12'
                            animate={{x:100}}
                            transition={{ ease: "easeIn", duration: 1 }}
                        >
                            <h1 className='text-gray-100 text-9xl w-full drop-shadow-[0_10px_5px_rgba(0,0,0,0.6)]'>
                                Branch Out!
                            </h1>
                            <h2 className='text-gray-100 text-6xl pt-8 w-full drop-shadow-[0_10px_5px_rgba(0,0,0,0.4)] pr-32'>
                                <span>
                                    Like what you see? Use
                                </span>
                                <span className='text-bgngreen-400 px-2 font-semibold italic'>
                                    '!bgn' 
                                </span>
                                <span>
                                 in chat to join our discord or try  
                                </span>
                                <span className='text-bgngreen-400 px-2 font-semibold italic'>
                                  '!clipit' 
                                </span>
                                <span>
                                    to capture clips of your favorite moments!
                                </span>
                                
                            </h2>
                            {/* <h2 className='text-gray-100 text-6xl pt-8 w-full drop-shadow-[0_10px_5px_rgba(0,0,0,0.4)]'>
                                or try '!clipit' to capture clips of your favorite moments!
                            </h2> */}
                        </motion.div>
                        <motion.div
                            className='w-56 absolute left-0 top-12'
                            animate={{x:100}}
                            transition={{ ease: "easeIn", duration: 1 }}
                        >
                            <TreeSVG />
                        </motion.div>
                        
                        <motion.h4 
                            className='absolute bottom-10 right-36 font-semibold text-gray-800/70 text-3xl p-3'
                            animate={{x:100}}
                            transition={{ ease: "easeIn", duration: 1 }}
                        >
                            Nightingale Stream Series brought to you by Branched Gaming Network
                        </motion.h4>
                    </motion.div>
                    
                }
            </AnimatePresence>
        </div>
     );
}
 
export default SponsorBanner;