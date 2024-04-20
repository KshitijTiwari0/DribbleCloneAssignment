// navbar.client.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavLinks } from '@/constants';
import { getCurrentUser } from '@/lib/sessions';
import AuthProviders from './AuthProviders';
import Button from './Button';
import ProfileMenu from './ProfileMenu';

const Navbar = () => {
 const [session, setSession] = useState(null);

 useEffect(() => {
    const fetchSession = async () => {
      try {
        const userSession = await getCurrentUser();
        setSession(userSession);
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    fetchSession();
 }, []);

 return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image src='/logo.svg' width={116} height={43} alt='logo' />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <li key={link.text}>
              <Link href={link.href}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='flexCenter gap-4'>
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link href='/create-project'>
              <Button title='Share work' />
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
 );
};

export default Navbar;
