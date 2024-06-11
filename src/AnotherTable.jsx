import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper, TextField } from '@mui/material';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
        "_id": "88er387387dfjbn356",
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
            { "round": 9, "status": "Qualified" },
            { "round": 10, "status": "Qualified" }
        ]
    },
    {
        "_id": "unique_id_1",
        "name": "John Doe",
        "rounds": [
            { "round": 1, "status": "Disqualified" },
            { "round": 2, "status": "Disqualified" },
            { "round": 3, "status": "Disqualified" },
            { "round": 4, "status": "Disqualified" },
            { "round": 5, "status": "Disqualified" },
            { "round": 6, "status": "Disqualified" },
            { "round": 7, "status": "Disqualified" },
            { "round": 8, "status": "Disqualified" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Disqualified" }
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
        "_id": "88er387387dfjbn356",
        "name": "Sophia Rodriguez",
        "rounds": [
            { "round": 1, "status": "Disqualified" },
            { "round": 2, "status": "Disqualified" },
            { "round": 3, "status": "Disqualified" },
            { "round": 4, "status": "Disqualified" },
            { "round": 5, "status": "Disqualified" },
            { "round": 6, "status": "Disqualified" },
            { "round": 7, "status": "Disqualified" },
            { "round": 8, "status": "Disqualified" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Disqualified" }
        ]
    },

    {
        "_id": "unique_id_1",
        "name": "John Doe",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Qualified" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Qualified" },
            { "round": 9, "status": "Qualified" },
            { "round": 10, "status": "Qualified" }
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
        "_id": "unique_id_1",
        "name": "John Doe",
        "rounds": [
            { "round": 10, "status": "Redeemed" },
            { "round": 1, "status": "Redeemed" },
            { "round": 2, "status": "Redeemed" },
            { "round": 3, "status": "Redeemed" },
            { "round": 4, "status": "Redeemed" },
            { "round": 5, "status": "Redeemed" },
            { "round": 6, "status": "Redeemed" },
            { "round": 7, "status": "Redeemed" },
            { "round": 8, "status": "Redeemed" },
            { "round": 9, "status": "Redeemed" }
        ]
    },
    {
        "_id": "unique_id_1",
        "name": "John Doe",
        "rounds": [
            { "round": 1, "status": "Eliminated" },
            { "round": 2, "status": "Eliminated" },
            { "round": 3, "status": "Eliminated" },
            { "round": 4, "status": "Eliminated" },
            { "round": 5, "status": "Eliminated" },
            { "round": 6, "status": "Eliminated" },
            { "round": 7, "status": "Eliminated" },
            { "round": 8, "status": "Eliminated" },
            { "round": 9, "status": "Eliminated" },
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
    },
    {
        "_id": "88er387387dfjbn356",
        "name": "Sophia Rodriguez",
        "rounds": [
            { "round": 1, "status": "Eliminated" },
            { "round": 2, "status": "Eliminated" },
            { "round": 3, "status": "Eliminated" },
            { "round": 4, "status": "Eliminated" },
            { "round": 5, "status": "Eliminated" },
            { "round": 6, "status": "Eliminated" },
            { "round": 7, "status": "Eliminated" },
            { "round": 8, "status": "Eliminated" },
            { "round": 9, "status": "Eliminated" },
            { "round": 10, "status": "Eliminated" }
        ]
    },

    {
        "_id": "88er387387dfjbn356",
        "name": "Sophia Rodriguez",
        "rounds": [
            { "round": 10, "status": "Redeemed" },
            { "round": 1, "status": "Redeemed" },
            { "round": 2, "status": "Redeemed" },
            { "round": 3, "status": "Redeemed" },
            { "round": 4, "status": "Redeemed" },
            { "round": 5, "status": "Redeemed" },
            { "round": 6, "status": "Redeemed" },
            { "round": 7, "status": "Redeemed" },
            { "round": 8, "status": "Redeemed" },
            { "round": 9, "status": "Redeemed" }
        ]
    }

]
const redeem = [
    {
        "_id": "88er387387dfjbn356",
        "name": "Sophia Rodriguez",
        "rounds": [
            { "round": 10, "status": "Redeemed" },
            { "round": 1, "status": "Redeemed" },
            { "round": 2, "status": "Redeemed" },
            { "round": 3, "status": "Redeemed" },
            { "round": 4, "status": "Redeemed" },
            { "round": 5, "status": "Redeemed" },
            { "round": 6, "status": "Redeemed" },
            { "round": 7, "status": "Redeemed" },
            { "round": 8, "status": "Redeemed" },
            { "round": 9, "status": "Redeemed" }
        ]
    },
    {
        "_id": "unique_id_1",
        "name": "John Doe",
        "rounds": [
            { "round": 10, "status": "Redeemed" },
            { "round": 1, "status": "Redeemed" },
            { "round": 2, "status": "Redeemed" },
            { "round": 3, "status": "Redeemed" },
            { "round": 4, "status": "Redeemed" },
            { "round": 5, "status": "Redeemed" },
            { "round": 6, "status": "Redeemed" },
            { "round": 7, "status": "Redeemed" },
            { "round": 8, "status": "Redeemed" },
            { "round": 9, "status": "Redeemed" }
        ]
    },
    {
        "_id": "unique_id_2",
        "name": "Jane Smith",
        "rounds": [
            { "round": 10, "status": "Redeemed" },
            { "round": 1, "status": "Redeemed" },
            { "round": 2, "status": "Redeemed" },
            { "round": 3, "status": "Redeemed" },
            { "round": 4, "status": "Redeemed" },
            { "round": 5, "status": "Redeemed" },
            { "round": 6, "status": "Redeemed" },
            { "round": 7, "status": "Redeemed" },
            { "round": 8, "status": "Redeemed" },
            { "round": 9, "status": "Redeemed" }
        ]
    },
    {
        "_id": "unique_id_3",
        "name": "Alice Johnson",
        "rounds": [
            { "round": 10, "status": "Redeemed" },
            { "round": 1, "status": "Redeemed" },
            { "round": 2, "status": "Redeemed" },
            { "round": 3, "status": "Redeemed" },
            { "round": 4, "status": "Redeemed" },
            { "round": 5, "status": "Redeemed" },
            { "round": 6, "status": "Redeemed" },
            { "round": 7, "status": "Redeemed" },
            { "round": 8, "status": "Redeemed" },
            { "round": 9, "status": "Redeemed" }
        ]
    },
    {
        "_id": "unique_id_4",
        "name": "Bob Brown",
        "rounds": [
            { "round": 10, "status": "Redeemed" },
            { "round": 1, "status": "Redeemed" },
            { "round": 2, "status": "Redeemed" },
            { "round": 3, "status": "Redeemed" },
            { "round": 4, "status": "Redeemed" },
            { "round": 5, "status": "Redeemed" },
            { "round": 6, "status": "Redeemed" },
            { "round": 7, "status": "Redeemed" },
            { "round": 8, "status": "Redeemed" },
            { "round": 9, "status": "Redeemed" }
        ]
    }
]
const Qualified = [
    {
        "_id": "88er387387dfjbn356",
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
            { "round": 9, "status": "Qualified" },
            { "round": 10, "status": "Qualified" }
        ]
    },
    {
        "_id": "unique_id_1",
        "name": "John Doe",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Qualified" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Qualified" },
            { "round": 9, "status": "Qualified" },
            { "round": 10, "status": "Qualified" }
        ]
    },
    {
        "_id": "unique_id_2",
        "name": "Jane Smith",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Qualified" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Qualified" },
            { "round": 9, "status": "Qualified" },
            { "round": 10, "status": "Qualified" }
        ]
    },
    {
        "_id": "unique_id_3",
        "name": "Alice Johnson",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Qualified" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Qualified" },
            { "round": 9, "status": "Qualified" },
            { "round": 10, "status": "Qualified" }
        ]
    },
    {
        "_id": "unique_id_4",
        "name": "Bob Brown",
        "rounds": [
            { "round": 1, "status": "Qualified" },
            { "round": 2, "status": "Qualified" },
            { "round": 3, "status": "Qualified" },
            { "round": 4, "status": "Qualified" },
            { "round": 5, "status": "Qualified" },
            { "round": 6, "status": "Qualified" },
            { "round": 7, "status": "Qualified" },
            { "round": 8, "status": "Qualified" },
            { "round": 9, "status": "Qualified" },
            { "round": 10, "status": "Qualified" }
        ]
    }
]
const Eliminated = [
    {
        "_id": "88er387387dfjbn356",
        "name": "Sophia Rodriguez",
        "rounds": [
            { "round": 1, "status": "Eliminated" },
            { "round": 2, "status": "Eliminated" },
            { "round": 3, "status": "Eliminated" },
            { "round": 4, "status": "Eliminated" },
            { "round": 5, "status": "Eliminated" },
            { "round": 6, "status": "Eliminated" },
            { "round": 7, "status": "Eliminated" },
            { "round": 8, "status": "Eliminated" },
            { "round": 9, "status": "Eliminated" },
            { "round": 10, "status": "Eliminated" }
        ]
    },
    {
        "_id": "unique_id_1",
        "name": "John Doe",
        "rounds": [
            { "round": 1, "status": "Eliminated" },
            { "round": 2, "status": "Eliminated" },
            { "round": 3, "status": "Eliminated" },
            { "round": 4, "status": "Eliminated" },
            { "round": 5, "status": "Eliminated" },
            { "round": 6, "status": "Eliminated" },
            { "round": 7, "status": "Eliminated" },
            { "round": 8, "status": "Eliminated" },
            { "round": 9, "status": "Eliminated" },
            { "round": 10, "status": "Eliminated" }
        ]
    },
    {
        "_id": "unique_id_2",
        "name": "Jane Smith",
        "rounds": [
            { "round": 1, "status": "Eliminated" },
            { "round": 2, "status": "Eliminated" },
            { "round": 3, "status": "Eliminated" },
            { "round": 4, "status": "Eliminated" },
            { "round": 5, "status": "Eliminated" },
            { "round": 6, "status": "Eliminated" },
            { "round": 7, "status": "Eliminated" },
            { "round": 8, "status": "Eliminated" },
            { "round": 9, "status": "Eliminated" },
            { "round": 10, "status": "Eliminated" }
        ]
    },
    {
        "_id": "unique_id_3",
        "name": "Alice Johnson",
        "rounds": [
            { "round": 1, "status": "Eliminated" },
            { "round": 2, "status": "Eliminated" },
            { "round": 3, "status": "Eliminated" },
            { "round": 4, "status": "Eliminated" },
            { "round": 5, "status": "Eliminated" },
            { "round": 6, "status": "Eliminated" },
            { "round": 7, "status": "Eliminated" },
            { "round": 8, "status": "Eliminated" },
            { "round": 9, "status": "Eliminated" },
            { "round": 10, "status": "Eliminated" }
        ]
    },
    {
        "_id": "unique_id_4",
        "name": "Bob Brown",
        "rounds": [
            { "round": 1, "status": "Eliminated" },
            { "round": 2, "status": "Eliminated" },
            { "round": 3, "status": "Eliminated" },
            { "round": 4, "status": "Eliminated" },
            { "round": 5, "status": "Eliminated" },
            { "round": 6, "status": "Eliminated" },
            { "round": 7, "status": "Eliminated" },
            { "round": 8, "status": "Eliminated" },
            { "round": 9, "status": "Eliminated" },
            { "round": 10, "status": "Eliminated" }
        ]
    }
]
const Disqualified = [
    {
        "_id": "88er387387dfjbn356",
        "name": "Sophia Rodriguez",
        "rounds": [
            { "round": 1, "status": "Disqualified" },
            { "round": 2, "status": "Disqualified" },
            { "round": 3, "status": "Disqualified" },
            { "round": 4, "status": "Disqualified" },
            { "round": 5, "status": "Disqualified" },
            { "round": 6, "status": "Disqualified" },
            { "round": 7, "status": "Disqualified" },
            { "round": 8, "status": "Disqualified" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Disqualified" }
        ]
    },
    {
        "_id": "unique_id_1",
        "name": "John Doe",
        "rounds": [
            { "round": 1, "status": "Disqualified" },
            { "round": 2, "status": "Disqualified" },
            { "round": 3, "status": "Disqualified" },
            { "round": 4, "status": "Disqualified" },
            { "round": 5, "status": "Disqualified" },
            { "round": 6, "status": "Disqualified" },
            { "round": 7, "status": "Disqualified" },
            { "round": 8, "status": "Disqualified" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Disqualified" }
        ]
    },
    {
        "_id": "unique_id_2",
        "name": "Jane Smith",
        "rounds": [
            { "round": 1, "status": "Disqualified" },
            { "round": 2, "status": "Disqualified" },
            { "round": 3, "status": "Disqualified" },
            { "round": 4, "status": "Disqualified" },
            { "round": 5, "status": "Disqualified" },
            { "round": 6, "status": "Disqualified" },
            { "round": 7, "status": "Disqualified" },
            { "round": 8, "status": "Disqualified" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Disqualified" }
        ]
    },
    {
        "_id": "unique_id_3",
        "name": "Alice Johnson",
        "rounds": [
            { "round": 1, "status": "Disqualified" },
            { "round": 2, "status": "Disqualified" },
            { "round": 3, "status": "Disqualified" },
            { "round": 4, "status": "Disqualified" },
            { "round": 5, "status": "Disqualified" },
            { "round": 6, "status": "Disqualified" },
            { "round": 7, "status": "Disqualified" },
            { "round": 8, "status": "Disqualified" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Disqualified" }
        ]
    },
    {
        "_id": "unique_id_4",
        "name": "Bob Brown",
        "rounds": [
            { "round": 1, "status": "Disqualified" },
            { "round": 2, "status": "Disqualified" },
            { "round": 3, "status": "Disqualified" },
            { "round": 4, "status": "Disqualified" },
            { "round": 5, "status": "Disqualified" },
            { "round": 6, "status": "Disqualified" },
            { "round": 7, "status": "Disqualified" },
            { "round": 8, "status": "Disqualified" },
            { "round": 9, "status": "Disqualified" },
            { "round": 10, "status": "Disqualified" }
        ]
    }
]

function StickyHeaderTable() {
    const [age, setAge] = React.useState('');
    const [rows, setRows] = useState(dummyJson);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleChangeSearch = (e) => {
        const data = e.target.value.trim().toLowerCase();
        if (data === 'redeemed') {
            setRows(redeem);
        } else if (data === 'qualified') {
            setRows(Qualified);
        } else if (data === 'disqualified') {
            setRows(Disqualified);
        } else if (data === 'eliminated') {
            setRows(Eliminated);
        }
        else if (data.length === 0) {
            setRows(dummyJson);
        } else {
            setRows([]);
        }
    }



    useEffect(() => {
        if (age === 'redeemed') {
            setRows(redeem); // Update rows state to redeem data when age is 20
        } else if (age === 'qualified') {
            setRows(Qualified); // Otherwise, keep the rows state as dummyJson
        } else if (age === 'disqualified') {
            setRows(Disqualified);
        } else if (age === 'eliminated') {
            setRows(Eliminated);
        } else {
            setRows(dummyJson);
        }
    }, [age]);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
            {/* <Box>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChangeSearch} />
                <FormControl fullWidth sx={{ width: 200, mt: 2 }}>
                    <InputLabel id="demo-simple-select-label">Select The Option</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={'all'}>All</MenuItem>
                        <MenuItem value={'qualified'}>Qualified</MenuItem>
                        <MenuItem value={'redeemed'}>Redeemed</MenuItem>
                        <MenuItem value={'disqualified'}>Disqualified</MenuItem>
                        <MenuItem value={'eliminated'}>eliminated</MenuItem>
                    </Select>
                </FormControl>
            </Box> */}
            <Box sx={{ position: 'absolute', top: 0, right: 0, padding: '10px', zIndex: 999 }}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChangeSearch} />
                <FormControl fullWidth sx={{ width: 200 }}>
                    <InputLabel id="demo-simple-select-label">Select The Option</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={'all'}>All</MenuItem>
                        <MenuItem value={'qualified'}>Qualified</MenuItem>
                        <MenuItem value={'redeemed'}>Redeemed</MenuItem>
                        <MenuItem value={'disqualified'}>Disqualified</MenuItem>
                        <MenuItem value={'eliminated'}>Eliminated</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <TableContainer sx={{ maxHeight: 440, marginTop: 5 }}>
                <Table stickyHeader sx={{ p: 1 }}>
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
                        {rows.map((row) => (
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
