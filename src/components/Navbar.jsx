'use client'


import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {


    const pathName = usePathname()
    const router = useRouter()

    const links = [
        {
            title: 'Home',
            path: '/home'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        },


    ]

    const handlerRoute = () => {
        router.push('/login')
    }

    return (
        <div className="flex justify-between items-center px-12 py-4  bg-gray-900">
            <h4>NEXT Hero🚁 </h4>
            <div className="space-x-3 ">
                {
                    links.map(link => <Link className={`${pathName === link.path && 'text-gray-500 text-xl'}`} key={link.title} href={link.path}>{link.title}</Link>)
                }
            </div>
            <button onClick={handlerRoute}>Login</button>
        </div>
    );
};

export default Navbar;