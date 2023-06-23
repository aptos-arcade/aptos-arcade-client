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
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import { FaWallet } from 'react-icons/fa'

import { useWallet, Wallet } from '@aptos-labs/wallet-adapter-react'

const ConnectWallet: React.FC = () => {

    const { connected, account, disconnect, wallets, connect } = useWallet();

    const { onCopy, setValue } = useClipboard("")

    const toast = useToast();

    useEffect(() => {
        if (account?.address) {
            setValue(account?.address?.toString())
        }
    }, [account, setValue])


    const onConnect = async (wallet : Wallet) => {
        connect(wallet.name);
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
                transition="all 0.3s"
                // colorScheme='transparent'
                color='white'
                size='md'
                as={mobileView ? IconButton : Button} 
                variant={'solid'}
                rightIcon={!mobileView ? <ChevronDownIcon /> : undefined}
                leftIcon={!mobileView ? <FaWallet /> : undefined}
                icon={mobileView ? <FaWallet /> : undefined}
            >
                {
                    account
                        ? (account.ansName ? `${account.ansName}.apt` : account.address.toString())
                        : 'Connect Wallet'
                }
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
                                key={wallet.name}
                                onClick={() => onConnect(wallet)}
                                icon={<Image src={wallet.icon} boxSize={6} alt={wallet.name} />}
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
                                    {wallet.name}
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
