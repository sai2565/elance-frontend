import {useState} from 'react';

function RatingSet() {
    const [hoveredRating, setHoveredRating] = useState(0);
    const [selectedRating, setSelectedRating] = useState(0);
    return (
        <div onMouseLeave={() => setHoveredRating(selectedRating)} className="flex">
            <img onMouseEnter={() => setHoveredRating(1)} onClick={() => setSelectedRating(1)} className="h-6 w-6 cursor-pointer" src={`${hoveredRating > 0 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
            <img onMouseEnter={() => setHoveredRating(2)} onClick={() => setSelectedRating(2)} className="h-6 w-6 cursor-pointer" src={`${hoveredRating > 1 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
            <img onMouseEnter={() => setHoveredRating(3)} onClick={() => setSelectedRating(3)} className="h-6 w-6 cursor-pointer" src={`${hoveredRating > 2 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
            <img onMouseEnter={() => setHoveredRating(4)} onClick={() => setSelectedRating(4)} className="h-6 w-6 cursor-pointer" src={`${hoveredRating > 3 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
            <img onMouseEnter={() => setHoveredRating(5)} onClick={() => setSelectedRating(5)}className="h-6 w-6 cursor-pointer" src={`${hoveredRating > 4 ? "https://img.icons8.com/fluent/60/ffffff/star.png":"https://img.icons8.com/ios-glyphs/60/666666/filled-star.png"}`} />
        </div>
    )
}

export default RatingSet
