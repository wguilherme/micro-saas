import app from './app'
import database from './database'

// force: true only dev
// force: true delete and recreate all tables and data in DB
// database.sync({force: true})
database.sync()



console.log('Database running at 3306')


app.listen(3000);
console.log('Server running at 3000')