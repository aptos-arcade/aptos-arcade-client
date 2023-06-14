import React from 'react';

import {HStack, Text, VStack} from "@chakra-ui/react";

import {GiRetroController} from "react-icons/gi";
import {AiOutlineFullscreen} from "react-icons/ai";

import GetStartedStep from "@/components/Game/GetStartedStep";

interface Props {
    requestFullscreen: (fullscreen: boolean) => void,
    onOpen: () => void,
}

const GetStarted: React.FC<Props> = ({ requestFullscreen, onOpen }) => {

    const controls = [
        {
            icon: <GiRetroController />,
            label: 'Controls',
            onClick: onOpen
        },
        {
            icon: <AiOutlineFullscreen />,
            label: 'Fullscreen',
            onClick: () => requestFullscreen(true)
        }
    ]

    return (
        <VStack
            w='100%'
            justifyContent='center'
            spacing={4}
        >
            <Text>
                Get started by viewing the controls and entering fullscreen.
            </Text>
            <HStack
                spacing={8}
            >
                {
                    controls.map((control, index) => (
                        <GetStartedStep
                            key={index}
                            index={index}
                            onClick={control.onClick}
                            icon={control.icon}
                            label={control.label}
                        />
                    ))
                }
            </HStack>
        </VStack>
    );
};

export default GetStarted;
