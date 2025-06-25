import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NumericItemList from "@/app/components/NumericItemList";

const CreateLifeIndexDescription = () => {
    return (
        <Box>
           <Box><Typography sx={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '30px' }}>Создать свой Индекс качества жизни просто</Typography></Box>
           <Box sx={{ marginTop: '30px' }}>
         <NumericItemList stage={'1'} text={'Выберите кластер города.'} />
           </Box>
           <Box sx={{ marginTop: '10px' }}>
               <NumericItemList stage={'2'} text={'Задайте важность направлений: передвигайте бегунок по шкалам направлений.'} />
           </Box>
           <Box sx={{ marginTop: '10px' }}>
               <NumericItemList stage={'3'} text={'Ваш Индекс готов: справа вы увидите топ-5 городов, наиболее подходящих для ваших условий.'} />
           </Box>
    </Box>)
}

export default CreateLifeIndexDescription;
