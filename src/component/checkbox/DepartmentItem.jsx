// DepartmentItem.jsx
import React, { useState, useEffect } from 'react';
import { List, ListItem, Collapse, Checkbox } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SubDepartmentItem from './SubDepartmentItem';

const DepartmentItem = ({ department, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    onSelect(department, isSelected); // Notify parent component about department selection
  }, [isSelected, onSelect, department]);

  return (
    <>
      <ListItem>
        <Checkbox onClick={handleSelect} checked={isSelected} />
        {department.name}
        {open ? <ExpandLessIcon onClick={handleToggle} /> : <ExpandMoreIcon onClick={handleToggle} />}
      </ListItem>
      <Collapse in={open}>
        <List>
          {department.subDepartments.map((subDepartment) => (
            <SubDepartmentItem key={subDepartment.id} subDepartment={subDepartment} onSelect={onSelect} isSelected={isSelected} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default DepartmentItem;
