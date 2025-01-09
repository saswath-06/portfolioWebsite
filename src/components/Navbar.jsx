import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary-gradient border-b-[1px] border-[#9895ae]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" 
          className="flex items-center gap-2" 
          onClick={() => {setActive(""); window.scrollTo(0, 0);}}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Saswath &nbsp;
            <span className="sm:block hidden"> Yeshwanth</span>
          </p>
        </Link>
        
        <ul className="list-none hidden sm:flex flex-row gap-7">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`relative px-4 py-2 text-[18px] font-medium cursor-pointer text-secondary hover:text-white ${active === link.title ? "text-white" : ""}`}
              onClick={() => setActive(link.title)}
              style={{
                borderRadius: '12px',
                transition: 'box-shadow 0.3s, background-color 0.3s, transform 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'black';
                e.currentTarget.style.boxShadow = '0 0 15px 4px #6B46C1';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div 
            className={`${!toggle ? 'hidden' : 'flex'} 
            p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`relative text-[16px] font-medium cursor-pointer ${active === link.title ? "text-white" : "text-secondary"}`}
                  onClick={() => {setToggle(!toggle); setActive(link.title);}}
                  style={{
                    borderRadius: '12px',
                    transition: 'box-shadow 0.3s, background-color 0.3s, transform 0.3s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'black';
                    e.currentTarget.style.boxShadow = '0 0 15px 4px #6B46C1';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
