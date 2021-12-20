module.exports = {
  backendPort: 3000,
  retryInterval: 1000,
  dbPath: process.env.NODE_ENV == "test" ?  "./backend/data/Abonent.db": "./data/Abonent.db",
  frontendPort: 5000,
  frontendIP: "127.0.0.42",
}