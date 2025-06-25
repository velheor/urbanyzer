import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";

interface Props {
  stage: string
  text: string
}

const NumericItemList = ({ stage, text }: Props) => {
   return (
       <Box sx={{ display: 'flex' }}>
           <Box>
               <Typography style={{
               border: '2px solid hsl(210, 98%, 48%)',
               borderRadius: '50%',
               display: 'inline-flex',
               alignItems: 'center',
               justifyContent: 'center',
               width: '28px',
               height: '28px',
               marginRight: '20px',
               fontWeight: 'bold',
           }}
           >{stage}</Typography></Box>
            <Box>
                <Typography sx={{fontSize: '18px'}}>{text}</Typography>

            </Box>
       </Box>
   )
}

export default NumericItemList