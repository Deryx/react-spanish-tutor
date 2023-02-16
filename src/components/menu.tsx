import React from 'react';
import Link from '../../node_modules/next/link';

function Menu( props: any ) {

    return (
        <ul>
            { props.pages.map( ( page, index ) => 
                    <li key={ index }>
                        <Link href={ page.url } scroll={false}>
                            <a>{ page.title }</a>
                        </Link>
                    </li>
            )} 
        </ul>
)
}

export default Menu;