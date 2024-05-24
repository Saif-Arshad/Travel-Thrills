'use client';


import './Header.scss';
import { useEffect, useRef } from 'react';

const Header = () => {
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const items = itemsRef.current;
    const indicator = indicatorRef.current;

    const handleIndicator = (el: HTMLAnchorElement) => {
      items.forEach((item) => {
        if (item) {
          item.classList.remove('is-active');
          item.removeAttribute('style');
        }
      });

      if (indicator) {
        indicator.style.width = `${el.offsetWidth}px`;
        indicator.style.left = `${el.offsetLeft}px`;
        indicator.style.backgroundColor = el.getAttribute('active-color') || '';
      }

      el.classList.add('is-active');
      el.style.color = el.getAttribute('active-color') || '';
    };

    const handleClick = (e: Event) => handleIndicator(e.target as HTMLAnchorElement);

    items.forEach((item) => {
      if (item) {
        item.addEventListener('click', handleClick);
        if (item.classList.contains('is-active')) {
          handleIndicator(item);
        }
      }
    });

    // Cleanup event listeners on unmount
    return () => {
      items.forEach((item) => {
        if (item) {
          item.removeEventListener('click', handleClick);
        }
      });
    };
  }, []);

  return (
    <nav className="nav">
      <a href="#" className="nav-item is-active" active-color="orange" ref={(el) => { itemsRef.current[0] = el; }}>
        Home
      </a>
      <a href="#" className="nav-item" active-color="green" ref={(el) => { itemsRef.current[1] = el; }}>
        About
      </a>
      <a href="#" className="nav-item" active-color="blue" ref={(el) => { itemsRef.current[2] = el; }}>
        Testimonials
      </a>
      <a href="#" className="nav-item" active-color="red" ref={(el) => { itemsRef.current[3] = el; }}>
        Blog
      </a>
      <a href="#" className="nav-item" active-color="rebeccapurple" ref={(el) => { itemsRef.current[4] = el; }}>
        Contact
      </a>
      <span className="nav-indicator" ref={indicatorRef}></span>
    </nav>
  );
};

export default Header;