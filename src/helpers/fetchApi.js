const fetchApi = async (url, content, callback) => {
  const response = await fetch(url, content)
  const json = await response.json()
  response.json = json
  if (callback) {
    callback(json)
  }
  return response
}

module.exports = fetchApi
