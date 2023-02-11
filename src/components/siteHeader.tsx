import React from 'react';
import SiteMenu from '../components/siteMenu';
import Link from '../../node_modules/next/link';
import Image from '../../node_modules/next/image';

function Siteheader( props: any ) {

    return (
        <header>
            <h1>
                <Link href='/'>
                    <Image src='/images/home/spanish-tutor-logo.png' width='250' height='50' />
                </Link>
            </h1>
            <SiteMenu />
        </header>
    )
}

export default Siteheader;