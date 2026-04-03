import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const tripRequest = {
      id: `TRIP-${Date.now()}`,
      ...body,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    
    console.log('Trip request received:', tripRequest);
    
    return NextResponse.json({
      success: true,
      message: 'Trip request submitted successfully',
      tripId: tripRequest.id,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to submit trip request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Trip requests endpoint - connect to backend for full functionality',
  });
}