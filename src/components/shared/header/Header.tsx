'use client';


import './Header.scss';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
const Header = () => {
  const pathname = usePathname();
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const items = itemsRef.current;
    const indicator = indicatorRef.current;

    const handleIndicator = (el: HTMLAnchorElement) => {
      items.forEach((item) => {
        if (item !== el) {
          item.classList.remove('is-active');
          item.removeAttribute('style');
        }
      });

      if (indicator) {
        const rect = el.getBoundingClientRect();
        const navRect = el.parentElement?.getBoundingClientRect();

        if (navRect) {
          indicator.style.width = `${rect.width}px`;
          indicator.style.left = `${rect.left - navRect.left + rect.width / 2}px`;
          indicator.style.backgroundColor = el.getAttribute('active-color') || '';
          indicator.style.transform = 'translateX(-50%)';
        }
      }

      el.classList.add('is-active');
      el.style.color = el.getAttribute('active-color') || '';
    };

    items.forEach((item) => {
      if (item) {
        const href = item.getAttribute('href') || '';
        if (pathname.includes(href)) {
          handleIndicator(item);
        }
      }
    });

    // Cleanup event listeners on unmount
    return () => {
      items.forEach((item) => {
        if (item) {
          item.removeEventListener('click', () => handleIndicator(item));
        }
      });
    };
  }, [pathname]);

  return (
    <nav className="nav">
      <Link href="/" className="nav-item" active-color="orange" ref={(el) => { if(el) itemsRef.current[0] = el }}>
        Home
      </Link>
      <Link href="/about-us" className="nav-item" active-color="green" ref={(el) => { if(el) itemsRef.current[1] = el }}>
        About
      </Link>
      <Link href="/testimonials" className="nav-item" active-color="blue" ref={(el) => { if(el) itemsRef.current[2] = el }}>
        Testimonials
      </Link>
      <Link href="/blog" className="nav-item" active-color="red" ref={(el) => { if(el) itemsRef.current[3] = el }}>
        Blog
      </Link>
      <Link href="/contact" className="nav-item" active-color="rebeccapurple" ref={(el) => { if(el) itemsRef.current[4] = el }}>
        Contact
      </Link>
      <span className="nav-indicator" ref={indicatorRef}></span>
    </nav>
  );
};

export default Header;