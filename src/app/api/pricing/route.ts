import { NextResponse } from 'next/server';

const PRICING = {
  Delhi: { guide: 10, companion: 15, support: 8 },
  Mumbai: { guide: 12, companion: 18, support: 10 },
  Jaipur: { guide: 9, companion: 14, support: 7 },
  Varanasi: { guide: 8, companion: 12, support: 6 },
  Ahmedabad: { guide: 0, companion: 5, support: 0 },
  Goa: { guide: 11, companion: 16, support: 9 },
  Agra: { guide: 9, companion: 14, support: 7 },
  Bangalore: { guide: 10, companion: 15, support: 8 },
};

export async function GET() {
  const cities = Object.entries(PRICING).map(([city, prices]) => ({
    city,
    ...prices,
    isFree: city === 'Ahmedabad',
  }));

  return NextResponse.json({ cities });
}