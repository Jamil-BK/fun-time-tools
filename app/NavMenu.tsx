// app/NavMenu.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavMenu = () => {
  const pathname = usePathname();

  // Buttons to show in the navbar
  const buttons = [
    { href: '/', label: 'Home', color: 'orange' },
    { href: '/motivate', label: 'Motivation', color: 'red' },
    { href: '/togglebox', label: 'Tip Box', color: 'skyblue' },
    { href: '/coffee', label: 'Coffee', color: 'limegreen' },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {buttons.map((btn) => (
        <Link key={btn.href} href={btn.href}>
          <button
            style={{
              backgroundColor: pathname === btn.href ? 'white' : btn.color,
              color: pathname === btn.href ? btn.color : 'black',
              fontWeight: 'bold',
              fontSize: '16px',
              padding: '10px 18px',
              margin: '10px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              transition: '0.3s',
            }}
          >
            {btn.label}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
