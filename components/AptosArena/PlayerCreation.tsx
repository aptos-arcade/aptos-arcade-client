import React from 'react';

import {Button} from "@chakra-ui/react";

interface Props {
    createPlayer: () => Promise<void>
}
const PlayerCreation: React.FC<Props> = ({ createPlayer }) => {

    return (
        <Button
            onClick={createPlayer}
        >
            Create Player
        </Button>
    );
};

export default PlayerCreation;
