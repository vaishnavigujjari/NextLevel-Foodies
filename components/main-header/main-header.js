import React from 'react'
import LogoImg from '@/assets/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import NavLinks from './nav-links';

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image className={classes.LogoImg} src={LogoImg} alt='a plate with food' priority />
                    NextLevel Food
                </Link>
            </header>
            <NavLinks />
        </>
    )
}
