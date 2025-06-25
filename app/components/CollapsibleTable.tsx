import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useTree } from "@table-library/react-table-library/tree";

const CollapsibleTable = ({ dataTable, cityName }: any) => {

    const theme = useTheme([
        getTheme(),
        {
            HeaderCell: `
      text-align: center;
      justify-content: center;
    `,
            BaseCell: `
      text-align: center;
    `,
        },
    ]);

    const data = {
        nodes: dataTable
    };

    const tree = useTree(data, {
        onChange: onTreeChange,
    });

    function onTreeChange(action: any, state: any) {
        console.log(action, state);
    }

    const COLUMNS = [
        {
            label: "",
            renderCell: (item: any) => (
                <div style={{
                    color: item?.color || '#3498db',
                    textAlign: 'left',
                    padding: '8px',
                    fontWeight: 'bold',
                    wordWrap: 'break-word',  // Перенос длинных слов
                    whiteSpace: 'normal',   // Разрешить перенос строк
                    overflowWrap: 'break-word', // Альтернатива для wordWrap
                    maxWidth: '100%',
                }}>
                    {item.name}
                    {item.nodes && <div style={{
                        fontSize: '12px',
                        color: item?.color || '#95a5a6',
                        marginTop: '4px'
                    }}>
                        {item.nodes.length} элемент(ов)
                    </div>}
                </div>
            ),
            tree: true
        },
        {
            label: cityName,
            renderCell: (item: any) => (
                <div style={{
                    fontWeight: 'bold',
                    color: '#2c3e50',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    fontSize: '30px',
                }}>
                    {item?.cityIndex || ''}
                    <span style={{
                        position: 'absolute',
                        bottom: '4px',
                        right: '8px',
                        fontSize: '10px',
                        color: '#bdc3c7'
                    }}>
        </span>
                </div>
            ),
            header: {
                style: {
                    textAlign: 'center'
                }
            }
        },
        {
            label: "Среднее по кластеру",
            renderCell: (item: any) => (
                <div style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    paddingRight: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '30px',
                    backgroundColor: 'rgba(122, 152, 171, 0.08)',
                    color: '#7E7E7E',
                }}>
                    <span>{item.avarageByClaster}</span>
                    <span style={{
                        fontSize: '12px',
                        marginLeft: '8px',
                        color: '#e67e22'
                    }}>
        </span>
                </div>
            ),
            header: {
                style: {
                    textAlign: 'center'
                }
            }
        },
        {
            label: "Среднее по городам индекса",
            renderCell: (item: any) => (
                <div style={{
                    textAlign: 'center',
                    color: '#7E7E7E',
                    fontSize: '30px',
                    fontWeight: 'bold',
                }}>
                    <span>{item.avarageByCitiesIndex}</span>
                </div>
            ),
            header: {
                style: {
                    textAlign: 'center'
                }
            }
        }
    ];

    return (
        <>
            <CompactTable columns={COLUMNS} data={data || []} theme={theme} tree={tree || []} />
        </>
    );
};

export default CollapsibleTable;