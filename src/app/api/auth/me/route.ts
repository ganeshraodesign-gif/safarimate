import { NextResponse } from 'next/server';

const users: Map<string, { id: string; name: string; email: string; password: string; role: string; country?: string }> = new Map();

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