const { findByPk } = require("../models/User");
const User = require("../models/User");

module.exports = {
    create: async (req, res) => {   
        var { name, phone, email, password } = req.body;     

        if(name && phone && email && password){
            try{
                const [user, created] = await User.findOrCreate({ where: {email}, defaults: {name, phone, email, password}})
                if(created){
                    return res.json({success: true, message:"User created"});
                } else{
                    return res.json({success: false, message:"Email already exists"});
                }
            } catch(err) {
                console.log(err.errors)          
                return res.status(500).json({success: false, message: "Could not create user"});  
            }

        } else{
            return res.status(400).json({success: false, message:"invalid params"});
        }
        
    },
    fetchOne: (req, res) => {

    },
    fetchAll: (req, res) => {
        
    },
    update: (req, res) => {

    },
    delete: async (req, res) => {
        var id = req.params.id;

        if(id && isNaN(id) == false) {
            try{
                var userExists = await User.findByPk(id)
                if(userExists === null){
                    return res.status(404).json({success: false, message: "Could find user"});
                }
                    
                var deleteUser = await User.destroy({ where: {id}})
                return res.status(200).json({success: true, message: "User deleted"});

            } catch(err){
                console.log(err)          
                return res.status(500).json({success: false, message: "Could not delete user"});
            }
        } else{
            return res.status(400).json({success: false, message:"invalid params"});
        }
    }
}