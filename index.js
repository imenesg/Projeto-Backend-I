const express = require('express')
const app = express()
app.use(express.json());
const port = 8080

var tasks = [{TituloTask: "task 1" , InformativoTask: "task 1 informativo"}]

app.get('/tasks', (req, res) => {
  res.send(tasks)
})

app.get('/tasks/:id', (req, res) => {
    res.send( tasks[req.params.id])
})

app.put('/tasks', (req, res) => {
  tasks.push({TituloTask: req.body.TituloTask, InformativoTask: req.body.InformativoTask})
    res.send('task adicionada')
})

app.put('/tasks/:id', (req, res) => {
  tasks[req.params.id] = {TituloTask: req.body.TituloTask, InformativoTask: req.body.InformativoTask}
    res.send('task modificada')
})

app.delete('/tasks/:id', (req, res) => {
  delete tasks[req.params.id]
  res.send('task deletada')
})


console.log(`Server Ativo na porta ${port}`);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})