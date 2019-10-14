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

class Library extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            open: false
        }
        this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
        
    }

    //you can change this to make more sense if you want to use 
    // previous state
    // what to use ?
    //         toggleOpenClosed(){
    //              this.setState(prevState =>({
    //          open: !prevState.open
    //         }))
    //  }
    

    toggleOpenClosed(){
        this.setState({
            open: !this.state.open
        })
    }
    
    render(){
        
        const {books} = this.props
        return (
            <div>
                <h1>The library is {this.state.open ? 'open': 'closed'}</h1>
                <button onClick = {this.toggleOpenClosed}>Change</button>
                {books.map(
                   (books, i) => 
                   <Book 
                   key = {i}
                   title = {books.title} 
                   author ={books.author} 
                   pages ={books.pages}/>
                )}

               
            </div>
        )

    }
   
}



    render(
        <Library books ={bookList}/>,
        document.getElementById ('root')
    )


