'use client';

import { useEffect } from 'react';
import { app, analytics } from '@/lib/firebase';

export default function FirebaseInit() {
  useEffect(() => {
    // Firebase is already initialized in lib/firebase.ts
    // This component ensures it's loaded on the client side
    if (analytics) {
      console.log('Firebase Analytics initialized');
    }
  }, []);

  return null;
}

