import React from 'react';

import {VStack, Text, useDisclosure} from "@chakra-ui/react";

import EquipMeleeWeapon from "@/components/AptosArena/MeleeWeaponSelect/EquipMeleeWeapon";
import MintMeleeWeapon from "@/components/AptosArena/MeleeWeaponSelect/MintMeleeWeapon";
import Button from "@/components/Utilities/Button";
import Modal from "@/components/Utilities/Modal";
import CircularProgress from "@/components/Utilities/CircularProgress";

import useMeleeWeapons from "@/hooks/aptosArena/useMeleeWeapons";

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
                    <Text
                        fontSize={'4xl'}
                        textAlign={'center'}
                    >
                        Melee Weapons
                    </Text>
                }
                modalBody={
                    <VStack>
                        {
                            hasPlayerMintedLoading ? (
                                <CircularProgress />
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
                                            <Text
                                                textAlign={'center'}
                                            >
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
                size={'xl'}
            />
        </>
    );
};

export default MeleeWeapons;