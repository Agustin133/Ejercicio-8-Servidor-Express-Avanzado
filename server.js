const { json } = require('express');
const expres = require('express');
const app = expres();
app.use(expres.json());

let id = 0;

app.listen(8080, (error) =>{
    try {
        console.log('Server running on port 8080');
    } catch (error) {
        console.log('Error al ejecutar el servidor');
    }
})


let items = [];

app.get('/items', (req,res) => {
    if(items.length == 0){
        res.json('No hay productos cargados');
    }
    res.json(items);
})

app.post('/items', (req,res) => {
    id = id + 1;
    const { title, price, thumbnail} = req.body;
    const item = {
        title,
        price,
        thumbnail,
        id
    }
    items.push(item);
    res.sendStatus(201);
})

app.get('/items/:id', (req,res) => {
    if(items.length == 0){
        res.json('No hay productos cargados');
    }
    const id = req.params.id;
    const item = items.find( item => item.id == id);
    if(!item){
       res.sendStatus(404).send('Producto no encontrado');
    }
    res.json(item);
})


