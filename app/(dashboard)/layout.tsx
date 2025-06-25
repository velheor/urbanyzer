'use client';
import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, CssBaseline } from '@mui/material';
import Stack from '@mui/material/Stack';
import { ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import Copyright from '../components/Copyright';
import SidebarFooterAccount, { ToolbarAccountOverride } from './SidebarFooterAccount';
import Link from '@mui/material/Link';
import {Suspense} from "react";

function CustomActions() {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <ThemeSwitcher />
            <ToolbarAccountOverride />
        </Stack>
    );
}

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>

        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    width: '100%'
                }}
            >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href='/' sx={{
                            fontSize: '25px',
                            color: 'white',
                            textDecoration: 'none',
                        }}>
                            Urbanyzer
                        </Link>
                    </Box>
                    <SidebarFooterAccount mini={false} />
                    <CustomActions />
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{
                    flex: 1,
                    pt: 8,
                    px: 3,
                    minHeight: 'calc(100vh - 64px)'
                }}
            >
                {props.children}
            </Box>
            <Box component="footer" sx={{ py: 3 }}>
                <Copyright sx={{ my: 4 }} />
            </Box>
        </Box>
        </Suspense>
    );
}