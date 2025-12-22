'use client';
import React, { useEffect, useRef } from 'react'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import sections from '../_data/sections.json'

function Hero() {
    const vantaRef = useRef(null)
    const vantaEffect = useRef(null)

    useEffect(() => {
        if (!vantaEffect.current && vantaRef.current) {
            // Dynamically import VANTA and THREE
            import('vanta/dist/vanta.globe.min')
                .then((VANTA) => {
                    import('three').then((THREE) => {
                        vantaEffect.current = VANTA.default({
                            el: vantaRef.current,
                            THREE: THREE,
                            mouseControls: true,
                            touchControls: true,
                            gyroControls: false,
                            minHeight: 200.00,
                            minWidth: 200.00,
                            scale: 1.00,
                            scaleMobile: 1.00,
                            color: 0x8750f7,
                            backgroundColor: 0x0f0715
                        })
                    })
                })
        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy()
            }
        }
    }, [])

    return (
        <div className='flex lg:flex-row flex-col flex-wrap  w-full lg:h-screen h-fit relative border-b-1 border-b-brand'>
            <div className='lg:w-2/3 w-full h-full absolute top-0 left-0' ref={vantaRef}>
            </div>
            <div className='w-full h-full absolute top-0 left-0 z-10 bg-brand-dark opacity-30'>

            </div>
            <div className=' z-20  w-2/3 flex flex-col justify-center px-42'>
                <h1 className='text-6xl font-bold'>{sections.hero.name}</h1>
                <h2 className='text-4xl mt-8 font-semibold text-brand'>{sections.hero.role}</h2>
                <p className=' pr-48 mt-8'>
                    {sections.hero.description}
                </p>
                <div className='flex  items-center gap-6 mt-12'>
                    <a href={sections.hero.cvLink} className=' cursor-pointer inline-block px-6 py-3 border-brand border-2 rounded-2xl text-white text-xl font-bold hover:bg-brand '>
                        Download CV
                    </a>
                    <div className='flex gap-6 text-4xl [&>*]:hover:text-brand [&>*]:cursor-pointer  '>
                        <a>
                            <FaFacebook />
                        </a>
                        <a>
                            <FaGithub />

                        </a>
                        <a>
                            <FaLinkedin />

                        </a>
                    </div>

                </div>
            </div>
            <div className='bg-dark-brand lg:w-1/3 w-full lg:h-full relative border-brand  border-l-2   '>
                <Image fill={true} className='object-cover max-w-full max-h-full ' src="https://i.postimg.cc/TY7WWgx9/fassafafs.png" alt="Professional portrait" />

            </div>
        </div >
    )
}

export default Hero