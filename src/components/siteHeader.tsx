import React from 'react';
import SiteMenu from '../components/siteMenu.tsx';
import Link from 'next/link';

function Siteheader( props: any ) {

    return (
        <header>
            <h1>
                <Link href='/'>
                    <a>
                        <div>My</div>
                        <div>SpanishTutor</div>
                    </a>
                </Link>
            </h1>
            <SiteMenu />
        </header>
    )
}

export default Siteheader;