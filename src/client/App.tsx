import React, { useState, useEffect } from 'react';
import Feed from "./components/Feed";
import { fetchUser } from "./networking"

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
      <Feed medias={medias} />
    </div>
  )
}

export default App;
