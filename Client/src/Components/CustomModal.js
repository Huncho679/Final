import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

export default function CustomModal({ isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontWeight="700" color="#111">
              Head's Up!
            </Text>
          </ModalHeader>
          <ModalCloseButton
            color="#111"
            _hover={{
              backgroundColor: "#74c0fc",
              color: "white",
            }}
          />
          <ModalBody>
            <Text
              fontWeight="500"
              fontSize="16px"
              textAlign="left"
              color="#111"
            >
              Since the task was already marked as complete, checking the task
              again will mark it as incomplete.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="#74c0fc"
              _hover={{
                backgroundColor: "#4dabf7",
              }}
              onClick={onClose}
            >
              <Text color="white">Great!</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
