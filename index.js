const app = require('./app');
const main = async() => {
    const port = process.env.PORT || process.argv[2] || 30005
    app.listen(port,()=>console.log(`application is istening on port ${port}`))
}
main();