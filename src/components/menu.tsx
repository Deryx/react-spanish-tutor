import React from 'react';
import Link from 'next/link';

function Menu( props: any ) {

    return (
        <ul>
            { props.pages.map( ( page ) => 
                    <li>
                        <Link href={ page.url }>
                            <a>{ page.title }</a>
                        </Link>
                    </li>
            )} 
        </ul>
)
}

export default Menu;