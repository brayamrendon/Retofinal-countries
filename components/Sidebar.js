import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/create">
            <a>Crear País</a>
          </Link>
        </li>
        <li>
          <Link href="/manage">
            <a>Gestionar Países</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;