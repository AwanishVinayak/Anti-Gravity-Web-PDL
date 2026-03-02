'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function VisitorTracker() {
    const pathname = usePathname();

    useEffect(() => {
        // Only track in browser
        if (typeof window === 'undefined') return;

        // Small delay to allow analytics to not block main thread
        const timer = setTimeout(() => {
            fetch('/api/track', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ path: pathname || '/' }),
                // 'keepalive' to ensure the request is sent even if the user navigates away
                keepalive: true,
            }).catch((err) => {
                // Silently fail if tracking errors out
                console.error('Failed to track visitor:', err);
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null; // This component doesn't render anything
}
