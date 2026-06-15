import app from './src/app.js'
import {DBConnetion} from './src/config/db.js'

DBConnetion()
app.listen(3000,()=>{
    console.log("Server is Running on port 3000")
})