import { FaFacebook, FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import SectionTitle from './SectionTitle'
import Image from 'next/image';


function Contact() {

    return (
        <div className='px-42'>
            <SectionTitle title="Contact Me" />

            {/* <div className='w-1/2 '>
                    <Image alt='cv' src={'/cv.png'} width={1200} height={900} className='w-3/4 border-5 rounded-xl border-brand'></Image>
                </div> */}
            <div className='text-3xl font-semibold flex justify-between items-center'>
                <div className='flex gap-5 items-center '>
                    <a className='rounded-full p-3' style={{ background: 'linear-gradient(161deg, #1f1238 0%, #8750F7 100%)' }}>
                        <FaPhoneAlt className='' />
                    </a>
                    <h2>+201278113299</h2>
                </div>
                <div className='flex gap-5 items-center '>
                    <a className='rounded-full p-3' style={{ background: 'linear-gradient(161deg, #1f1238 0%, #8750F7 100%)' }}>
                        <FaEnvelope />
                    </a>
                    <h2>test11.test@gmail.com</h2>
                </div>
                <div className='flex gap-5 items-center '>
                    <a className='rounded-full p-3' style={{ background: 'linear-gradient(161deg, #1f1238 0%, #8750F7 100%)' }}>
                        <FaFacebook className='' />
                    </a>
                    <h2>Facebook</h2>
                </div>
                <div className='flex gap-5 items-center'>
                    <a className='rounded-full p-3' style={{ background: 'linear-gradient(161deg, #1f1238 0%, #8750F7 100%)' }}>
                        <FaLinkedin />
                    </a>
                    <h2>Linkedin</h2>
                </div>
                <div className='flex gap-5 items-center'>
                    <a className='rounded-full p-3' style={{ background: 'linear-gradient(161deg, #1f1238 0%, #8750F7 100%)' }}>
                        <FaGithub />
                    </a>
                    <h2>Github</h2>

                </div>

            </div>
        </div>
    )
}

export default Contact;