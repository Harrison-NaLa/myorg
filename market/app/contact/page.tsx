import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';

export default function Contact() {

  return (
    <div className="form_contact p-8">
      <h1 className="text-2xl text-center font-bold my-4">Escribemos</h1>
      <form action="" className="w-96 grid gap-3">
        <section>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="1">Persona</Radio>
              <Radio value="2">Empresa</Radio>
            </Stack>
          </RadioGroup>
        </section>
        <section>
          <label>Nombre</label>
          <Input placeholder="Digite su nombre completo" />
        </section>
        <section>
        <label>Telefono</label>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftAddon>+57</InputLeftAddon>
              <Input type="tel" placeholder="Digite su telefono movil" />
            </InputGroup>
          </Stack>
        </section>
        <section>
          <label>Correo electrónico</label>
          <Input placeholder="Digite su correo electrónico" />
        </section>
        <Button colorScheme="blue" type="button">
          Enviar
        </Button>
      </form>
    </div>
  );
}
