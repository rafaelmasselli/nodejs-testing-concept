const https = require("https");

class Service {
  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        res.on("data", (data) => resolve(JSON.parse(data)));
        res.on("error", reject);
      });
    });
  }
  async getPlanets(url) {
    const result = await this.makeRequest(url);
    return {
      name: result.name,
      surface_water: result.surface_water,
    };
  }
}

module.exports = Service;
