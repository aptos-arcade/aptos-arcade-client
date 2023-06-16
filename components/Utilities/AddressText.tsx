import React from 'react';
import {Text, TextProps} from "@chakra-ui/react";
import {ellipsize} from "@/services/utils";
import useANS from "@/hooks/useANS";

interface Props {
    address: string;
    textProps?: TextProps
}

const AddressText: React.FC<Props> = ({ address, textProps }) => {

    const { name } = useANS(address);

    return (
        <Text
            {...textProps}
        >
            {
                name ? (
                    name
                ) : (
                    ellipsize(address, 6, 4)
                )
            }
        </Text>
    );
};

export default AddressText;
