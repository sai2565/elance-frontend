import React, { useState, useRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import {useRouter} from 'next/router';


function HeaderTag({tag, options}) {
    const [selected, setSelected] = useState(false);
    const router = useRouter();
    const TagDrop = withStyles((theme) => ({
        tooltip: {
          backgroundColor: theme.palette.common.white,
          color: 'rgba(0, 0, 0, 0)',
          boxShadow: theme.shadows[2],
          marginTop: 0,
          marginLeft: 0
         // fontSize: 11,
        },
      }))(Tooltip);

    return (
        <div >
            <TagDrop 
                className="bg-white" 
                onClose={() => setSelected(false)} 
                onOpen={() => setSelected(true)} 
                interactive 
                placement="bottom-start"
                title={
                <div className="p-5 space-y-2">
                    {
                        options.map(({subcat}) => (
                            <h1 onClick={() => router.push(`/Search?category=${tag}&subcategory=${subcat}`)} className="text-lg text-[#666666] hover:underline cursor-pointer">
                                {subcat}
                            </h1>
                        ))
                    }
                </div>
            }>
              <h1
                className={`text-lg text-gray-500 mt-3 hover:border-b-2 hover:border-[#29b2fe] pb-2 cursor-pointer whitespace-nowrap ${selected && "border-b-2 border-[#29b2fe]"}`}>{tag}</h1>
              </TagDrop>
              
        </div>
    )
}

export default HeaderTag
