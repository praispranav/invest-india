import { GoSearch } from 'react-icons/go';

const SearchBarComponent = () => {
    return (
        <div className="row d-flex flex-row justify-content-center align-items-center">
            <div className="search input-group">
                <span className="btn" style={{ backgroundColor: "#f1f1f1" }}><GoSearch /></span>
                <input type="text" className="form-control me-3" placeholder="Have a question? Ask Now" style={{ backgroundColor: "#f1f1f1", border: "0px" }} />
                <button className="btn btn-primary">Search</button>
            </div>
        </div>
    )
}

export default SearchBarComponent
