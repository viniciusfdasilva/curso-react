import './css/menu.css'

import React from 'react'
import {Link} from 'react-router-dom'

const Menu = (props) =>(
    <aside className='Menu'>
        <nav>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">SOBRE</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu