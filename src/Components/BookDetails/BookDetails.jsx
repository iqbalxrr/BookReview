import { useLoaderData, useParams } from "react-router-dom";



const BookDetails = () => {

    const bookDetails = useLoaderData();
    const { bookId }  = useParams();

    const intBookId = parseInt(bookId);

    const bookDetail = bookDetails.find( bookDetail => bookDetail.bookId === intBookId );

    const {image,bookName,author,review, totalPages,rating,tags,publisher, yearOfPublishing,category } = bookDetail;

    const [tag1 , tag2 ] = tags ;

    return (
        
        <div>
           
           <div className="hero bg-white p-10 text-black">
                <div className="hero-content flex-col lg:flex-row">
                    <img   className="bg-[#F3F3F3] p-12  w-full max-w-96 max-h-full rounded-xl "  src={image}/>
                   
                    <div className="" >
                    <h1 className="text-5xl font-bold my-5">{bookName}</h1>
                    <h2 className="my-4">By : {author}</h2>

                    <hr />
                     <button className="my-4">{category}</button>
                     <hr />
                    <p className=" py-3 text-xl"> <span className="font-bold">Review :</span> {review}</p>

                    <p className="my-5"><span className=" text-xl font-bold"> Taq : </span><span className="px-3 mr-4 py-1  text-green-500 bg-[#F3F3F3] rounded-xl">#{tag1}</span>
                    <span className="px-4 text-green-500 bg-[#F3F3F3] py-1 rounded-xl ">#{tag2}</span></p>

                    <div>
                    <div>
                        
            <table className="my-5">

            
                <tbody >
                {/* row 1 */}
                <tr className="text-xl">   
                    <td>Number of Pages:</td>
                    <td className="pl-10 font-bold">{totalPages}</td>
                   
                </tr>
                {/* row 2 */}
                <tr className="text-xl">
                 
                    <td>Publisher:</td>
                    <td className="pl-10 font-bold">{publisher}</td>
                   
                </tr>
                {/* row 3 */}
                <tr className="text-xl">
                   
                    <td>Year of Publishing:</td>
                    <td className="pl-10 font-bold">{yearOfPublishing}</td>
                   
                </tr>

                <tr className="text-xl">
                    <td>Rating:</td>
                    <td className="pl-10 font-bold">{rating}</td>
                </tr>
                </tbody>
            </table>
           </div>
                    </div>
             
                    <div className="my-5">
                    <button className=" btn-primary  px-7 py-4 border-2 rounded-xl hover:bg-sky-700">Read</button>
                    <button className=" mx-5 px-7 py-4 border-2 rounded-xl   bg-[#50B1C9] text-black hover:bg-sky-400">Wishlist</button>
                    </div>
                    </div>
                </div>
                </div>

                
        </div>
    
    );
};

export default BookDetails ;