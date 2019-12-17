import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from 'react-select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
    lists: {
        margin: '20px 0'
    },
    width: {
        maxWidth: 400,
        margin: '0 auto'
    }
}))

export default function SelectBody() {
    const clasess = useStyles();
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [selectedOption, setSelectedOption] = useState(null)

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
    }
    const handleDelete = (selectedOption) => {
        setSelectedOption(null)
    }

    return (
        <div className={clasess.lists}>
            <Container maxWidth="md">
                Pilih rute perjalanan
                <Select
                    className={clasess.width}
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                />
                
                {
                    selectedOption != null ? (
                        <Chip
                            size="small"
                            label={selectedOption.label}
                            onDelete={handleDelete}
                        />
                    ) : ''
                }
                
            </Container>
        </div>
    );
}