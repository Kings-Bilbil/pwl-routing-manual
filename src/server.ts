import http from 'http';

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    //routing manual
    if (url === '/' && method === 'GET'){
        res.writeHead(200, {"Content-type":"application/json"});
        res.end(JSON.stringify({message:"Selamat datang di halaman Home"}));
    }
    else if(url === '/about' && method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({message: "Halaman About"}));
    }
    else if(url?.startsWith("/users/")&& method === "GET"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "User ID:$(id)"}));
    }
    else{
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "Router tidak ditemukan"}));
    }
});
server.listen(3000, () =>{
    console.log(`🚀 Server berjalan di http://localhost:3000`);
})