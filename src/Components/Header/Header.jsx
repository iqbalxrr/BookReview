import Navber from "./Navber";



const Header = () => {
    return (
        
       <div>
        

         <div className="">
         <div className="hero bg-slate-100 rounded-2xl my-10	">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img
                src="https://i.ibb.co/WKsZ0pL/pngwing-1.png"
                className="max-w-sm rounded-lg " />
                <div>
                <h1 className="text-5xl font-bold mb-6 mr-10  text-black ">Books to freshen up <br /> your bookshelf</h1>

                <button className="btn bg-[#23BE0A] text-white">View The List</button>
                </div>
            </div>
            </div>
         </div>
       </div>
    );
};

export default Header;