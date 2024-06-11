import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Checkbox } from '@mui/material';
// import './style.css';  // Import the CSS file

const rows = [
    { id: 1, name: 'John Doe', roll: 'A101', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', roll: 'A102', email: 'jane.smith@example.com' },
    { id: 3, name: 'Tom Brown', roll: 'A103', email: 'tom.brown@example.com' },
];

const columns = [
    {
        field: 'checkbox',
        headerName: '',
        width: 50,
        sortable: false,
        renderHeader: () => <Checkbox />,
        renderCell: (params) => <Checkbox />,
        headerClassName: 'sticky-checkbox',
        cellClassName: 'sticky-checkbox'
    },
    { field: 'name', headerName: 'Name', width: 150, headerClassName: 'sticky-column', cellClassName: 'sticky-column' },
    { field: 'roll', headerName: 'Roll', width: 150 },
    { field: 'roll', headerName: 'Roll', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'roll', headerName: 'Roll', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'roll', headerName: 'Roll', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'roll', headerName: 'Roll', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'roll', headerName: 'Roll', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'roll', headerName: 'Roll', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
];

// const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
//     '& .MuiDataGrid-columnHeaders': {
//         position: 'relative',
//     },
//     '& .sticky-checkbox': {
//         position: 'absolute',
//         left: 0,
//         zIndex: 2,
//         backgroundColor: theme.palette.background.paper,
//     },
//     '& .sticky-column': {
//         position: 'sticky',
//         left: 50, // Adjust based on the checkbox column width
//         zIndex: 1,
//         backgroundColor: theme.palette.background.paper,
//     },
//     '& .sticky-column': {
//         position: 'sticky',
//         left: 50, // Adjust based on the checkbox column width
//         zIndex: 1,
//         backgroundColor: theme.palette.background.paper,
//     },
// }));

const StickyDataGrid = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
                disableColumnFilter
                disableColumnMenu
            />
        </div>
    );
};

export default StickyDataGrid;
