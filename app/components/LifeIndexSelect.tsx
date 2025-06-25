import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {FormControl, MenuItem, Select} from "@mui/material";
import {clustersList} from "@/app/mocks/cities";

interface Props {
    selectedCity: string
    handleSelectChange: (event: any, ) => void
}

const LifeIndexSelect = ({ selectedCity, handleSelectChange }: Props) => {
    return (<Box>
        <Typography sx={{fontSize: '18px', fontWeight: 'bold'}}>1. Выберите кластер городов</Typography>
        <FormControl fullWidth>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                displayEmpty
                value={selectedCity}
                onChange={handleSelectChange}
            >
                {clustersList.map((item) => <MenuItem value={item.slug}>{item.name}</MenuItem>)}
            </Select>
        </FormControl>
    </Box>)
}

export default LifeIndexSelect