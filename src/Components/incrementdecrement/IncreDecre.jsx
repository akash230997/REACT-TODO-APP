import React, { useState } from 'react';
import './Increment.css';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
// import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


export default function IncreDecre() {
    // const value = 0
    const [valOne, setvalOne] = useState(0)
    const Add = () =>{
        setvalOne(valOne + 1)
    }

    const Sub = () => {
        (valOne > 0)? setvalOne(valOne - 1) : setvalOne(0);
    }
  return (
    <div className='MainBox'>
        <div className="box">
              <h1 className='head'>{valOne}</h1>
              <Tooltip title = "Add">
                  <Button id='primebtn' color='success' onClick={Add}>
                      <AddOutlinedIcon />
                  </Button>
              </Tooltip>
                
              <Tooltip title="Delete">
                  <Button spacing={5} id='primebtn' style={{float: "right"}} color='error' onClick={Sub}>
                      <RemoveOutlinedIcon />
                  </Button>
              </Tooltip>
        </div>
    </div>
  )
}
