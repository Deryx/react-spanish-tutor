import React from 'react';
import Link from 'next/link';
import Menu from '../components/menu.tsx';

function SiteMenu() {
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

    return (
        <nav>
            <ul id="menu">
                <li>
                    <Link href="/">
                        <a  id="button" onClick="">
                            <div></div>
                            <div></div>
                            <div></div>
                        </a>
                    </Link>
                    <ul id="subMenu">
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