//npm init,npm install express,below structure

const express = require('express')       //express node
const app = express()
app.use(express.json())


app.get('/resume', (request, response) => {        //get=access the data from server
  const resume={
    'name':'Swathi',
    'bio':"Aspiraing Frontend Engineer"
  }
  response.json(resume)
})

app.get('/bio', (request, response) => {    
  const bio={
    'DOB':'15-05-2005',
    'Place':'Kundapura'

  }
   
  response.json(bio)
  })
app.get('/skill', (request, response) => {    

  const skill={
    '1':'Leadership',
    '2':'Problem solver'

  }

 
  response.json(skill)
})

app.get('/users/:userid',(request,response)=>{  
  const userId=request.params.userid
  console.log(userId)
  response.send(200)
})

//http://localhost:3000/login?emailId=swathi@gmail.com&password=123
/*app.get('/login',(request,response)=>{
  const email=request.query.emailId;
  const password= request.query.password;
  console.log(email)
  console.log(password)
    response.send(200)



})*/

//post

app.post('/login',(request,response)=>{
  const email=request.body.email;
  const password= request.body.password;
  console.log(email)
  console.log(password)
    response.send(200)


})

app.get('/movies',(request,response)=>{
  const name=request.query.Moviename;
  const director= request.query.directorname;
  const producer= request.query.producername;


  console.log(name)
  console.log(director)
    console.log(producer)

  response.send(200)


})




app.listen(3000,()=>{
  console.log('I have started')
})

//file>new>http
//post>body>raw>json