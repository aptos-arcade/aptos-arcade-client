import React from 'react';
import Button from "@/components/Utilities/Button";
import {TokenData} from "@/types/TokenData";

interface Props {
    character: TokenData
    equipCharacter: () => Promise<void>
}

const EquipCharacter: React.FC<Props> = ({ character, equipCharacter }) => {
    return (
        <Button
            buttonType={'primary'}
            onClick={equipCharacter}
        >
            Equip {character.name}
        </Button>
    );
};

export default EquipCharacter;
