const {Sequelize,DataTypes} = require("sequelize")

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.zqvpuaoycinvjqdmacwj:hellonodejsproject@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated vayo, connected vayo!!")
})
.catch((err)=>{
    console.log("Error vayo" + err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require("./models/book.model.js")(sequelize,DataTypes)
// db.products = require("./models/product.model.js")(sequelize,DataTypes)

sequelize.sync({alter : false}).then(()=>{
    console.log("Migrate vayo hai tw")
})

module.exports = db