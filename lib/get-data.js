'use strict'

import axios from 'axios'

module.exports = async (url) => {
  const res = await axios.get(url)
  return res.data
}
