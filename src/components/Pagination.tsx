import { Button } from "@mui/material";
import { useEffect, useState } from "react";


const Pagination = ({ showppage, onpagination, total }: any) => {

    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const value = showppage * counter;
        onpagination(value - showppage, value)
    }, [counter])

    const onbuttonclick = (type: any) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1)
            }
            else {
                setCounter(counter - 1)
            }
        }
        else if (type === "next") {
            if (Math.ceil(total / showppage) === counter) {
                setCounter(counter)
            }
            else {
                setCounter(counter + 1)
            }
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#" onClick={() => { onbuttonclick("prev") }}>Previous</a></li>
                    {
                        new Array(Math.ceil(total / showppage)).fill("").map((item: any, index: any) => (
                            <li className={`page-item ${index + 1 === counter ? "active" : null}`}><a className="page-link" href="#" onClick={() => setCounter(index + 1)}>{index + 1}</a></li>
                        ))
                    }
                    <li className="page-item"><a className="page-link" href="#" onClick={() => { onbuttonclick("next") }}>Next</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;