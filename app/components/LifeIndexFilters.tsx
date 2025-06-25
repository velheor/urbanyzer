import Box from "@mui/material/Box";
import LifeIndexSelect from "@/app/components/LifeIndexSelect";
import LifeIndexSliders from "@/app/components/LifeIndexSliders";

interface LifeIndexFiltersProps {
    selectedCity: string
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
    onWeightChange: (filterName: keyof LifeIndexFiltersProps['weights'], value: number) => void;
    handleSelectChange: (event: any) => void
}

const LifeIndexFilters = ({ weights, onWeightChange, selectedCity, handleSelectChange }: LifeIndexFiltersProps) => {
    return (
        <Box>
            <LifeIndexSelect selectedCity={selectedCity} handleSelectChange={handleSelectChange} />
            <LifeIndexSliders
                weights={weights}
                onWeightChange={onWeightChange}
            />
        </Box>
    );
};

export default LifeIndexFilters;