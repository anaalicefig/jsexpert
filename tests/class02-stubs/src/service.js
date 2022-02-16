const https = require('https')

class Service {
  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      https.get(url, response => {
        response.on('data', data => resolve(JSON.parse(data)))
        response.on('error', reject)
      })
    })
  }

  async getPlanets(url) {
    const results = await this.makeRequest(url)

    return {
      name: results.name,
      surfaceWater: results.surface_water,
      appearedIn: results.films.length
    }
  }
}

module.exports = Service