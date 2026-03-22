const express = require('express');
const app = express();

// 테스트용 (은행 대신)
app.get('/balance', (req, res) => {
  res.json({
    account: "123-456",
    balance: 500000
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`서버 실행중 포트: ${PORT}`);
});