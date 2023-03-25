import React, { useEffect } from 'react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    useBreakpointValue,
    IconButton,
    useClipboard,
    useToast,
    Image,
    Flex,
    Text,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import { FaWallet } from 'react-icons/fa'

import { useWallet, Wallet } from '@manahippo/aptos-wallet-adapter'

import { ellipsize } from '@/services/utils'

const ConnectWallet: React.FC = () => {

    const { connected, account, disconnect, wallets, select } = useWallet();

    const { onCopy, setValue } = useClipboard("")

    const toast = useToast();

    useEffect(() => {
        if (account?.address) {
            setValue(account?.address?.toString())
        }
    }, [account, setValue])


    const onConnect = async (wallet : Wallet) => {
        select(wallet.adapter.name);
    }

    const copy = () => {
        onCopy();
        toast({
            title: "Address Copied",
            status: "success",
            duration: 2000,
            isClosable: true,
        })
    }
    

    const mobileView = useBreakpointValue({ base: true, sm: false })

    return (
        <Menu
            size={'sm'}
        >
            <MenuButton
                py={2}
                transition="all 0.3s"
                // bg='#1A202C'
                colorScheme='transparent'
                color='white'
                size='sm'
                as={mobileView ? IconButton : Button} 
                variant={'solid'}
                rightIcon={!mobileView ? <ChevronDownIcon /> : undefined}
                leftIcon={!mobileView ? <FaWallet /> : undefined}
                icon={mobileView ? <FaWallet /> : undefined}
            >
                {(connected ? ellipsize(account?.address?.toString().slice(2), 4, 4) : 'Connect Wallet')}
            </MenuButton>
            <MenuList
                bg='#1A202C'
            >
                {
                    connected ? (
                        <>
                            <MenuItem
                                onClick={copy}
                                bg='transparent'
                                color='white'
                                _hover={{
                                    bg: 'whiteAlpha.100',
                                }}
                            >
                                Copy Address
                            </MenuItem>
                            <MenuItem
                                onClick={() => disconnect()}
                                bg='transparent'
                                color='white'
                                _hover={{
                                    bg: 'whiteAlpha.100',
                                }}
                            >
                                Disconnect
                            </MenuItem>
                        </>
                    ) : (
                        wallets.map(wallet => (
                            <MenuItem
                                key={wallet.adapter.name}
                                onClick={() => onConnect(wallet)}
                                icon={<Image src={wallet.adapter.icon} boxSize={6} alt={wallet.adapter.name} />}
                                fontWeight="medium"
                                alignItems='center'
                                bg='transparent'
                                color='white'
                                _hover={{
                                    bg: 'whiteAlpha.100',
                                }}
                            >
                                <Flex
                                    justifyContent='space-between'
                                    alignItems='center'
                                    gap={4}
                                >
                                    {wallet.adapter.name}
                                    {
                                        wallet.adapter.name === 'Pontem' && (
                                            <Flex
                                                alignItems='center'
                                                bg='green.500'
                                                rounded='lg'
                                                p={1}

                                            >
                                                <Text
                                                    fontSize='xs'
                                                    color='white'
                                                    fontWeight='bold'
                                                >
                                                    Popular
                                                </Text>
                                            </Flex>
                                        )
                                    }
                                </Flex>
                            </MenuItem>
                        ))
                    )
                }
                
            </MenuList>
        </Menu>
    )
}

export default ConnectWallet
