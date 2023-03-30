import { Link } from "react-router-dom";

const Pagination = ({postsPerpage,totalPost,paginate})=>{
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPost/postsPerpage);i++) {
    pageNumbers.push(i);
    }
    return(
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number=>(
                    <li key={number} className="pageitem">
                        <Link onClick={()=>paginate(number)} to={"!#"}>
                            <button >{number}</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination