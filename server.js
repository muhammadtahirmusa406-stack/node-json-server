const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const details = {
    name: 'Muhammad Tahir Musa',
    role: 'SIWES Student',
    email: 'muhammadtahirmusa406@gmail.com',
    sex: 'Male',
    language: 'Node.js',
    status: 'Ready'
  };

  res.end(JSON.stringify(details, null, 2));
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
