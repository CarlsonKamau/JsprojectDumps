import React from 'react' ;
import {render} from 'react-dom';


let bookList = [
    {"title" : "When the sun Shines ", "author":"James brown", "pages": 238},
    {"title" : " The River Between ", "author":"Ngugi wa Thiongo", "pages": 400},
    {"title" : "Damu Nyeusi ", "author":"Kitile ", "pages": 300},

]
const Book = ({title, author , pages}) => {
    return (
        <section>
            <h1>{title}</h1>
            <p>Author is {author}</p>
            <p>Pages: {pages}</p>

        </section>

    )
}

const Library = ({books}) => {
    return (
        <div>
            {books.map(
               books => <Book title = {books.title} author ={books.author} pages ={books.pages}/>
            )}
           
        </div>
    )
}



    render(
        <Library books ={bookList}/>,
        document.getElementById ('root')
    )


