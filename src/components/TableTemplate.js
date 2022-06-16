import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import useSWR from 'swr';
import axios from 'axios';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

export const TableTemplate = () => {
    const fetcher = url => axios.get(url).then(res => res.data).catch(err => err.message)
    const { data: dataFetch } = useSWR('http://103.122.112.32:8000/api/v1/extensions', fetcher)

    const [data, setData] = useState([]);

    const [columns] = useState([
        { title: "Id", field: "id" },
        { title: "First Name", field: "first_name" },
        { title: "Middle Name", field: "middle_name" },
        { title: "Last Name", field: "last_name" },
        { title: "Birth Date" , field: "birth_date" },
        { title: "birth_place" , field: "birth_place" },
        { title: "Nationality" , field: "nationality" }, //required
        { title: "Passport NO" , field: "passport_no" }, //required
        { title: "passport_issued_date" , field: "passport_issued_date" },
        { title: "passport_expired_date" , field: "passport_expired_date" },
        { title: "visa_type" , field: "visa_type" },
        { title: "convreg_no" , field: "convreg_no" }, //flight NO
        { title: "arrival_port" , field: "arrival_port" }, 
        { title: "date_of_entry" , field: "date_of_entry" }, 
        { title: "tm6_no" , field: "tm6_no" }, 
        { title: "extension_days" , field: "extension_days" }, 
        { title: "address" , field: "address" }, 
        { title: "status" , field: "status" },  //W(waiting) = yellow , A(approved) = Green
        
    ]);

    useEffect(() => {
        console.log(dataFetch)
        if (dataFetch) {
            setData(dataFetch)
        }
        getData()
    },[dataFetch])
    //check if data change from edit table
    //send to database
    //and fetch data again
    
    const [val, setVal] = useState();
    const getData = async () => {
        const {value} = await axios('http://103.122.112.32:8000/api/v1/extensions')
        console.log(value);
    }
    

    // const onEditSuccess = (e) => {
    //     fetchData()
    // }
    return (
        <div>
            <MaterialTable
                icons={tableIcons}
                title="Admin Dashboard"
                data={data}
                columns={columns}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                setData([...data, newData]);

                                resolve();
                            }, 1000);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setData([...dataUpdate]);

                                resolve();
                            }, 1000);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setData([...dataDelete]);

                                resolve();
                            }, 1000);
                        })
                }}
                options={{
                    selection: true,
                    sorting: true,
                    exportButton: true
                }}
                actions={[
                    {
                        tooltip: "Remove All Selected Users",
                        icon: "delete",
                        onClick: (data) =>
                            alert("You want to delete " + data.length + " rows")
                    }
                ]}
            />
        </div>
    );
};
