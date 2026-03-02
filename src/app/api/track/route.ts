import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function POST(req: NextRequest) {
    try {
        const { path } = await req.json();

        // Extract headers for IP and User Agent
        const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
        const userAgent = req.headers.get('user-agent') || 'unknown';

        const { error } = await supabase
            .from('visitors')
            .insert([
                {
                    ip_address: ipAddress,
                    user_agent: userAgent,
                    path: path,
                },
            ]);

        if (error) {
            console.error('Error tracking visitor:', error);
            return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to parse request for tracking:', error);
        return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
    }
}
