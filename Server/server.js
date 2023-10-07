const mongoose = require('mongoose');
const app = require('./app');

const PORT = 5000;


mongoose.connect('mongodb+srv://Huncho:password%40123@cluster0.pvflp1h.mongodb.net/taskList?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to Mongo DB');
    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}`);
    })
}).catch((error) => {
    console.log(error);
})