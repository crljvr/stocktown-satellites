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
  fetch(path)
    .then(res => res.json()
      .then(data => {
        callback(data)
      })
    )
}