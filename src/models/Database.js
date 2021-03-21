const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("crud_rest_api", "dev", "010010101", {
    logging: false,
    dialect: "mysql",
    host: "localhost"
})

sequelize.authenticate()
    .then(() => {
        console.log("[+] Database connected")
    })
    .catch(err => {
        console.log("[!] Could no connect with Database")
        console.log("Reason: " + err.original.sqlMessage)
    })

module.exports = sequelize