import './css/content.css'
import React from 'react'
import './css/content.css'
import {Switch, Route} from 'react-router-dom'

import About from './../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import Notfound from '../../views/examples/Notfound'

const Content = (props) =>(
    <main className='Content'>
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/param/:id">
                <Param/>
            </Route>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="*">
                <Notfound/>
            </Route>
        </Switch>
    </main>
)

export default Content