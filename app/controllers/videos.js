import client from '../client'

const index = async (req, res) =>  {
  try {
    const client_res = await client.getVideoByQueryString().then(r => r.json())

    res.json({ 
      videos: client_res
    })
  }
  catch (err) {
    res.json(err)
  }
}

const getVideoById = async (req, res) => {
  // buscando tatata
  // res.json({
    // video: req.params.di
  // })
}


export default {
  index,
  getVideoById
}