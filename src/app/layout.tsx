import type { Metadata, Viewport } from 'next';
import './globals.css';
import PwaRegister from './PwaRegister';
export const metadata: Metadata = { title: 'Ravion — Trading, in tune', description: 'A personal trading behaviour companion for Indian markets.', manifest: '/manifest.json', appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'Ravion' } };
export const viewport: Viewport = { themeColor: '#111a19', width: 'device-width', initialScale: 1, maximumScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><PwaRegister/>{children}</body></html>; }
