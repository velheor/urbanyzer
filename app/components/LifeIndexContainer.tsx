'use client';
import * as React from 'react';
import { useMemo, useState } from 'react';
import Box from "@mui/material/Box";
import CreateLifeIndexDescription from "@/app/components/CreateLifeIndexDescription";
import LifeIndexFilters from "@/app/components/LifeIndexFilters";
import ProgressList from "@/app/components/ProgressList";
import Button from "@mui/material/Button";
import {clustersList} from "@/app/mocks/cities";

interface ProgressItem {
    id: number;
    name: string;
    percentage: number;
    slug: string;
}

interface City {
    id: number;
    name: string;
    slug: string;
    scores: {
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
}

const LifeIndexContainer = () => {
    const [currentCities, setCurrentCities] = useState(clustersList?.[0]?.cities)
    const [selectedCity, setSelectedCity] = useState<string>(clustersList?.[0]?.slug)
    const [weights, setWeights] = useState({
        demography_index: 1,
        health_index: 1,
        employment_index: 1,
        education_index: 1,
        income_index: 1,
        housing_index: 1,
        social_protection_index: 1,
        safety_index: 1,
        infrastructure_index: 1,
    });

    const handleWeightChange = (filterName: keyof typeof weights, value: number) => {
        setWeights(prev => ({
            ...prev,
            [filterName]: value
        }));
    };

    const handleSelectChange = (event: any) => {
        setSelectedCity(event?.target?.value)
        const currentCities = clustersList?.find((item) => item.slug === event?.target?.value)
        setCurrentCities(currentCities?.cities || [])
        handleReset()
    }

    // Функция сброса весов
    const handleReset = () => {
        setWeights({
            demography_index: 1,
            health_index: 1,
            employment_index: 1,
            education_index: 1,
            income_index: 1,
            housing_index: 1,
            social_protection_index: 1,
            safety_index: 1,
            infrastructure_index: 1,
        });
    };

    const rankedCities = useMemo(() => {
        let cities = currentCities.map(city => {
            const totalScore =
                city.scores.demography_index * weights.demography_index +
                city.scores.health_index * weights.health_index +
                city.scores.employment_index * weights.employment_index +
                city.scores.education_index * weights.education_index +
                city.scores.income_index * weights.income_index +
                city.scores.housing_index * weights.housing_index +
                city.scores.social_protection_index * weights.social_protection_index +
                city.scores.safety_index * weights.safety_index +
                city.scores.infrastructure_index * weights.infrastructure_index
            return {
                id: city.id,
                name: city.name,
                totalScore: totalScore,
                percentage: 0,
                slug: city.slug
            };
        }).sort((a, b) => b.totalScore - a.totalScore);
        let topScore = cities[0].totalScore;
        return cities.map(city => {
            city.percentage = Math.round((city.totalScore / topScore) * 100);
            return city;
        });
    }, [weights, currentCities]);

    return (<Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', columnGap: '20px'}}>
        <Box sx={{width: '20%'}}>
            <CreateLifeIndexDescription/>
        </Box>
        <Box sx={{width: '18%'}}>
            <LifeIndexFilters
                selectedCity={selectedCity}
                handleSelectChange={handleSelectChange}
                weights={weights}
                onWeightChange={handleWeightChange}
            />
            <Button onClick={handleReset} variant='contained' color='secondary'>Сбросить</Button>
        </Box>
        <Box sx={{width: '55%'}}>
            <ProgressList items={rankedCities}/>
        </Box>
    </Box>)
}

export default LifeIndexContainer;
