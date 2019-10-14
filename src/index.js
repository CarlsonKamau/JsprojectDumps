import React from 'react' ;
import {render} from 'react-dom';


let bookList = [
    {"title" : "When the sun Shines ", "author":"James brown", "pages": 238},
    {"title" : " The River Between ", "author":"Ngugi wa Thiongo", "pages": 400},
    {"title" : "Damu Nyeusi ", "author":"Kitile ", "pages": 300},
    {"title" : "SkyBreaker ", "author":"Jane O ", "pages": 400},
    {"title" : "Lifted  ", "author":"Filly Jay ", "pages": 387},

]
const Book = ({title, author , pages,freeBookmark}) => {
    return (
        <section>
            <h1>{title}</h1>
            <p>Author is {author}</p>
            <p>Pages: {pages}</p>
            <p>free Bookmark Today{freeBookmark ? 'yes!':'no'}</p>

        </section>

    )
}

const Hiring = () =>
         <div>The company is hiring check www.hiringus.com for more</div>

const NotHiring = () =>
         <div>The company is Not hiring check back later for more info</div>


class Library extends React.Component {

    state = {
        open: false,
        freeBookmark: true,
        Hiring: false
    }
    // constructor (props){
    //     super(props)
    //     this.state = {
    //         open: false
    //     }
    //     this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
        
    // }

    //you can change this to make more sense if you want to use 
    // previous state
    // what to use ?
    // toggleOpenClosed() => {
    //     this.setState({
    //         open: !this.state.open
    //     })
    // }
            toggleOpenClosed = () => {
                 this.setState(prevState =>({
             open: !prevState.open
            }))
     }
    

   
    
    render(){
        
        const {books} = this.props
        return (
            <div>
                {this.state.Hiring ? <Hiring/>: <NotHiring/>}
                
                <h1>The library is {this.state.open ? 'open': 'closed'}</h1>
                <button onClick = {this.toggleOpenClosed}>Change</button>
                {books.map(
                   (books, i) => 
                   <Book 
                   key = {i}
                   title = {books.title} 
                   author ={books.author} 
                   pages ={books.pages}
                   freeBookmark= {this.state.freeBookmark}/>
                )}

               
            </div>
        )

    }
   
}



    render(
        
        <Library books ={bookList}/>,
        document.getElementById ('root')
    )


