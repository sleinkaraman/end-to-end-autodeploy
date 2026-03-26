const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: "End-to-End AutoDeploy is Running",
    status: "Success",
    timestamp: new Date().toISOString(),
    environment: "Kubernetes + ArgoCD"
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});