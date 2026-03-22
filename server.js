const express = require('express');
const app = express();

// 🔹 테스트용 계좌 조회 (나중에 은행 API로 교체)
app.get('/balance', (req, res) => {
  res.json({
    account: "123-456",
    balance: 500000
  });
});

// 🔹 OAuth 콜백 (인가코드 받는 용도)
app.get('/callback', (req, res) => {
  const code = req.query.code; // 인가코드

  console.log("인가코드:", code);

  res.send("인증 완료! 이 창은 닫아도 됩니다.");
});

// 🔹 포트 설정 (Render 대응)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`서버 실행중 포트: ${PORT}`);
});
