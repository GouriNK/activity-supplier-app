/**
 * This Loader component is only shown, when data fetched from backend is yet to laod on the page
 * Shared component : Can be used across multiple components, if needed
 */

import "./Loader.css"

const Loader:React.FC = () => {
    return(
        <div className="ui active centered text inline loader">Loading...</div>
    )
}

export default Loader;