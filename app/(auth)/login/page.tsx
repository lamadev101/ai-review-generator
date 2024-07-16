"use client"

import { SaveBtn } from '@/components/btns'
import { InputFormItem } from '@/components/form-items'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FormWrapper } from '@/components/wrapper'
import React from 'react'
import { useForm } from 'react-hook-form'

const LoginPage = () => {

  const form = useForm()
  const onSubmit = () => {

  }
  return (
    <main className="flex items-center justify-center h-[100vh]">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to access your account and explore personalized features.</CardDescription>
        </CardHeader>
        <CardContent>
          <FormWrapper form={form} onSubmit={onSubmit}>
            <div>
              <InputFormItem form={form} label="Username" name="username" />
              <InputFormItem form={form} label="Password" name="password" />
            </div>
            <SaveBtn label="Login" />
          </FormWrapper>
        </CardContent>
      </Card>
    </main>
  )
}

export default LoginPage