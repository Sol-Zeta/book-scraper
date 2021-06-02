// Inicializo la base de datos
require('../configs/db');
// Importo la información que quiero insertar en mi base de datos
const books = require('../seeds/data.json');
// Importo el modelo de Mongoose que me permite interactuar con mi colección Books
const BooksModel = require('../models/Books')

// Esta función formatea un campo de los datos recogidos del scraping según lo que deseo
const formatBooks = async () => {
    let formattedBooks = []
    for(category in books){
        console.log(category)
        formattedBooks[category] = await books[category].forEach((book) => {
            formattedBooks.push({
                ...book,
                bookCategory: category,
                bookPrice: book.bookPrice.slice(1)
            })
        }) 
    }
    return formattedBooks
}

//console.log("booksFromatted", booksFormatted)
// Esta función borra los datos antiguos de mi colección y añade los nuevos formateados
const booksInsertions = async() => {
    await BooksModel.deleteMany({})
    console.info('Old books removed!')
    
    const formattedBooks = await formatBooks()
    await BooksModel.insertMany(formattedBooks)
    console.info('Books added!')
}


// De este modo declaro una función autoejecutable que llama a booksInsertions

(async () => {
  await booksInsertions();
  process.exit(0);
})()

// Inicializo la ejecición de este fichero
//main();