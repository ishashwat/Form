// SubDepartmentItem.jsx
import React, { useState, useEffect } from 'react';
import { ListItem, Checkbox } from '@mui/material';

const SubDepartmentItem = ({ subDepartment, onSelect, isSelected }) => {
  const [isSubSelected, setIsSubSelected] = useState(isSelected);

  const handleSelect = () => {
    setIsSubSelected(!isSubSelected);
    onSelect(subDepartment, !isSubSelected);
  };

  useEffect(() => {
    setIsSubSelected(isSelected);
  }, [isSelected]);

  return (
    <ListItem>
      <Checkbox onClick={handleSelect} checked={isSubSelected} />
      {subDepartment.name}
    </ListItem>
  );
};

export default SubDepartmentItem;
