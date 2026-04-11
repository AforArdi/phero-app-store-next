'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLinks = ({to, className, children}) => {
    const pathname = usePathname();
    return (
        <div>
            <Link href={to} className={`${pathname === to ? 'border-b border-purple-500 text-purple-500' : ''}`}>
                {children}
            </Link>
        </div>
    );
}

export default MyNavLinks;