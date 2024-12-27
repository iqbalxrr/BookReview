

import { useEffect, useState } from "react";
import Book from "../Book/Book";



const Books = () => {
       
    const[books , setBooks] = useState([]);

    useEffect( () =>{

       fetch('public/data.json')

        .then( res => res.json())
        .then(data => setBooks(data))

       

    }, [])

    return (
        
        <div>
            <h1 className="text-4xl text-center my-10 "> All Books : {books.length}</h1>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  md:gap-2 lg:gap-2  ">

                {
                    books.map( book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;