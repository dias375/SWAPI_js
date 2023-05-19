const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'planets',
  password: 'postgres',
  port: 5432,
})

function getPlanets(request, response) {
    pool.query('SELECT * FROM planets', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
} 


  module.exports = {
    getPlanets
  }