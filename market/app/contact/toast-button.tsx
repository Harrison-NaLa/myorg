import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'

export function ToastButton() {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          title: 'Contacto.',
          description: "Intento de contacto....",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Enviar
    </Button>
  )
}
