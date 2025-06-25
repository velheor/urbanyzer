"use client";
import React from 'react';
import { Box, Typography, ListItem } from '@mui/material';
import {useRouter} from "next/navigation";

interface ProgressItem {
    id: number;
    name: string;
    percentage: number;
    slug: string
}

const ProgressItem = ({ item }: { item: ProgressItem }) => {
    const router = useRouter()

    const handleClick = () => {
        router.push(`city_profile/${item.slug}`)
    }

    return (
            <ListItem onClick={handleClick} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                cursor: 'pointer',
                borderRadius: 2,
                p: 2,
                borderBottom: '1px solid #eee',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                    boxShadow: 3,
                    bgcolor: 'action.hover',
                    transform: 'translateY(-2px)',
                }
            }}>
                <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'medium' }}>
                    {item.name}
                </Typography>

                <Box sx={{ width: '100%' }}>
                    <Box sx={{
                        width: '100%',
                        height: 20,
                        backgroundColor: '#e0e0e0',
                        borderRadius: 5,
                        overflow: 'hidden'
                    }}>
                        <Box sx={{
                            height: '100%',
                            width: `${item.percentage}%`,
                            backgroundColor: '#4caf50',
                            borderRadius: 5,
                            transition: 'width 0.3s ease'
                        }} />
                    </Box>

                    <Typography variant="caption" sx={{
                        mt: 1,
                        display: 'block',
                        textAlign: 'right',
                        color: 'text.secondary'
                    }}>
                        {item.percentage}%
                    </Typography>
                </Box>
            </ListItem>
    );
};

export default ProgressItem