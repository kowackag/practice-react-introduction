import React from 'react';
import Menu from './Menu'

const arr = [
    {text: 'strona główna', url: '/'},
    {text: 'www', url: '/www'}
]

const Nav = () => {
    return (
        <nav>
            <Menu items = {arr} />
        </nav>
    )
}

export default Nav;