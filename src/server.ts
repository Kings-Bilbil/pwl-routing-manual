import * as http from 'http';
const PORT = 3000;
const users = [
  { id: 1, name: "Nabil" },
  { id: 2, name: "Fauzan" }
];

const products = [
  { id: 1, name: "HP" },
  { id: 2, name: "Case" }
];

const server = http.createServer((req, res) => {
  const startTime = Date.now(); // mulai hitung waktu
  const url = req.url || '/';
  const method = req.method || 'GET';
  console.log(`[${new Date().toLocaleTimeString()}] ${method} ${url}`);

  const sendJSON = (statusCode, data) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
      
    const endTime = Date.now();
    console.log(`⏱ Waktu eksekusi: ${endTime - startTime} ms\n`);
  };

  if (url === "/" && method === "GET") {
    return sendJSON(200, { message: "Selamat datang di halaman Home!" });
  }

  if (url === "/about" && method === "GET") {
    return sendJSON(200, { message: "Halaman About" });
  }

  if (url === "/products" && method === "GET") {
    return sendJSON(200, products);
  }

  if (url === "/products" && method === "POST") {
    return sendJSON(201, { message: "Produk berhasil dibuat (simulasi)" });
  }

  if (url.startsWith("/users/") && method === "GET") {
    const parts = url.split("/");
    const id = parseInt(parts[2]);

    const user = users.find(u => u.id === id);

    if (user) {
      return sendJSON(200, user);
    } else {
      return sendJSON(404, { message: "User tidak ditemukan" });
    }
  }

  if (url === "/users" && method === "POST") {
    return sendJSON(201, { message: "User berhasil dibuat (simulasi)" });
  }

  return sendJSON(404, { message: "Route tidak ditemukan" });

});

server.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
