const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Fully Automated Deployment Success",
    status: "Success",
    timestamp: new Date().toISOString(),
    environment: "Kubernetes + ArgoCD"
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});