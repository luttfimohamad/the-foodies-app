import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logoImages from '../public/images/logo.png';
import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImages} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
          <li>
            <Link href="/meals/share">Share a Meal</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
