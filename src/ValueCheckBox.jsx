import React, { useState, useEffect } from 'react';
import {
    Box,
    FormControlLabel,
    Checkbox,
} from '@mui/material';


// this data will come from the backend 
const editTableData = [
    { name: 'hello', id: 1, value: 'world1' },
    // { name: 'how are you', id: 3, value: 'world3' }
];

// connected profile (instagram and twitter) and pages
const page = [
    { name: 'hello', id: 1, value: 'world1' },
    { name: 'hii', id: 2, value: 'world2' },
    { name: 'how are you', id: 3, value: 'world3' }
]

const ValueCheckBox = () => {
    const [pageData, setPageData] = useState([]);

    const [postData, setPostData] = useState({
        postOn: [],
        message: '',
        hashTag: '',
        image: [],
        when: '',
    });

    useEffect(() => {
        // initialize the backend data in postOn array when component will render
        setPostData(prevPostData => ({
            ...prevPostData,
            postOn: editTableData
        }));

        // initialize the backend data in pageData array when component will render
        setPageData(page)

    }, []);

    const handleCheckboxChange = (e, data) => {
        const { checked } = e.target; // getting the boolean value
        setPostData(prevPostData => {
            const newPostOn = checked
                ? [...prevPostData.postOn, data]
                : prevPostData.postOn.filter(item => item.id !== data.id);

            return {
                ...prevPostData,
                postOn: newPostOn
            };
        });
    };

    const showData = () => {
        console.log(postData);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {pageData &&
                        pageData.length > 0 &&
                        pageData.map((data, index) => (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        onChange={(e) => handleCheckboxChange(e, data)}
                                        checked={postData.postOn.some(item => item.id === data.id)}
                                    />
                                }
                                label={`Post On ${data.name}`}
                            />
                        ))}
                </Box>
            </Box>
            <button onClick={showData}>show</button>
        </div>
    );
};

export default ValueCheckBox;
