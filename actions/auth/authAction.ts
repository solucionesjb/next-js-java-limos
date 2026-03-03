'use server'
 
export async function SignInAction(userId: number, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    console.log(`User ID: ${userId} - Email: ${email} - Password: ${password}`);
}