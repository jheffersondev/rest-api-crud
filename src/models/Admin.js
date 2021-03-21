const { DataTypes } = require("sequelize");
const sequelize = require("./Database")

const Admin = sequelize.define("Admin", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Admin.sync()
    .then(() => {
        console.log("[+] Admin table is now synced")
    })
    .catch(err => {
        console.log("[!] Could not sync admin table")
        console.log("Reason: " + err.message)
    })

module.exports = Admin