import { NextResponse } from 'next/server';

const users: Map<string, { id: string; name: string; email: string; password: string; role: string; country?: string }> = new Map();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, role, country } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    const existingUser = Array.from(users.values()).find(u => u.email === email);
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    const id = `user_${Date.now()}`;
    const user = { id, name, email, password, role: role || 'traveler', country };
    users.set(id, user);

    const token = Buffer.from(`${id}:${email}`).toString('base64');

    return NextResponse.json({
      success: true,
      token,
      user: { id, name, email, role: user.role, country: user.country },
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Registration failed' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const authHeader = request.headers.get('Authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const token = authHeader.replace('Bearer ', '');
    const decoded = Buffer.from(token, 'base64').toString();
    const [id, email] = decoded.split(':');
    
    const user = users.get(id);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      country: user.country,
    });
  } catch {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}