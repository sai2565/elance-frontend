import {useState} from 'react';

function RatingSet({handleRating, editable, rating}) {
    const [hoveredRating, setHoveredRating] = useState(0);
    const [selectedRating, setSelectedRating] = useState(0);
    function handleRatingSet(rating){
        handleRating(rating);
        setSelectedRating(rating)
    }
    return (
        <div>
            {
            editable &&
            <div onMouseLeave={() => setHoveredRating(selectedRating)} className="flex">
                <img onMouseEnter={() => setHoveredRating(1)} onClick={() => handleRatingSet(1)} className="h-6 w-6 cursor-pointer" src={`${hoveredRating > 0 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
                <img onMouseEnter={() => setHoveredRating(2)} onClick={() => handleRatingSet(2)} className="h-6 w-6 cursor-pointer" src={`${hoveredRating > 1 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
                <img onMouseEnter={() => setHoveredRating(3)} onClick={() => handleRatingSet(3)} className="h-6 w-6 cursor-pointer" src={`${hoveredRating > 2 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
                <img onMouseEnter={() => setHoveredRating(4)} onClick={() => handleRatingSet(4)} className="h-6 w-6 cursor-pointer" src={`${hoveredRating > 3 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
                <img onMouseEnter={() => setHoveredRating(5)} onClick={() => handleRatingSet(5)}className="h-6 w-6 cursor-pointer" src={`${hoveredRating > 4 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
            </div>
            }{
            !editable && 
            <div className="flex">
                <img className="h-6 w-6 cursor-pointer" src={`${rating > 0 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
                <img className="h-6 w-6 cursor-pointer" src={`${rating > 1 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
                <img className="h-6 w-6 cursor-pointer" src={`${rating > 2 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
                <img className="h-6 w-6 cursor-pointer" src={`${rating > 3 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
                <img className="h-6 w-6 cursor-pointer" src={`${rating > 4 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
            </div>
            }
        </div>
        
        
    )
}

export default RatingSet
