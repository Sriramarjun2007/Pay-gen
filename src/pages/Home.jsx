import homimg from "../assets/homimg.jpg"
function Home(){
    return(
        <div className="bg-[#2A61BA] h-160 mt-26">
            <div>
                <p className="text-white text-6xl font-bold pt-25 pl-20 font-roboto leading-tight">
                Generate Professional <br></br> Payslips in Seconds
                </p>
                <p className="pl-20 pt-7 text-white text-2xl font-roboto">
                    Create,manage,and download employee<br></br>payslips with accurate salary,deductions,<br/>and tax details.
                </p>
                <div>
                    <button className="bg-[#183057] text-white text-xl px-30 py-4 rounded-xl ml-20 mt-15 font-roboto cursor-pointer">Get Start</button>
                </div>
                <div>
                    <img
                        src={homimg}
                        alt="Hero"
                        className="-mt-95 ml-190"
                    />
                </div>
            </div>
        </div>
    );
}
export default Home;