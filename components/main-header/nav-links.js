"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classes from './nav-links.module.css';

export default function NavLinks() {

    const navlist = [
        { 'name': 'Browse Meals', 'link': '/meals' },
        { 'name': 'Foodie Community', 'link': '/community' },
    ]
    const path = usePathname()
    return (
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                {navlist.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                href={item.link}
                                className={path.startsWith(item.link) ? classes.active : undefined}
                            >
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}