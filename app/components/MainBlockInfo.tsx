import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const MainBlockInfo = () => {
    return (<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ maxWidth: '47%' }}>
            <Typography sx={{ fontSize: '80px', fontWeight: 'bold', lineHeight: '80px', whiteSpace: 'pre-line' }}>
                {'ИНДЕКС\nКАЧЕСТВА\nЖИЗНИ'}
            </Typography>
            <Typography sx={{ fontSize: '18px', marginTop: '40px' }}>Высокая степень урбанизации Беларуси ставит во главу угла вопросы комфорта городской среды. Какие факторы на него влияют и как добиться улучшений? Для мониторинга и анализа ситуации была создана информационная система — Urbanyzer.</Typography>
            <Typography sx={{ fontSize: '18px', marginTop: '10px' }}><strong>Цель проекта:</strong> информационно-аналитической система для комплексной оценки качества городской среды в Республике Беларусь.</Typography>
            <Typography sx={{ fontSize: '18px', marginTop: '10px' }}><strong>Задача проекта:</strong> развитие и повышение качества жизни белорусов.</Typography>
        </Box>
        <Box sx={{ maxWidth: '47%' }}>
            <img src='/images/mainImage.png' width='100%' height='100%' alt={'Картинка города'}/>
        </Box>
    </Box>)
}

export default MainBlockInfo;
