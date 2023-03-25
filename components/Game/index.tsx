import React from 'react'

import {Card, CircularProgress, HStack, useDisclosure, VStack} from '@chakra-ui/react';

import { AiOutlineFullscreen } from 'react-icons/ai';
import { GiRetroController } from 'react-icons/gi';

import { Unity } from 'react-unity-webgl';

import ControlsModal from "../ControlsModal";
import Button from "@/components/Utilities/Button";

import {UnityProvider} from "react-unity-webgl/distribution/types/unity-provider";

interface Props {
    unityProvider: UnityProvider,
    isLoaded: boolean,
    requestFullscreen: (fullscreen: boolean) => void,
}

const Game: React.FC<Props> = ({ unityProvider, isLoaded, requestFullscreen }) => {

    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <>
            <ControlsModal isOpen={isOpen} onClose={onClose} />
            <VStack
                spacing={8}
            >
                <HStack
                    w='100%'
                    justifyContent='center'
                >
                    <Button
                        buttonType='primary'
                        onClick={onOpen}
                        leftIcon={<GiRetroController />}
                    >
                        Controls
                    </Button>
                    <Button
                        buttonType='primary'
                        leftIcon={<AiOutlineFullscreen />}
                        onClick={() => requestFullscreen(true)}
                    >
                        Fullscreen
                    </Button>
                </HStack>
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
                                isIndeterminate
                                size='80px'
                                trackColor='transparent'
                                color='blue.200'
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
                        }}
                    />
                </Card>
            </VStack>
        </>
    )
}

export default Game