import React from 'react';

import Button from "@/components/Utilities/Button";


interface Props {
    createPlayer: () => Promise<void>
}
const PlayerCreation: React.FC<Props> = ({ createPlayer }) => {

    return (
        <Button
            buttonType={'primary'}
            onClick={createPlayer}
        >
            Create Brawler
        </Button>
    );
};

export default PlayerCreation;
