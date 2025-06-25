import * as React from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import theme from '../theme';

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru" data-toolpad-color-scheme="light">
        <body>
        <NextAppProvider
            theme={theme}
        >
            {children}
        </NextAppProvider>
        </body>
        </html>
    );
}
