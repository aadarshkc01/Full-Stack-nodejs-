const { books } = require("../database/connection")

exports.fetchBooks = async function(req,res){
    // logic to fetch books from database
    const datas = await books.findAll()
    res.json({
        message : "books fetched successfully",
        datas
    })
}

exports.addBook = async function(req,res){
    // logic to add book goes here...

    const {bookName,bookPrice,bookAuthor,bookGenre} = req.body
    // check if all data aako xa vane only proceed, else not proceed throw error in response

    await books.create({
        bookName : bookName,
        price : bookPrice,
        bookAuthor,
        bookGenre,
        // columnName : value
    })

    res.json({
        message : "Book added successfully"
    })
}

exports.deleteBook = async function(req,res){
    // logic to delete book
    const id = req.params.id
    await books.destroy({
        where :{
            id
        }
    })

    res.json({
        message : "Book deleted successfully"
    })
}

exports.editBook = async function(req,res){
    // logic to update book
    //first ma kun id ko update garni ho
    const id = req.params.id
    //kk update garni tw.....
    const{bookName,price,bookAuthor,bookGenre} = req.body
    await books.update({bookName : bookName, price: price, bookAuthor : bookAuthor, bookGenre: bookGenre},{
        where : {
            id
        }
    })

    res.json({
        message : "Book updated successfully"
    })
}

exports.singleFetchBook = async function (req,res){
     //first capture what id is he/she sending
     const id = req.params.id
     const datas = await books.findByPk(id) //always returns object

    //  const datass = await books.findAll({
    //     where : {
    //         id :id
    //     }
    //  }) //always returns array

     res.json({
        message : "Single Book fetched successefully",
        datas
     })
}
// module.exports = {fetchBooks,addBook,deleteBook,editBook} asari pani milxa hai 