import React from "react";
import { Box, List } from '@mui/material';
import ProgressItem from "@/app/components/ProgressItem";

const ProgressList = ({ items }: { items: ProgressItem[] }) => {
    return (
        <Box sx={{
            width: '100%',
            maxWidth: 800,
            mx: 'auto',
            boxShadow: 1,
            borderRadius: 2,
            bgcolor: 'background.paper'
        }}>
            <List sx={{ p: 0 }}>
                {items.map((item) => (
                    <ProgressItem key={item.id} item={item} />
                ))}
            </List>
        </Box>
    );
};

export default ProgressList