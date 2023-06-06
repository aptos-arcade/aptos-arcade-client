import React from 'react';

import {VStack, Text, CircularProgress, useDisclosure} from "@chakra-ui/react";

import useMeleeWeapons from "@/hooks/aptosArena/useMeleeWeapons";
import EquipMeleeWeapon from "@/components/AptosArena/EquipMeleeWeapon";
import MintMeleeWeapon from "@/components/AptosArena/MintMeleeWeapon";
import Button from "@/components/Utilities/Button";
import Modal from "@/components/Utilities/Modal";

const MeleeWeapons = () => {

    const {
        meleeWeapons,
        hasPlayerMintedMeleeWeapon,
        meleeWeaponsLoading,
        hasPlayerMintedLoading,
        mintMeleeWeapon,
        equipMeleeWeapon
    } = useMeleeWeapons();

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button
                buttonType={'primary'}
                onClick={onOpen}
            >
                Equip Melee Weapon
            </Button>
            <Modal
                modalHeader={
                    <Text>
                        Melee Weapons
                    </Text>
                }
                modalBody={
                    <VStack>
                        {
                            hasPlayerMintedLoading ? (
                                <CircularProgress isIndeterminate />
                            ) : (
                                hasPlayerMintedMeleeWeapon ? (
                                    meleeWeaponsLoading ? (
                                        <CircularProgress isIndeterminate />
                                    ) : (
                                        meleeWeapons.length > 0 ? (
                                            meleeWeapons.map((meleeWeapon, index) => (
                                                <EquipMeleeWeapon
                                                    key={index}
                                                    weaponName={meleeWeapon.name}
                                                    equipMeleeWeapon={() => equipMeleeWeapon(meleeWeapon.address)}
                                                />
                                            ))
                                        ) : (
                                            <Text>
                                                No Uneqipped Melee Weapons
                                            </Text>
                                        )
                                    )
                                ) : (
                                    <MintMeleeWeapon mintMeleeWeapon={mintMeleeWeapon} />
                                )
                            )
                        }
                    </VStack>
                }
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    );
};

export default MeleeWeapons;
