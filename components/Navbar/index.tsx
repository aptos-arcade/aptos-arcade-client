import React from 'react';

import {
    Flex,
    HStack,
} from '@chakra-ui/react'

import ConnectWallet from './ConnectWallet';

export const navbarHeight = 20;
  
const Navbar : React.FC = () => {    
    return (
        <Flex
            position='absolute'
            top={0}
            left={0}
            right={0}
            zIndex={100}
            height={navbarHeight}
            w='100%'
            gap={8}
            alignItems='center'
            p={4}
        >
            <HStack 
                flex={1}
                justifyContent='flex-end'
            >
                <ConnectWallet />
                {/* <ColorModeToggle /> */}
            </HStack>
        </Flex>
    );
};

export default Navbar