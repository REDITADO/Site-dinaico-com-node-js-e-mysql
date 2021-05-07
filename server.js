const connection = require('./db')
const express = require('express')
const path = require('path')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
app.set("views", path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(express.json())



app.get('/',(req,res)=>{
    connection.query('select*from Noticias', function(err,results,field){
        if(err){
            console.log(err)
    
        }
        console.log(results[0].texto)
        res.render('views/index.html', {content:results[0].texto, titulo:results[0].title})
     })
    
})
app.post('/3',async(req,res)=>{
    await connection.query('select*from Noticias', async function (err,results,field){
        if(err){
            console.log(err)
    
        }
      
        
       await res.json(results)
       
     })
})

app.post('/pesquisa',(req,res)=>{
  
   if(req.body.search){
   connection.query('select*from Noticias where title=?', [req.body.search], function(err,result,field){
    if(err){
        console.log(err)
    }
    try{
    res.render('views/noticias.html',{ content:result})
    console.log(result)
    }catch(e){
        
        res.redirect('/')
    }
   })}else{
       res.redirect('/')
   }
})
app.listen(5050)