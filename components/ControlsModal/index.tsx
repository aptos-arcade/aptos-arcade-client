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

import { Controls } from '@/types/Controls'

interface Props {
    isOpen: boolean
    onClose: () => void,
    controls: Controls[]
}
const Controls: React.FC<Props> = ({ isOpen, onClose, controls }) => {
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