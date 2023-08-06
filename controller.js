const axios = require("axios");

const scan = async (req, res) => {
  const url = req.query.url;
  console.log(url, process.env.API_KEY);
  const encodedParams = new URLSearchParams();
  encodedParams.set("url", url);
  const options = {
    method: "POST",
    url: "https://www.virustotal.com/api/v3/urls",
    headers: {
      accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
      "x-apikey": process.env.API_KEY,
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const getReport = async (req, res) => {
  const id = req.params.id;
  const options = {
    method: "GET",
    url: `https://www.virustotal.com/api/v3/analyses/${id}`,
    headers: {
      accept: "application/json",
      "x-apikey": process.env.API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = { scan, getReport };
