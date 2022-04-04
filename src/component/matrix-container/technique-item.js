import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import '../../css/matrix-container.css';

/*
    @props
    - modifyDate
    - techniqueName
    - techniqueNumber
    - summary
    - link
*/

const TechniqueTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 300,
      fontSize: theme.typography.pxToRem(14),
      padding: '20px'
    },
  }));

function TechniqueItem(props) {
  return (
    <TechniqueTooltip
        title={
            <React.Fragment>
                <Typography color="inherit" sx={{fontSize: "20px"}}>{props.techniqueName}</Typography>
                {props.summary}
            </React.Fragment>
        }
    >
        <Card className="technique-item" sx={{ minWidth: 400, boxShadow: "7px 7px #171717"}} style={{backgroundColor: "#1e1e1e"}}>
        <CardContent>
            <Typography sx={{ fontSize: 13, color: "#bcbcbc" }} color="text.secondary" gutterBottom>
                Last Modified : 15 April 2021
            </Typography>
            <Typography sx={{color: "white"}} variant="h5" component="div">
                {props.techniqueName}
            </Typography>
            <Typography sx={{ mb: 0.5, color: "#bcbcbc", fontSize: 12 }} color="text.secondary">
                {props.techniqueNumber}        
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
    </TechniqueTooltip>
  );
}

export default TechniqueItem;