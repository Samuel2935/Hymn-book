import React from 'react';
import './Feeds.css';
import { Button } from '@mui/material';

function Feeds() {
  return (
    <div className="feed">
      <Button variant="contained">feedback</Button>
      <Button variant="contained">Donate</Button>
    </div>
  );
}

export default Feeds;
