import React from 'react';

import {Flex} from "@chakra-ui/react";

import NavLink from "@/components/Navbar/NavLink";

import navLinks from "@/data/navLinks";

const NavLinks: React.FC = () => {
    return (
        <Flex
            flexDirection={{base: 'column', md: 'row'}}
            alignItems={'center'}
            gap={4}
        >
            {
                navLinks.map(navLink => (
                    <NavLink
                        key={navLink.name}
                        link={navLink}
                    />
                ))
            }
        </Flex>
    );
};

export default NavLinks;
