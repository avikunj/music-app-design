import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import {BiVolumeLow} from 'react-icons/bi'
import {BiVolumeFull} from 'react-icons/bi'

import "./home.scss";
const Time = () => {
    function valuetext(value) {
        return `${value}°C`;
      }
    
  return (
    <div className="time">
      <div className="min">
        <h3>1.33</h3>
        <h3>1.15</h3>
      </div>
      <div className="semi">
      <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        color="secondary"
      />
    </Box>
      </div>
      <div  className='pausebtn'>
      <h1 >
        <SkipPreviousIcon className='pause' />
        < PauseIcon  className='pause' />
        <SkipNextIcon className='pause' /></h1>
      </div>
      <div className='volumn'>
        <h1>

      <BiVolumeLow className='vol'/>
      <BiVolumeFull className='vol'/>
        </h1>
      </div>
    </div>
  );
};

export default Time;
