const app = require('express')();
const connectDB = require('./config/db.js')

connectDB();

app.get('/', (req, res) => res.json({msg: 'welcome to the contacts api'}))
const PORT = process.env.PORT || 5000

app.use('/api/users', require('./src/routes/users'))
app.use('/api/contacts', require('./src/routes/contacts'))
app.use('/api/auth', require('./src/routes/auth'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))