import * as React from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import type { Navigation } from '@toolpad/core/AppProvider';
import { SessionProvider, signIn, signOut } from 'next-auth/react';
import theme from '../theme';
import {Suspense} from "react";

const NAVIGATION: Navigation = [
    // {
    //   kind: 'header',
    //   title: 'Main items',
    // },
    // {
    // title: 'Dashboard',
    // icon: <DashboardIcon />,
    // },
    // {
    //   segment: 'orders',
    //   title: 'Orders',
    //   icon: <ShoppingCartIcon />,
    // },
    // {
    //   segment: 'employees',
    //   title: 'Employees',
    //   icon: <PersonIcon />,
    //   pattern: 'employees{/:employeeId}*',
    // },
];

const AUTHENTICATION = {
    signIn,
    signOut,
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru" data-toolpad-color-scheme="light">
        <body>
        {/*<SessionProvider session={session}>*/}
        {/*  <AppRouterCacheProvider options={{ enableCssLayer: true }}>*/}
        <Suspense fallback={<div>Loading...</div>}>
            <NextAppProvider
                theme={theme}
                // navigation={NAVIGATION}
                // session={session}
                // authentication={AUTHENTICATION}
            >
                {children}
            </NextAppProvider>
        </Suspense>
        {/*</AppRouterCacheProvider>*/}
        {/*</SessionProvider>*/}
        </body>
        </html>
    );
}