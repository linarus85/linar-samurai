import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function MySelect(props) {
  const [select, setSelect] = React.useState('');
  let opsion =  [
    {value:'title',name:'By name'},
    {value:'body',name:'By description'},
  ]
  const sortPost = (sort) => {
    setSelect(sort)
    props.setPost([...props.post].sort((a, b) => a[sort].localeCompare(b[sort]))) // для сравнение строк .localeCompare
  }
  const handleChange = (event) => {
    sortPost(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="Select"
          onChange={handleChange}
        >
          {opsion.map(o =>
            <MenuItem key={o.value} value={o.value}>{o.name}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
