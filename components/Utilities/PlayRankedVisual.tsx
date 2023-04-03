import React from 'react';
import {
    Box,
    HStack,
    InputGroup,
    InputRightAddon,
    NumberInput,
    NumberInputField,
    Progress, Text,
    VStack
} from "@chakra-ui/react";
import Button from "@/components/Utilities/Button";

const PlayRankedVisual = () => {

    const [clicked, setClicked] = React.useState(false);
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        if(clicked) {
            const timer = setInterval(() => {
                setProgress((oldProgress) => {
                    const diff = Math.random() * 10;
                    return Math.min(oldProgress + diff, 100);
                });
            }, 100);

            return () => {
                clearInterval(timer);
            };
        }
    }, [clicked])

    return (
        <Box
            py={80}
            w={'100%'}
        >
            <VStack
                w={'60%'}
                spacing={4}
                alignItems='flex-start'
            >
                <Text
                    color='white'
                    fontSize='sm'
                >
                    Play Ranked
                </Text>
                <HStack
                    spacing={4}
                >
                    <InputGroup>
                        <NumberInput
                            focusBorderColor={'blue.200'}
                            // value={value}
                            // onChange={(val) => {
                            //     console.log(val);
                            //     setValue(val)
                            // }}
                            color='white'
                        >
                            <NumberInputField
                                placeholder='Stake Amount'
                            />
                        </NumberInput>
                        <InputRightAddon
                            bg='blue.200'
                            color='#1A202C'
                        >
                            APT
                        </InputRightAddon>
                    </InputGroup>
                    <Button
                        buttonType='primary'
                        onClick={() => setClicked(true)}
                    >
                        Stake
                    </Button>
                </HStack>
                {
                    clicked && (
                        <>
                            <Progress
                                value={progress}
                                w='100%'
                                bg='whiteAlpha.300'
                                fill='blue.200'
                                colorScheme='brand'
                            />
                            {
                                progress === 100 && (
                                <Text
                                    color='green.300'
                                    w={'100%'}
                                    textAlign='center'
                                >
                                    Confirmed!
                                </Text>
                                )
                            }
                        </>
                    )
                }

            </VStack>
        </Box>
    );
};

export default PlayRankedVisual;
