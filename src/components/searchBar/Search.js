import React from 'react';
import './Search.css';
import TextField from '@mui/material/TextField';
import { InputLabel, MenuItem, Select } from '@mui/material';
function Search() {
  return (
    <div className="main">
      <h3>Hymn Search</h3>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search for hymn..."
        />
        <div className='lag'>
          <InputLabel id="demo-simple-select-label">Lag</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Lag"
          >
            <MenuItem >Igbo</MenuItem>
            <MenuItem >Hausa</MenuItem>
            <MenuItem>Yoruba</MenuItem>
            <MenuItem >English</MenuItem>
          </Select>
        </div>
      </div>
      {/* <List /> */}
    </div>
  );
}

export default Search;
