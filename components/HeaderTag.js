import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";

function HeaderTag({tag}) {

    return (
        <div>
              <h1 
              className="text-lg text-gray-500 mt-3 hover:border-b-2 hover:border-[#29b2fe] pb-2 cursor-pointer whitespace-nowrap">{tag}</h1>
        </div>
    )
}

export default HeaderTag
