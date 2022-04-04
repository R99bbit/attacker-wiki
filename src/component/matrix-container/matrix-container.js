import React from 'react';
import TacticItem from './tactic-item';
import Grid from '@mui/material/Grid';
import {Matrix} from '../../config/matrix'

function MatrixContainer() {
    var tactic = Matrix['tactic'];

    return(
        <Grid className="matrix-container" container spacing={2} direction="row" justifyContent="center" alignItems="top">
            <Grid item xs={2}>
                 <TacticItem
                    tacticItems={tactic["Persistence"]}
                    tacticName="Persistence"
                 ></TacticItem>
            </Grid>
            <Grid item xs={2}>
                 <TacticItem
                    tacticItems={tactic["Lateral Movement"]}
                    tacticName="Lateral Movement"
                 ></TacticItem>
            </Grid>
            <Grid item xs={2}>
                 <TacticItem
                    tacticItems={tactic["Defense Evasion"]}
                    tacticName="Defense Evasion"
                 ></TacticItem>
            </Grid>
            <Grid item xs={2}>
                 <TacticItem
                    tacticItems={tactic["Command and Control"]}
                    tacticName="Command and Control"
                 ></TacticItem>
            </Grid>
        </Grid>
    )
}

export default MatrixContainer