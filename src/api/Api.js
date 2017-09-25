const API_BASE = 'http://localhost:3000'

const DEFAULT_HEADER = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export default class Api {
  constructor(baseUrl) {
    this.baseUrl = `${API_BASE}/${baseUrl}/`
  }

  fetch(path = '', props) {
    return fetch(
      this.baseUrl + path,
      Object.assign(
        {
          headers: DEFAULT_HEADER
        },
        props
      )
    )
      .then(data => data.json())
      .catch(err => {
        console.log(err) // eslint-disable-line
        throw err
      })
  }

  get(path) {
    return this.fetch(path, {
      method: 'get'
    })
  }

  put(path, data) {
    return this.fetch(path, {
      method: 'put',
      body: JSON.stringify(data)
    })
  }

  post(path, data) {
    return this.fetch(path, {
      method: 'post',
      body: JSON.stringify(data)
    })
  }

  remove(path) {
    return this.fetch(path, {
      method: 'delete'
    })
  }
}
