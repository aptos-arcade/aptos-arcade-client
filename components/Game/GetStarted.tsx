import React from 'react';

import {Flex, Text, VStack} from "@chakra-ui/react";

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
                textAlign={'center'}
            >
                Get started by viewing the controls and entering fullscreen.
            </Text>
            <Flex
                gap={{base: 4, md: 8}}
                flexDirection={{base: 'column', md: 'row'}}
                alignItems={"center"}
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
            </Flex>
        </VStack>
    );
};

export default GetStarted;
