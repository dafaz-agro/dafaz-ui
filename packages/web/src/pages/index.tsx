import { Box, Button, CheckBox, Heading, MultiSelect, Radio, Text, TextArea, TextInput } from "@dafaz-ui/react";
import Head from "next/head";
import Image from "next/image";

import logo from '../../public/logo.png'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { colors, fontSizes, fontWeights } from "@dafaz-ui/tokens";
import { useEffect, useState } from "react";

const perfil = [
  {
    id: '0',
    label: 'Indústria',
    value: 'industria',
  },
  {
    id: '1',
    label: 'Distribuidor',
    value: 'distribuidor',
  },
  {
    id: '2',
    label: 'Produtor',
    value: 'produtor',
  }
]

export default function Home() {
  
  const userValidationSchema = zod.object({
    username: zod.string().min(1, 'Insira um valor válido!'),
    selectPerfil: zod.array(zod.string()),
    radioPerfil: zod.string(),
    checkBoxIndustria: zod.boolean(),
    descricao: zod.string(),
    password: zod.string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[!@#$%^&*()_\-+={[}\]|:;"'<,>.?]/, { message: "Password must contain at least one special character" }),
    confirmPassword: zod.string()
    }).refine(data => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"]
    })

  type User = zod.infer<typeof userValidationSchema>

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm<User>({
    resolver: zodResolver(userValidationSchema),
  })


  function handleUser(data: User){
    console.log(JSON.stringify(data))
  }


  return (
    <>
      <Head>
        <title>Dafaz App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
        <main>
          <Box color='dark' stretch={true} direction="row">
          <Box color='dark' stretch={true} direction="column">
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                marginLeft: '-1.6rem'
              }}
              >
              <Image src={logo} alt="" width={180} />
              <Text style={{marginBottom: '-5.2rem',marginLeft: '-5.3rem', color: colors.dafaz400, fontSize: '2.5rem', fontWeight: '500'}}>agro</Text>
            </div>
            <form id="cadastro" onSubmit={handleSubmit(handleUser)}>
              <div style={{display: 'flex', flexDirection:"column", gap: '2rem'}}>
              <hr style={{width:'100%', opacity: 0.1}}/>
                <Heading color="white" size="xl">
                Insira seus dados
                </Heading>
                <TextInput id='username' placeholder='nome de usuário' {...register('username')}/>
                <TextInput id='password' placeholder='senha' type='password' {...register('password')}/>
                {errors.password && <span>{errors.password?.message}</span>}
                <TextInput id='confirmPassword' placeholder='confirme sua senha' withShadow type='password' {...register('confirmPassword')}/>
                {errors.confirmPassword && <span>{errors.confirmPassword?.message}</span>}

                <Controller 
                  control={control}
                  name="selectPerfil"
                  defaultValue={['']}
                  render = {(( { field: {onChange, name} } ) => {
                    return (
                      <MultiSelect 
                      name={name}
                        onChange={(e) => {
                        onChange(e.target.value.split(',')) 
                      }} id='selectPerfil' items={perfil} placeholder="Selecione perfil..."/>
                    )
                   })}
                />   
                {errors.selectPerfil && <span>{errors.selectPerfil?.message}</span>}
                
                <Heading color="white" style={{marginTop: '1.5rem'}} size="lg">Acessar como</Heading>
                <Controller 
                  control={control}
                  name="radioPerfil"
                  render = {(( { field } ) => {
                    return (
                      <Radio items={perfil} onValueChange={field.onChange} value={field.value}/>
                    )
                   })}
                />
                <hr style={{width:'100%', opacity: 0.1}}/>
                <TextArea id="descricao" placeholder="O que você mais gostaria de encontrar por aqui?..." {...register('descricao')}/>
                <Controller
                   control={control}
                   name="checkBoxIndustria"
                   render = {(( { field } ) => {
                    return (
                    <CheckBox      
                        size="md"
                        label='Li, e aceito os termos de serviço'
                        handleOnChange={field.onChange}
                    />
                    )
                   })}
                   />
                   {errors.checkBoxIndustria && <span>{errors.checkBoxIndustria?.message}</span>}
              </div>
            </form>
            <Box stretch={false} style={{display: 'flex', justifyContent: 'space-between', marginTop: '50px', marginRight: '4rem'}}>
              <span>{' '}</span>
              <Button type='submit' variant="secondary" form="cadastro" size="lg">
                Enviar
              </Button>
            </Box>
          </Box>
          </Box>
        </main>
    </>
  );
}
