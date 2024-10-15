const express = require('express')
const CourseRouter = require('./router/courses.routes.js')
const UsersRouter = require('./router/users.routes.js')
const app = express();



app.use(express.static('public'));

app.use('/api/courses', CourseRouter)
app.use('/api/users', UsersRouter)





app.listen(3000, () => {
    console.log('The server is running in port 3000')
})