const express = require('express')
const app = express()
const port = 5000;
const {connect} = require('./helper/connectionDB')
const userRoute = require('./routes/userRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRoute)

app.listen(port, async () => {
    console.log('Server Run')

    try {
        await connect.authenticate();
        console.log('Berhasil');
    } catch (e) {
        console.log('gagal', e);
    }
})