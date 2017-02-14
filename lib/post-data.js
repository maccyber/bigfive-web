'use strict'

import axios from 'axios'

module.exports = async (url, data) => {
  const res = await axios.post(url, data)
  return res.data
}
