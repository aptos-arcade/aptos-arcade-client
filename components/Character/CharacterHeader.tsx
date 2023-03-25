import React from 'react'

import {Heading, VStack, Text, Image, Box} from '@chakra-ui/react'

import Button from "@/components/Utilities/Button";

import {Character} from "@/types/Character";

interface Props {
    character: Character
}

const CharacterHeader: React.FC<Props> = ({ character }) => {
    return (
        <VStack
            spacing={4}
        >
            <Box
                position='relative'
                w={200}
                h={200}
                rounded={'lg'}
                overflow='hidden'
            >
                <Image
                    src={character.collectionBackgroundImage}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    filter='blur(0.5px)'
                    alt="Collection Background"
                />
                <Image
                    src={character.collectionImage}
                    alt="Collection Image"
                    position='absolute'
                    top={0}
                    zIndex={2}
                />
            </Box>
            <Heading
                fontSize="4xl"
                fontWeight="bold"
                color='blue.200'
            >
                {character.collectionName}
            </Heading>
            <Text
                color='white'
                textAlign='center'
            >
                {character.collectionDescription}
            </Text>
            <a
                href={character.marketplaceURL}
                target='_blank'
            >
                <Button
                    buttonType='outline'
                    size='sm'
                >
                    View on Topaz
                </Button>
            </a>
        </VStack>
    )
}

export default CharacterHeader