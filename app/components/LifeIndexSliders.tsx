"use client"

import Box from "@mui/material/Box";
import {Slider, Tooltip} from "@mui/material";
import Typography from "@mui/material/Typography";
import InfoIcon from '@mui/icons-material/Info';

interface LifeIndexSlidersProps {
    weights: {
        demography_index: number;
        health_index: number;
        employment_index: number;
        education_index: number;
        income_index: number;
        housing_index: number;
        social_protection_index: number;
        safety_index: number;
        infrastructure_index: number;
    };
    onWeightChange: (filterName: keyof LifeIndexSlidersProps['weights'], value: number) => void;
}

const LifeIndexSliders = ({ weights, onWeightChange }: LifeIndexSlidersProps) => {
    const handleSliderChange = (filterName: keyof LifeIndexSlidersProps['weights']) =>
        (event: Event, value: number | number[]) => {
            onWeightChange(filterName, value as number);
        };

    function valuetext(value: number) {
        return `${value}`;
    }

    return (
        <Box>
            {/* Housing */}
            <Box sx={{ marginY: '20px' }}>
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>2. Задайте важность направлений</Typography>
            </Box>
            <Box>
                <Typography id="housing-slider" sx={{display: 'flex', alignItems: 'center', color: 'rgb(64, 84, 179)'}}>
                    <Tooltip sx={{width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px'}}
                             title="Наличие качественного, благоустроенного и доступного жилья"><InfoIcon/></Tooltip> Демографический потенциал
                </Typography>
                <Slider
                    sx={{color: 'rgb(64, 84, 179)'}}
                    aria-labelledby="housing-slider"
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={11}
                    value={weights.demography_index}
                    onChange={handleSliderChange('demography_index')}
                />
            </Box>

            {/* Income */}
            <Box>
                <Typography id="income-slider" sx={{display: 'flex', alignItems: 'center', color: 'rgb(215, 90, 0)'}}>
                    <Tooltip sx={{width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px'}}
                             title="Наличие работы, обеспечивающей возможность для заработка и профессионального развития"><InfoIcon/></Tooltip>Занятости и условий труда
                </Typography>
                <Slider
                    sx={{color: 'rgb(215, 90, 0)'}}
                    aria-labelledby="income-slider"
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={11}
                    value={weights.health_index}
                    onChange={handleSliderChange('health_index')}
                />
            </Box>

            {/* Health */}
            <Box>
                <Typography id="health-slider" sx={{display: 'flex', alignItems: 'center', color: 'rgb(242, 69, 61)'}}>
                    <Tooltip sx={{width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px'}}
                             title="Хорошее здоровье и развитое медицинское обслуживание"><InfoIcon/></Tooltip>Доступность образования
                </Typography>
                <Slider
                    sx={{color: 'rgb(242, 69, 61)'}}
                    aria-labelledby="health-slider"
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={11}
                    value={weights.employment_index}
                    onChange={handleSliderChange('employment_index')}
                />
            </Box>

            {/* Education */}
            <Box>
                <Typography id="education-slider" sx={{display: 'flex', alignItems: 'center', color: 'rgb(44, 152, 240)'}}>
                    <Tooltip sx={{width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px'}}
                             title="Широкие возможности получения качественного образования"><InfoIcon/></Tooltip>Здоровье и медицина
                </Typography>
                <Slider
                    sx={{color: 'rgb(44, 152, 240)'}}
                    aria-labelledby="education-slider"
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={11}
                    value={weights.education_index}
                    onChange={handleSliderChange('education_index')}
                />
            </Box>

            {/* Mobility */}
            <Box>
                <Typography id="mobility-slider" sx={{display: 'flex', alignItems: 'center', color: 'rgb(97, 125, 138)'}}>
                    <Tooltip sx={{width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px'}}
                             title="Удобство передвижения в городе, включая транспорт и улично-дорожную сеть"><InfoIcon/></Tooltip>Материальное благополучие
                </Typography>
                <Slider
                    sx={{color: 'rgb(97, 125, 138)'}}
                    aria-labelledby="mobility-slider"
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={11}
                    value={weights.income_index}
                    onChange={handleSliderChange('income_index')}
                />
            </Box>

            {/* Amenities */}
            <Box>
                <Typography id="amenities-slider" sx={{display: 'flex', alignItems: 'center', color: 'rgb(208, 162, 0)'}}>
                    <Tooltip sx={{width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px'}}
                             title="Удобная и привлекательная городская среда"><InfoIcon/></Tooltip>Социальная поддержка
                </Typography>
                <Slider
                    sx={{color: 'rgb(208, 162, 0)'}}
                    aria-labelledby="amenities-slider"
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={11}
                    value={weights.housing_index}
                    onChange={handleSliderChange('housing_index')}
                />
            </Box>

            {/* Ecology */}
            <Box>
                <Typography id="ecology-slider" sx={{display: 'flex', alignItems: 'center', color: 'rgb(80, 174, 85)'}}>
                    <Tooltip sx={{width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px'}}
                             title="Благоприятные для жизни качества антропогенной и природной среды"><InfoIcon/></Tooltip>Безопасность и правопорядок
                </Typography>
                <Slider
                    sx={{color: 'rgb(80, 174, 85)'}}
                    aria-labelledby="ecology-slider"
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={11}
                    value={weights.social_protection_index}
                    onChange={handleSliderChange('social_protection_index')}
                />
            </Box>

            {/* Safety */}
            <Box>
                <Typography id="safety-slider" sx={{display: 'flex', alignItems: 'center', color: 'rgb(31, 173, 193)'}}>
                    <Tooltip sx={{width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px'}}
                             title="Общественная безопасность"><InfoIcon/></Tooltip>Жилищные условия
                </Typography>
                <Slider
                    sx={{color: 'rgb(31, 173, 193)'}}
                    aria-labelledby="safety-slider"
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={11}
                    value={weights.safety_index}
                    onChange={handleSliderChange('safety_index')}
                />
            </Box>

            {/* Social Activity */}
            <Box>
                <Typography id="socialActivity-slider" sx={{display: 'flex', alignItems: 'center', color: 'rgb(103, 64, 180)'}}>
                    <Tooltip sx={{width: '16px', height: '16px', cursor: 'pointer', marginRight: '5px'}}
                             title="Интенсивность социального взаимодействия и доверие в обществе"><InfoIcon/></Tooltip>Развитие человеческого капитала
                </Typography>
                <Slider
                    sx={{color: 'rgb(103, 64, 180)'}}
                    aria-labelledby="socialActivity-slider"
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={11}
                    value={weights.infrastructure_index}
                    onChange={handleSliderChange('infrastructure_index')}
                />
            </Box>
            
        </Box>
    );
};

export default LifeIndexSliders;