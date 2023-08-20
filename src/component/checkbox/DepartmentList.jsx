// DepartmentList.jsx
import React,{useState} from 'react';
import { List } from '@mui/material';
import DepartmentItem from './DepartmentItem';

const DepartmentList = ({ data }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (item, select) => {
    if (select) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((selected) => selected.id !== item.id));
    }
  };

  return (
    <List>
      {data?.map((department) => (
        <DepartmentItem key={department.id} department={department} onSelect={handleSelect} />
      ))}
    </List>
  );
};

export default DepartmentList;
