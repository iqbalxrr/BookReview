
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const { bookId , bookName, author, image, totalPages, rating, category } = book ;
    
    return (
        
    <Link to={`/book/${bookId}`}>

        <div  className="border p-5  mx-auto  rounded-2xl">

              <div className="bg-[#F3F3F3] w-auto h-[ 230px] p-5 rounded-2xl  ">
              <div className="grid justify-items-center ">
              <img  src={image} alt="" />
              </div>

              </div>
              <div className="">
                <button className=" my-2 px-4 py-2 rounded-full text-lime-400	">Young Adult</button> 
                <button className=" my-2 px-4 py-2 rounded-full text-lime-400	">Identity</button>
              </div>
                
                <h1 className="text-3xl font-bold  py-4">{bookName}</h1>

                <p className="pb-4 border-b border-dashed"> By : {author}</p>
                
                <div className="flex justify-between  ">
                    <h2 className="text-2xl py-4">{category}</h2>

                    <h2 className="flex py-5 gap-5"> 5.00 <span><FaRegStar className="text-2xl "></FaRegStar></span></h2>
                </div>
              </div>
        </Link>
)};

export default Book;