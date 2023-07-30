import express from 'express';
import router from './router/router.js';
const app=express();
app.use(express.json());
const port=8000;
app.get('/',(req,res)=>{
    res.send('hello')
}) 
app.use('/api',router)
app.listen(port,()=>console.log(`server connected to https://localhost:${port}`));

