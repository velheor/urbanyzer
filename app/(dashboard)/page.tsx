import * as React from 'react';
import { PageContainer } from '@toolpad/core/PageContainer';
import DashboardContent from './DashboardContent';
import GoogleMapComponent from "@/app/components/GoogleMap";
import MainBlockInfo from "@/app/components/MainBlockInfo";
import Box from "@mui/material/Box";
import LifeIndexContainer from "@/app/components/LifeIndexContainer";

export default function Dashboard() {
  return (
    <PageContainer sx={{ minWidth: '90vw' }}>
      {/*<DashboardContent />*/}
       <MainBlockInfo />
        <Box sx={{ marginTop: '80px' }}>
            <GoogleMapComponent />
        </Box>
        <Box sx={{ marginTop: '80px' }}>
          <LifeIndexContainer />
        </Box>
    </PageContainer>
  );
}
