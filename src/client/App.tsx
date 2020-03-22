import React, { useState, useEffect } from 'react';
import Feed from "./components/Feed";
import { fetchUser } from "./networking"
import NavigationBar from './components/NavigationBar';
import Games from './components/Games';
import Hero from './components/Hero';

const App: React.SFC = () => {
  const [posts, getPosts] = useState([])
  const [user, setUser] = useState({})
  const [medias, setMedias] = useState([])

  useEffect(() => {
    if (!Object.keys(user).length && !posts.length) {
      fetchUser(result => {
        setUser(result.user)
        setMedias(result.medias)
      })
    }
  })

  return (
    <div>
      <NavigationBar />
      <Games />
      <Hero />
    </div>
  )
}

export default App;
