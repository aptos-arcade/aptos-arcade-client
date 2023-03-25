import React from 'react'

import {
    Heading,
    Modal,
    ModalBody,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    SimpleGrid,
} from '@chakra-ui/react'

import Control from './Control'
import { controls } from './controls'

interface Props {
    isOpen: boolean
    onClose: () => void
}
const Controls: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
      <Modal
          isOpen={isOpen}
          onClose={onClose}
          size='md'
          isCentered
      >
          <ModalOverlay />
          <ModalContent
              bg='#1A202C'
          >
              <ModalHeader>
                  <Heading
                      fontSize="lg"
                      fontWeight="bold"
                      color='blue.200'
                      textAlign='center'
                  >
                      Controls
                  </Heading>
              </ModalHeader>
              <ModalBody>
                  <SimpleGrid
                      columns={1}
                      spacing={4}
                      w='100%'
                  >
                      {
                          controls.map((control, index) => (
                              <Control
                                  key={index}
                                  control={control}
                              />
                          ))
                      }
                  </SimpleGrid>
              </ModalBody>
              <ModalFooter />
          </ModalContent>
      </Modal>
  )
}

export default Controls