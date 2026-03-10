'use server';
import { auth } from '@/auth'

export async function getUserName() {
    const session = await auth();
    return session?.user?.name || "";
}

