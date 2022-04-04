import * as React from 'react';
import Tooltip from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '../../css/matrix-container.css';
import { textAlign } from '@mui/material/node_modules/@mui/system';

/*
    @props
    - tacticName
*/
function TacticHeader(props) {
  return (
    <Card className="technique-item" sx={{ minWidth: 400}} style={{backgroundColor: "#1e1e1e"}}>
      <CardContent>
        <Typography sx={{color: "white", textAlign:"center", fontSize: 16}} variant="h1" component="div">
            {props.tacticName}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TacticHeader;