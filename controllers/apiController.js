const { generateResponse } = require("../services/apiService");

const handleGetRequest = (req, res) => {
  res.status(200).json({ operation_code: 1 });
};

const handlePostRequest = (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(400).json({ is_success: false, error: "Invalid input" });
  }

  const response = generateResponse(data);
  res.status(200).json(response);
};

module.exports = { handleGetRequest, handlePostRequest };
