import { ResponsivePie } from '@nivo/pie'
import Box from "@mui/material/Box";


const CustomPie = ({ data }: any) => {
    return (<Box sx={{ height: '500px' }}>
        <ResponsivePie /* or Pie for fixed dimensions */
            data={data}
            margin={{ top: 40, right: 90, bottom: 150, left: 120 }}
            innerRadius={0.5}
            padAngle={0.6}
            cornerRadius={2}
            colors={{ datum: 'data.color' }}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    translateY: 56,  // Первая строка
                    itemWidth: 200,
                    itemHeight: 18,
                    symbolShape: 'circle',
                    data: data.slice(0, 3).map((d: any) => ({ id: d.id, label: d.label, color: d.color })),
                },
                {
                    anchor: 'bottom',
                    direction: 'row',
                    translateY: 80,  // Вторая строка (+24px)
                    itemWidth: 200,
                    itemHeight: 18,
                    symbolShape: 'circle',
                    data: data.slice(3, 6).map((d: any) => ({ id: d.id, label: d.label, color: d.color })),
                },
                {
                    anchor: 'bottom',
                    direction: 'row',
                    translateY: 104,  // Третья строка (+24px)
                    itemWidth: 200,
                    itemHeight: 18,
                    symbolShape: 'circle',
                    data: data.slice(6, 9).map((d: any) => ({ id: d.id, label: d.label, color: d.color })),
                },
            ]}
        />
    </Box>)
}

export default CustomPie