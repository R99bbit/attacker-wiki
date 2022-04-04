import React from 'react';
import { Stack } from '@mui/material';

import TechniqueItem from './technique-item';
import TacticHeader from './tactic-header';

function TacticItem(props) {
    return(
        <Stack spacing={2.5}>
            <TacticHeader
                tacticName={props.tacticName}
            ></TacticHeader>
            {
                (props.tacticItems).map((item, index) => {
                    return (
                        <TechniqueItem
                            techniqueName={item.Technique}
                            techniqueNumber={item.No}
                            summary={item.Summary}
                            link={item.Link}
                        ></TechniqueItem>
                    );
                })
            }
        </Stack>
    );
}

export default TacticItem;
