import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Search from '../search'

const App = () => (
  <div>
    <header>
      <Link to="/">About</Link>
      <Link to="/search">Search</Link>
    </header>

    <main>
      <Route exact path="/" component={About} />
      <Route path="/search" component={Search} />
    </main>
  </div>
)

export default App
