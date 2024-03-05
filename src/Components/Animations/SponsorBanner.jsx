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
            stiffness: 250
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
    

    // animate();
    return ( 
        <div className="bg-transparent w-screen h-screen flex justify-center items-center text-white">
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
                        className='bg-gradient-to-tl relative from-green-500 to-green-700 w-2/3 h-3/5 text-center rounded-3xl flex-col shadow-2xl'
                    >
                        <motion.div 
                            className='absolute top-32 right-36'
                            animate={{x:100}}
                            transition={{ ease: "easeIn", duration: 1 }}
                        >
                            <h1 className='text-gray-100 text-8xl pt-3 w-full drop-shadow-[0_10px_5px_rgba(0,0,0,0.6)]'>
                                Like what you see?
                            </h1>
                            <h2 className='text-gray-100 text-4xl pt-8 w-full drop-shadow-[0_10px_5px_rgba(0,0,0,0.4)]'>
                                Use '!bgn' in chat to join our discord
                            </h2>
                            <h2 className='text-gray-100 text-4xl pt-8 w-full drop-shadow-[0_10px_5px_rgba(0,0,0,0.4)]'>
                                or try '!clipit' to capture clips of your favorite moments!
                            </h2>
                        </motion.div>
                        <motion.div
                            className='w-56 absolute left-2 top-36'
                            animate={{x:100}}
                            transition={{ ease: "easeIn", duration: 1 }}
                        >
                            <TreeSVG />
                        </motion.div>
                        
                        <motion.h4 
                            className='absolute bottom-10 right-36 text-xl'
                            animate={{x:100}}
                            transition={{ ease: "easeIn", duration: 2 }}
                        >
                            Sponsored by Branched Gaming Network
                        </motion.h4>
                    </motion.div>
                    
                }
            </AnimatePresence>
        </div>
     );
}
 
export default SponsorBanner;