import React from 'react';

import {HStack, Input, Text, useDisclosure} from "@chakra-ui/react";

import Button from "@/components/Utilities/Button";

import {Token} from "@/types/Token";
import Modal from "@/components/Utilities/Modal";
import useGrantCapability from "@/hooks/useGrantCapability";

interface Props {
    token: Token
}

const CasualCapabilityModal: React.FC<Props> = ({ token }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { address, handleAddressChange, grantCapability } = useGrantCapability('casual', token);

    return (
        <>
            <Modal
                modalHeader={
                    <Text
                        fontSize='lg'
                        color='white'
                    >
                        Grant Casual Capability
                    </Text>
                }
                modalBody={
                    <HStack>
                        <Input
                            placeholder="Enter address"
                            w='100%'
                            color='white'
                            value={address}
                            onChange={handleAddressChange}
                        />
                        <Button
                            buttonType='primary'
                            onClick={grantCapability}
                        >
                            Grant
                        </Button>
                    </HStack>
                }
                isOpen={isOpen}
                onClose={onClose}
                size='xl'
                isCentered
            />
            <Button
                buttonType='outline'
                onClick={onOpen}
            >
                Casual
            </Button>
        </>
    );
};

export default CasualCapabilityModal;
