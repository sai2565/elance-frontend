import {useState} from 'react';

function CustomCheckbox() {
    const [checked, setChecked] = useState(false);
    const handleClick = () => {
        checked ? setChecked(false) : setChecked(true);
    }
    return (
        <div>
            <img className="h-5 w-5 cursor-pointer" onClick={handleClick} src={`${checked ? "https://img.icons8.com/ios-glyphs/48/666666/checked-checkbox.png" : "https://img.icons8.com/ios-filled/50/666666/unchecked-checkbox.png"}`} />
        </div>
    )
}

export default CustomCheckbox
