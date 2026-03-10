"use server"

import { signIn, signOut } from "@/auth"

export async function SigninAction(formData: FormData) {
  const action: FormDataEntryValue = formData.get('action') as FormDataEntryValue | ""
  if (action) {
    await signIn(action.toString(), { redirectTo: '/' })
  }
}

export async function SignoutAction() {
  await signOut({ redirectTo: '/signin' })
}