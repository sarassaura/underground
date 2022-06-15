import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  nome: string
  email: string
  telefone: string
  textarea: string
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()
  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <Stack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4}>
      <FormControl isInvalid={!!errors.nome}>
        <Input
          type="text"
          placeholder="Nome"
          variant="flushed"
          _placeholder={{ opacity: 0.7, color: 'inherit' }}
          {...register('nome', {
            required: 'Campo obrigatório',
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
          })}
        />
        <FormErrorMessage>
          {errors.textarea && errors.textarea.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <Button colorScheme="blue" type="submit" isLoading={isSubmitting}>
          <h1>Enviar</h1>
        </Button>
      </FormControl>
    </Stack>
  )
}

export default Form
