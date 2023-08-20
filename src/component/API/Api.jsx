import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import DepartmentList from '../checkbox/DepartmentList';



const Api = () => {
 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
 

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            setData(response.data);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
          });
      }, []);


      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'body', headerName: 'Body', width: 500 },
      ];

    return (
        <div style={{ height: 400, width: '100%' }}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
          />
        )}
              <div>
              
                 <DepartmentList/>
           </div>

      </div>
    );
  };
        

export default Api