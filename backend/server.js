const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Habilitar CORS
app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Projeto Sistemas Distribuidos Rodando perfeitamente!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
