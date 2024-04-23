import { Input, InputGroup, InputLeftAddon, Button } from '@chakra-ui/react';
import {} from '@chakra-ui/react';

export default function Contact() {
  return (
    <div className="form_contact p-4">
      Escribemos
      <form action="" className="w-96">
        <section>
          <label>Nombre</label>
          <Input placeholder="Digite su nombre completo" />
        </section>
        <section>
          <label>Telefono</label>
          <InputGroup>
            <InputLeftAddon>+57</InputLeftAddon>
            <Input type="tel" placeholder="Digite su telefono movil" />
          </InputGroup>
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
