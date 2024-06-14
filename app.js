const express = require("express")
const morgan = require("morgan")
const app = express()
const port = 3500
const comidaRouter = require('./routes/comidaRouter')


app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use(morgan('dev'))

app.use('/API',comidaRouter)

app.use((req, res)=> {    
    res.status(404).json({message: 'Ruta no encontarda no encontrado'});
});

app.listen(port,()=>{
    console.log(`aplicacion corriendo en el puerto  ${port}`)
})



