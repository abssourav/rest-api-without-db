require('dotenv').config();
const app = require('./app')

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Your server running at http://127.0.0.1:${PORT}`);
})