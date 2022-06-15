import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Alert from './alert'

type Inputs = {
  nome: string
  email: string
  telefone: string
  textarea: string
}

function Form() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch('api/mail', {
      method: 'post',
      body: JSON.stringify(data),
    })
    onOpen()
  }
  return (
    <Stack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4} width="80%">
      <FormControl isInvalid={!!errors.nome}>
        <Input
          type="text"
          placeholder="Nome"
          variant="flushed"
          _placeholder={{ opacity: 0.7, color: 'inherit' }}
          {...register('nome', {
            required: 'Campo obrigatório',
            maxLength: {
              value: 255,
              message: 'Muito longo',
            },
          })}
        />
        <FormErrorMessage>
          {errors.nome && errors.nome.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.email}>
        <Input
          type="email"
          placeholder="Email"
          variant="flushed"
          _placeholder={{ opacity: 0.7, color: 'inherit' }}
          {...register('email', {
            required: 'Campo obrigatório',
            maxLength: {
              value: 255,
              message: 'Muito longo',
            },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.telefone}>
        <Input
          type="tel"
          placeholder="Telefone"
          variant="flushed"
          _placeholder={{ opacity: 0.7, color: 'inherit' }}
          {...register('telefone', {
            required: 'Campo obrigatório',
            maxLength: {
              value: 30,
              message: 'Muito longo',
            },
          })}
        />
        <FormErrorMessage>
          {errors.telefone && errors.telefone.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.textarea}>
        <Textarea
          resize="vertical"
          placeholder="Escreva pedido aqui"
          variant="flushed"
          _placeholder={{ opacity: 0.7, color: 'inherit' }}
          {...register('textarea', {
            required: 'Campo obrigatório',
            maxLength: {
              value: 2000,
              message: 'Muito longo',
            },
          })}
        />
        <FormErrorMessage>
          {errors.textarea && errors.textarea.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl display="flex" justifyContent="center">
        <Button colorScheme="blue" type="submit" isLoading={isSubmitting}>
          <h1>Enviar</h1>
        </Button>
      </FormControl>
      <Alert open={isOpen} close={onClose} />
    </Stack>
  )
}

export default Form
