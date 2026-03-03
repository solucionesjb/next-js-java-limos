export function GET(params: { paramas: { id: string } }) {
    return Response.json({ message: 'Hello, World!' });
}

export async function POST(request: Request) {
    const formData =  await request.formData();
    const name = formData.get('name')
    const email = formData.get('email')
    return Response.json({ name, email })
}