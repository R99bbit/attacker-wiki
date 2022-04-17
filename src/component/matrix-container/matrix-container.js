import React from 'react';
import TacticItem from './tactic-item';
import Grid from '@mui/material/Grid';
import {Matrix} from '../../config/matrix'

function MatrixContainer() {
    var tactic = Matrix['tactic'];
    var tactics = Object.keys(tactic);
    return(
        <table>
           <tr>
            {
                tactics.map(tactic_iter => {
                    return (
                        <td>
                            <TacticItem
                                tacticItems={tactic[tactic_iter]}
                                tacticName={tactic_iter}
                            ></TacticItem>
                        </td>
                    )
                })
            }
           </tr>
        </table>
    )
}

export default MatrixContainer