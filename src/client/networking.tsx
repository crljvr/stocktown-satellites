const root = 'http://localhost:3000/api'

/* ================================
  Fetch User
================================ */

export const fetchUser = (callback: (data: any) => void) => {
  const path = `${root}/getUser`

  console.log(path)

  fetch(path)
    .then(res => res.json()
      .then(data => {
        callback(data)
      }))
    .catch(error => console.log(error))
}

/* ================================
  Fetch Post
================================ */

export const fetchPost = (shortcode: string, callback: (data: any) => void) => {
  const path = `${root}/getPost?id=${shortcode}`

  console.log(path)

  if (typeof Storage == 'undefined') {
    fetch(path)
      .then(res => res.json()
        .then(data => callback(data)))
  }

  const key = "posts";
  const value = sessionStorage.getItem(key);

  if (value) {
    console.log(`STORAGE: ${key} : GETS FROM STORAGE`)
    callback(JSON.parse(value))
  } else {
    console.log(`STORAGE: ${key} : FETCHED FROM API`)

    fetch(path)
      .then(res => res.json()
        .then(data => {
          console.log(`STORAGE: ${key} : SAVES IN STORAGE`)
          sessionStorage.setItem(key, JSON.stringify(data))

          callback(data)
        }))
  }
}