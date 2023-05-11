import React from 'react';

import {
    Flex,
    HStack, Image,
} from '@chakra-ui/react'

import ConnectWallet from './ConnectWallet';
import Link from "next/link";
import NavLinks from "@/components/Navbar/NavLinks";
import MobileNav from "@/components/Navbar/MobileNav";

export const navbarHeight = 20;
  
const Navbar : React.FC = ({ }) => {
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
            justifyContent='space-between'
        >
            <HStack 
                flex={1}
            >
                <Link
                    href='/'
                >
                    <Image
                        src='/logo.png'
                        alt='logo'
                        h={navbarHeight}
                        transition='all 0.2s ease-in-out'
                        _hover={{
                            opacity: 0.9,
                        }}
                    />
                </Link>
                <NavLinks />
            </HStack>
            <HStack>
                <ConnectWallet />
                <MobileNav />
            </HStack>

        </Flex>
    );
};

export default Navbar