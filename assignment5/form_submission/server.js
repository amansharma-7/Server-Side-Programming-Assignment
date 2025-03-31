const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // Parse JSON requests

// Handle form submission
app.post("/submit-form", (req, res) => {
  const { name, email } = req.body; // Extract data from the form
  if (name && email) {
    res.json({
      success: true,
      message: "Form submitted successfully!",
      data: { name, email },
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Please provide both name and email.",
    });
  }
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
