import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styling for body cells that are sticky
const StyledTableCell = styled(TableCell)({
    position: 'sticky',
    left: 0,
    backgroundColor: '#fff', // Directly setting a white background color
    zIndex: 1,
});

const StyledNameTableCell = styled(TableCell)({
    position: 'sticky',
    left: 50, // Adjust according to the checkbox width
    backgroundColor: '#fff', // Directly setting a white background color
    zIndex: 1,
});

// Styling for header cells that are sticky
const StyledHeaderTableCell = styled(StyledTableCell)({
    top: 0,
    zIndex: 3, // Higher zIndex for header
});

const StyledNameHeaderTableCell = styled(StyledNameTableCell)({
    top: 0,
    zIndex: 3, // Higher zIndex for header
});

const columns = [
    { id: 'checkbox', label: 'fd', },
    { id: 'name', label: 'Name', },
    { id: 'round1', label: 'Round 1' },
    { id: 'round2', label: 'Round 2' },
    { id: 'round3', label: 'Round 3' },
    { id: 'round4', label: 'Round 4' },
    { id: 'round5', label: 'Round 5' },
    { id: 'round6', label: 'Round 6' },
    { id: 'round7', label: 'Round 7' },
    { id: 'round8', label: 'Round 8' },
    { id: 'round9', label: 'Round 9' },
    { id: 'round10', label: 'Round 10' },
];

const dummyJson = [
    {
        "_id": "88er387387dfjbn346",
        "name": "Michael Brown",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Redeemed" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Qualified" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Eliminated" }
        ]
    },
    {
        "_id": "88er387387dfjbn347",
        "name": "Sarah Wilson",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Qualified" },
            { "round": 5, "status": "Redeemed" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Qualified" },
            { "round": 9, "status": "Qualified" },
            { "round": 10, "status": "Disqualified" }
        ]
    },
    {
        "_id": "88er387387dfjbn348",
        "name": "David Martinez",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Redeemed" },
            { "round": 4, "status": "Qualified" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Qualified" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Eliminated" }
        ]
    },
    {
        "_id": "88er387387dfjbn349",
        "name": "Anna Anderson",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Redeemed" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Qualified" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Eliminated" }
        ]
    },
    {
        "_id": "88er387387dfjbn350",
        "name": "Robert Taylor",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Qualified" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Qualified" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Eliminated" }
        ]
    },
    {
        "_id": "88er387387dfjbn351",
        "name": "Sophia Rodriguez",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Qualified" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Qualified" },
            { "round": 9, "status": "Redeemed" },
            { "round": 10, "status": "Disqualified" }
        ]
    },
    {
        "_id": "88er387387dfjbn352",
        "name": "James Lee",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Qualified" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Redeemed" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Eliminated" }
        ]
    },
    {
        "_id": "88er387387dfjbn353",
        "name": "Emma Harris",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Qualified" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Redeemed" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Eliminated" }
        ]
    },
    {
        "_id": "88er387387dfjbn354",
        "name": "Matthew Garcia",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Qualified" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Redeemed" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Eliminated" }
        ]
    },
    {
        "_id": "88er387387dfjbn355",
        "name": "Olivia King",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Qualified" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Qualified" },
            { "round": 9, "status": "Redeemed" },
            { "round": 10, "status": "Disqualified" }
        ]
    }
]


function StickyHeaderTable() {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{p:1}}>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => {
                                if (column.id === 'checkbox') {
                                    return (
                                        <StyledHeaderTableCell key={column.id}>
                                            <Checkbox />
                                        </StyledHeaderTableCell>
                                    );
                                } else if (column.id === 'name') {
                                    return (
                                        <StyledNameHeaderTableCell key={column.id}>
                                            {column.label}
                                        </StyledNameHeaderTableCell>
                                    );
                                } else {
                                    return (
                                        <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                                            {column.label}
                                        </TableCell>
                                    );
                                }
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dummyJson.map((row) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                <StyledTableCell>
                                    <Checkbox />
                                </StyledTableCell>
                                <StyledNameTableCell>
                                    {row.name}
                                </StyledNameTableCell>
                                {row.rounds.map(rounds => (
                                    <TableCell key={rounds.id} style={{ backgroundColor: rounds.status === 'Qualified' || rounds.status === 'Redeemed' ? '#90EE90' : '#ff3333' }}>
                                        {rounds.status}
                                    </TableCell>
                                ))}
                                {/* <TableCell>{row.address}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default StickyHeaderTable;
