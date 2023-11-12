/**
 * This Rating component is used to convert a decimal value between 0 and 5 to a star rating display.
 * If the decimal value passed in, is not between 0-5, the star display is not shown.
 * The decimal value is converted to a % for display.
 * Shared component : Can be used across multiple components, if needed
 */

import "./Rating.css"

interface RatingProps {
    rating: number;
}

const Rating:React.FC<RatingProps> = ({rating}) => {
    let ratingInPercentage:string = `0%`;

    const MIN_RATING = 0;
    const MAX_RATING = 5;

    if(rating && rating>=MIN_RATING && rating<=MAX_RATING) {
        ratingInPercentage = `${(rating * 20).toString()}%`;

        return(
            <div className="rating">
                <div className="empty-stars"></div>
                <div className="full-stars" style={{ width: ratingInPercentage}}></div>
                <span>{rating} Rating</span>
            </div>
        )
    } else {
        return(
            <div className="rating">Invalid Rating!</div>
            )
    }

   
}

export default Rating;