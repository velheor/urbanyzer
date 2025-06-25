import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomPie from "@/app/components/CustomPie";
import {citiesInfo} from "@/app/mocks/cities";

interface Props {
    cityInfo: {
        id: number;
        name: string;
        img: string;
        slug: string;
        description: string;
    } | undefined
}

const CityOneMainInfo = ({ cityInfo }: Props ) => {
    const cityCharInfo = citiesInfo.find((item) => item.name === cityInfo?.slug)

    return (<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px', marginBottom: '80px', minWidth: '90vw' }}>
        <Box sx={{
            width: '50%',
            height: '100%',
            position: 'relative',
        }}>
            <img
                style={{ width: '100%' }}
                src={cityInfo?.img || ''}
                alt='картинка города'
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    padding: '16px',
                }}
            >
                <Typography variant="h4">{cityInfo?.name || 'Название города'}</Typography>
                <Typography variant="subtitle1">{cityInfo?.description || 'Описание города'}</Typography>
            </Box>
        </Box>
        <Box sx={{ width: '50%' }}>
            <CustomPie data={cityCharInfo?.items || []} />
        </Box>
    </Box>)
}

export default CityOneMainInfo