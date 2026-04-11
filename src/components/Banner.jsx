import { FaAppStore } from 'react-icons/fa';
import bannerImg from '@/assets/images/hero.png'
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import Image from 'next/image';

const Banner = () => {
    return ( 
        <div className="container mx-auto flex flex-col items-center gap-4 mt-10">
            <h1 className="font-bold text-6xl text-center">We Build <br />
            <span className="text-purple-500">Productive</span> Apps
            </h1>
            <p className="text-[20px] text-[#627382] w-[60%] text-center">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex items-center gap-3'>
                <button className='btn'>
                    <IoLogoGooglePlaystore></IoLogoGooglePlaystore> Google Play
                    </button>
                <button className='btn'>
                    <FaAppStore></FaAppStore> App Store
                </button>
            </div>
            <Image src={bannerImg}
            alt="hero section image" />
        </div>
     );
}
 
export default Banner;