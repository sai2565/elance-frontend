import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import ProjectGridItem from '../components/datarepresentation/ProjectGridItem';
import Footer from '../components/Footer';
// import Slider from '@material-ui/core/Slider';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import { useState } from 'react';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: 300 + theme.spacing(3) * 2,
//     },
//     margin: {
//       height: theme.spacing(3),
//     },
//   }));

//   function ValueLabelComponent(props) {
//     const { children, open, value } = props;
  
//     return (
//       <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
//         {children}
//       </Tooltip>
//     );
//   }

//   ValueLabelComponent.propTypes = {
//     children: PropTypes.element.isRequired,
//     open: PropTypes.bool.isRequired,
//     value: PropTypes.number.isRequired,
//   };

// const PrettoSlider = withStyles({
//     root: {
//       color: '#52af77',
//       height: 8,
//     },
//     thumb: {
//       height: 24,
//       width: 24,
//       backgroundColor: '#fff',
//       border: '2px solid currentColor',
//       marginTop: -8,
//       marginLeft: -12,
//       '&:focus, &:hover, &$active': {
//         boxShadow: 'inherit',
//       },
//     },
//     active: {},
//     valueLabel: {
//       left: 'calc(-50% + 4px)',
//     },
//     track: {
//       height: 8,
//       borderRadius: 4,
//     },
//     rail: {
//       height: 8,
//       borderRadius: 4,
//     },
//   })(Slider);

 


function SearchProjects() {

    const [viewType, setViewType] = useState('G');
    
    // const [value, setValue] = useState(30);

    // const handleChange = (event, newValue) => {
    // setValue(newValue);
    // };

    const userType = "C";
    return (
        <div className="">
            <Head>
                <title>Elance | Search Projects</title>
                <link rel="icon" href="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            </Head>
            <Header page={"searchfreelancers"}/>
            {/* <div className="bg-black space-x-16 flex lg:px-32 px-5 text-white font-semibold pt-3">
                <h1 className={`hover:border-b-2 cursor-pointer hover:border-white pb-2 px-2 ${userType === "C" && "border-b-2 border-white"}`}>Freelancers</h1>
                <h1 className={`hover:border-b-2 hover:border-white cursor-pointer pb-2 px-2 ${userType === "F" && "border-b-2 border-white"}`}>Projects</h1>
            </div> */}
            <div className={`mx-5 lg:mx-32 mb-10`}>
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
            <Footer />
        </div>
    )
}

export default SearchProjects
