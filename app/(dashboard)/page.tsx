import * as React from 'react';
import { PageContainer } from '@toolpad/core/PageContainer';
import GoogleMapComponent from "@/app/components/GoogleMap";
import MainBlockInfo from "@/app/components/MainBlockInfo";
import Box from "@mui/material/Box";
import LifeIndexContainer from "@/app/components/LifeIndexContainer";
import {Suspense} from "react";

export default function Dashboard() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
  );
}
