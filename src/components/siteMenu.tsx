import React, { useRef } from 'react';
import Link from 'next/link';
import Menu from '../components/menu';

function SiteMenu() {
    const menuRef = useRef( null );
    const buttonRef = useRef( null );

    const verbPages = [
        { title: 'input', url: '/verbs/input'},
        { title: 'flashcard', url: '/verbs/flashcard' },
        { title: 'conjugator', url: '/verbs/conjugator' },
        { title: 'slider', url: '/verbs/slider' }
    ];
    const vocabPages = [
        { title: 'input', url: '/vocabulary/input'},
        { title: 'flashcard', url: '/vocabulary/flashcard' },
        { title: 'completion', url: '/vocabulary/completion' },
        { title: 'fill-in', url: '/vocabulary/fill-in' },
        { title: 'quiz', url: '/vocabulary/quiz' },
        { title: 'scramble', url: '/vocabulary/scramble' },
        { title: 'slider', url: '/vocabulary/slider' }
    ];
    let toggle: boolean = false;

    const handleClick = (e) => {
        e.preventDefault();
        toggle = !toggle;
        buttonRef.current.classList.toggle('change')
        if(toggle) {
            menuRef.current.classList.add('open');
            menuRef.current.classList.remove('close');
        } else {
            menuRef.current.classList.remove('open');
            menuRef.current.classList.add('close');
        }
    }

    return (
        <nav>
            <ul id="menu">
                <li>
                    <Link href="/">
                        <a ref={ buttonRef } id="button" onClick={ handleClick }>
                            <div className='bar1'></div>
                            <div className='bar2'></div>
                            <div className='bar3'></div>
                        </a>
                    </Link>
                    <ul ref={ menuRef } id="subMenu" className='close'>
                        <li>
                            <h3>verbs</h3>
                            <Menu pages={ verbPages } />
                        </li>
                        <li>
                            <h3>vocabulary</h3>
                            <Menu pages={ vocabPages } />
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default SiteMenu;