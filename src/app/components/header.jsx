import React, { useState } from 'react';
import Img from 'next/image';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='w-[90%] h-20 bg-white mt-6 px-6 py-4 flex justify-between items-center rounded-lg fixed z-10'>
      <div>
        <Img 
          src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721561323/interns/logo-bg-2_1_mclvyk.png" 
          width="174" 
          height="60" 
          alt="Logo"
        />
      </div>
      <div className='hidden md:flex'>
        <ul className='flex gap-6'>
          <li>
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="projectss" smooth={true} duration={500}>
              Media
            </Link>
          </li>
          <li>
            <Link to="developed" smooth={true} duration={500}>
              Cases
            </Link>
          </li>
          <li>
            <Link to="faq" smooth={true} duration={500}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="contacts" smooth={true} duration={500}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      <div className='hidden md:flex'>
        <ul className='flex gap-8'>
          <li className='flex items-center gap-2'>
            <span>
              <Img 
                src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721635463/interns/smartphone_outline_24_awsori.png" 
                width="20" 
                height="20" 
                alt="Phone"
              />
            </span>
            <span className='text-sm'>+91</span>
            <span className='text-sm'>00000000</span>
          </li>
          <li className='flex gap-2 items-center'>
            <span>
              <Img 
                src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1721635505/interns/mail_outline_24_itzh3v.png" 
                width="20" 
                height="20" 
                alt="Email"
              />
            </span>
            <span className='text-sm'>demo@gmail.com</span>
          </li>
        </ul>
      </div>
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu}>
          {menuOpen ? (<Cross1Icon />) : (<HamburgerMenuIcon />)}
        </button>
      </div>

      {menuOpen && (
        <div className='absolute top-20 left-0 w-full bg-white shadow-lg md:hidden'>
          <ul className='flex flex-col p-4'>
            <li className='py-2'>
              <Link to="services" smooth={true} duration={500} onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li className='py-2'>
              <Link to="media" smooth={true} duration={500} onClick={toggleMenu}>
                Media
              </Link>
            </li>
            <li className='py-2'>
              <Link to="cases" smooth={true} duration={500} onClick={toggleMenu}>
                Cases
              </Link>
            </li>
            <li className='py-2'>
              <Link to="faq" smooth={true} duration={500} onClick={toggleMenu}>
                FAQ
              </Link>
            </li>
            <li className='py-2'>
              <Link to="contacts" smooth={true} duration={500} onClick={toggleMenu}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
