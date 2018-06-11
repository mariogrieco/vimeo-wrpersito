import fetch from 'isomorphic-fetch'

class vimeoWrapApi {
  constructor(props) {    
  }

  // whatever, shit that's my token XD
  getVideoByQueryString (q = 'dones', access_token = '9aeb2120c4e558780f7d1eca7d6f4887') {
    return fetch(`https://api.vimeo.com/videos?query=${q}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    })
  }
}

let instanceClient = null

if (!instanceClient) {
  instanceClient = new vimeoWrapApi()
}

export default instanceClient
