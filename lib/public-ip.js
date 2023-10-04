const axios = require("axios");

async function fetchPublicIPAddress() {
  try {
    const response = await axios.get("https://ipv4.icanhazip.com/");

    // Check if the response status is OK (200)
    if (response.status === 200) {
      const ipAddress = response.data.trim(); // Remove leading/trailing whitespace
      return ipAddress;
    } else {
      return false;
    }
  } catch (error) {
    return undefined;
  }
}

module.exports = fetchPublicIPAddress;
