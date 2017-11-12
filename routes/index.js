const express = require('express');
const router = express.Router();

const FAKE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2RhbmllbC10YWtldWNoaS5jb20iLCJuYmYiOjE1MTA1MTA5MDUsImV4cCI6MTUxMDUxNDUwNSwiaWF0IjoxNTEwNTEwOTA1LCJqdGkiOiJ0ZXN0X2lkMTIzNDU2In0.Qro7arXvUJJeAuLFb1J7vk0zZvg2ueaJ61EabAeOt8U';

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ ok: true });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username !== 'test' || password !== 'password') {
    return res.status(401).json({ error: 'invalid credentials' });
  }
  res.json({ token: FAKE_TOKEN });
});

router.get('/user_info', (req, res) => {
  console.log(req.headers);
  const token = req.headers.authorization;
  if (token !== FAKE_TOKEN) {
    return res.status(401).json({ error: 'unauthorized' });
  }
  res.json({
    first_name: 'John',
    last_name: 'Tester',
    email: 'john@tester.com'
  });
});

module.exports = router;
