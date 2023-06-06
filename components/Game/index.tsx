import React from 'react'

import {Card, Heading, useDisclosure, VStack} from '@chakra-ui/react';

import { Unity } from 'react-unity-webgl';
import {UnityProvider} from "react-unity-webgl/distribution/types/unity-provider";

import GetStarted from "@/components/Game/GetStarted";
import ControlsModal from "@/components/ControlsModal";
import CircularProgress from "@/components/Utilities/CircularProgress";

import {Controls} from "@/types/Controls";

interface Props {
    unityProvider: UnityProvider,
    isLoaded: boolean,
    requestFullscreen: (fullscreen: boolean) => void,
    controls: Controls[]
}

const Game: React.FC<Props> = ({ unityProvider, isLoaded, requestFullscreen, controls }) => {

    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <>
            <ControlsModal
                isOpen={isOpen}
                onClose={onClose}
                controls={controls}
            />
            <VStack
                spacing={8}
            >
                <Heading
                    color={'blue.200'}
                >
                    Gameplay
                </Heading>
                <GetStarted
                    requestFullscreen={requestFullscreen}
                    onOpen={onOpen}
                />
                <Card
                    shadow='lg'
                    position='relative'
                    borderColor='blue.200'
                    borderWidth={2}
                    bg='transparent'
                    overflow='hidden'
                    w='100%'
                >
                    {
                        !isLoaded && (
                            <CircularProgress
                                size='80px'
                                position='absolute'
                                left='50%'
                                top='50%'
                                transform='translate(-50%, -50%)'
                            />
                        )
                    }
                    <Unity
                        unityProvider={unityProvider}
                        style={{
                            width: '100%',
                            aspectRatio: '16/9'
                            // width: 0,
                            // height: 0,
                        }}
                    />
                </Card>
            </VStack>
        </>
    )
}

export default Game