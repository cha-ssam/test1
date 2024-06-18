const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());

// 간단한 POST 엔드포인트
app.post('/api/echo', (req, res) => {
  const userInput = req.body.input;
  console.log(`Received input: ${userInput}`);
  res.json({ echo: userInput });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
