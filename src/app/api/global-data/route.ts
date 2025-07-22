import { NextResponse } from 'next/server';
import { fetchGlobalData } from '@/utils/fetchGlobalData';

export async function GET() {
  try {
    const globalData = await fetchGlobalData('published');

    return NextResponse.json(globalData, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('API Error fetching global data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch global data' },
      { status: 500 }
    );
  }
}
