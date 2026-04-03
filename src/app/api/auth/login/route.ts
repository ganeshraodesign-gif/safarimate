import { NextResponse } from 'next/server';

const users: Map<string, { id: string; name: string; email: string; password: string; role: string; country?: string }> = new Map();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const user = Array.from(users.values()).find(u => u.email === email && u.password === password);
    
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const token = Buffer.from(`${user.id}:${email}`).toString('base64');

    return NextResponse.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        country: user.country,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Login failed' },
      { status: 500 }
    );
  }
}