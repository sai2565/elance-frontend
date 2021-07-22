import ProjectGridItem from '../datarepresentation/ProjectGridItem';
import { useState } from 'react';

function ProjectsSearch() {
    const [viewType, setViewType] = useState('G');
    const userType = "F";
    return (
            <div>
                 <div className="grid grid-cols-10 space-x-3 my-5">
                    <div className="col-span-2 border border-[#c4c4c4] w-full p-2 space-y-2 rounded-md mt-10">
                        <h1 className="text-lg text-[#666666] font-bold " >Filters</h1>
                        {/* <div>
                            <h1 className="text-base font-bold text-[#666666]">
                                Project Budget
                            </h1>
                                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                                <Grid item xs>
                                    <Slider 
                                    value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                                </Grid>
                        </div> */}

                    </div>
                    <div className="col-span-8 ">
                        {/* border border-[#c4c4c4] rounded-md */}
                      <div className="justify-between flex items-center"> 
                        <h1 className="text-lg text-[#666666] font-bold ml-10">"React" Projects</h1>
                        <div className="flex items-center space-x-2">
                            <img 
                                onClick={() => setViewType('G')}
                                className="w-6 h-6 cursor-pointer"
                                src={`https://img.icons8.com/material/192/${ viewType === 'G' ? "29b2fe" : "666666"}/grid-2.png`}/>
                            <img 
                                onClick={() => setViewType('F')}
                                className="w-6 h-6 cursor-pointer"
                                src={`https://img.icons8.com/material-rounded/240/${ viewType === 'F' ? "29b2fe" : "666666"}/overview-pages-3.png`} />
                        </div>
                      </div>
                      <div className={`${viewType === 'G' && "grid lg:grid-cols-3 md:grid-cols-2"} place-items-center p-5`}>
                          <ProjectGridItem favourite />
                          <ProjectGridItem />
                          <ProjectGridItem favourite />
                          <ProjectGridItem />
                          <ProjectGridItem favourite />
                          <ProjectGridItem />
                          <ProjectGridItem />
                          <ProjectGridItem />
                          <ProjectGridItem favourite />
                      </div>
                      <div className="justify-between w-full">
                        <div />
                        <div className="flex items-center space-x-5 mt-10 justify-center">
                            <img className="w-8 h-8" src="https://img.icons8.com/ios-glyphs/120/999999/previous.png" />
                        <h1>
                            Page 1 | 9 of 63 projects
                        </h1>
                        <img className="w-8 h-8 cursor-pointer" src="https://img.icons8.com/ios-glyphs/120/29b2fe/next.png" />
                        </div>
                        
                    </div>
                    </div>

                </div>

            </div>
    )
}

export default ProjectsSearch
