const express = require('express')
const app = express()
app.use(express.json());
const port = 8080

var tasks = [{title: "task 0" , description: "task 0 description", completed : true }]

app.get('/tasks', (req, res) => {
  res.send(tasks)
})

app.get('/tasks/:id', (req, res) => {
    res.send( tasks[req.params.id])
})

app.post('/tasks', (req, res) => {
  
  tasks.push({title: req.body.title , description: req.body.description, completed : req.body.completed})
    res.send('task adicionada')
})

app.put('/tasks/:id', (req, res) => {
  tasks[req.params.id] = {title: req.body.title , description: req.body.description, completed : req.body.completed}
    res.send('task modificada')
})

app.delete('/tasks/:id', (req, res) => {

  tasks.splice(req.params.id, 1);
  res.send('task deletada')
})

console.log(`Server Ativo na porta ${port}`);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})