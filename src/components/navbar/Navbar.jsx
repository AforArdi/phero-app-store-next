import navImg from '../../assets/images/logo.png'
import { FaGithub } from 'react-icons/fa';
import MyNavLinks from './MyNavLinks';
import Image from 'next/image';

const navItems = [
    {
        path: '/',
        go: 'Home'
    },
    {
        path: '/apps',
        go: 'Apps'
    },
    {
        path: '/installation',
        go: 'Installation'
    }
]

const Navbar = () => {
    return (
        <div className='shadow'>
            <nav className='flex justify-between items-center container mx-auto p-3'>
                <Image src={navImg} alt="Phero app store logo"
                    className='h-10 w-auto'
                />
                <ul className='flex justify-between gap-4'>
                    {
                        navItems.map((item, i)=> {
                            return <MyNavLinks key={i} to={item.path}>{item.go}</MyNavLinks>
                        })
                    }
                </ul>
                <button className='btn bg-purple-500 text-white'>
                    <FaGithub></FaGithub> Contribute
                </button>
            </nav>
        </div>
    );
}

export default Navbar;