/**
 * This Component contains a SearchInput box
 * 1. Initial text to this search input is provided by parent component
 * 2. An onChangeHandler function is also passed in, so that any changes to text input can reflect back in parent component.
 * 3. On load of this component, focus is placed on the search input box
 */

import { useEffect, useRef } from "react";
import "./SearchInput.css"

interface SearchInputProps {
    text: string;
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
  }

const SearchInput:React.FC<SearchInputProps> = ({ text, onChangeHandler }) => {

    const inputSearchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputSearchRef.current) {
        inputSearchRef.current.focus();
        }
    }, []);

    return(
        <div className="search-input">
            <div className="ui massive icon input search-input-container">
                <input type="text" placeholder="Search Activities..." value={text} onChange={onChangeHandler} ref={inputSearchRef}/>
                <i className="search icon"></i>
            </div>
        </div>
        
    )
}

export default SearchInput;