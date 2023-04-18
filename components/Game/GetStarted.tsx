import React from 'react';

import {Text, VStack} from "@chakra-ui/react";

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
            <Text
                fontSize='xl'
                color='blue.200'
            >
                Get Started
            </Text>
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

        </VStack>
    );
};

export default GetStarted;
