import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import useSWR from 'swr';
import axios from 'axios';
import { TableIcons } from '../components/TableIcons'

export const Dashboard = () => {
    const fetcher = url => axios.get(url).then(res => res.data).catch(err => err.message)
    const { data: dataFetch } = useSWR('http://103.122.112.32:3000/api/v1/extensions', fetcher)

    const [data, setData] = useState([]);

    const [columns] = useState([
        { title: "Id", field: "id" },
        { title: "First Name", field: "first_name" },
        { title: "Middle Name", field: "middle_name" },
        { title: "Last Name", field: "last_name" },
        { title: "Birth Date", field: "birth_date" },
        { title: "birth_place", field: "birth_place" },
        { title: "Nationality", field: "nationality" }, //required
        { title: "Passport NO", field: "passport_no" }, //required
        { title: "passport_issued_date", field: "passport_issued_date" },
        { title: "passport_expired_date", field: "passport_expired_date" },
        { title: "visa_type", field: "visa_type" },
        { title: "convreg_no", field: "convreg_no" }, //flight NO
        { title: "arrival_port", field: "arrival_port" },
        { title: "date_of_entry", field: "date_of_entry" },
        { title: "tm6_no", field: "tm6_no" },
        { title: "extension_days", field: "extension_days" },
        { title: "address", field: "address" },
        { title: "status", field: "status" },  //W(waiting) = yellow , A(approved) = Green

    ]);

    useEffect(() => {
        console.log(dataFetch)
        if (dataFetch) {
            setData(dataFetch)
        }
        getData()
    }, [dataFetch])
    //check if data change from edit table
    //send to database
    //and fetch data again

    // const [val, setVal] = useState();
    const getData = async () => {
        const { value } = await axios('http://103.122.112.32:3000/api/v1/extensions')
        console.log(value);
    }


    // const onEditSuccess = (e) => {
    //     fetchData()
    // }

    

    return (
        <div>
            <MaterialTable
                icons={TableIcons}
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
                    exportButton: true,
                    headerStyle: {
                        fontFamily: 'Maitree',
                    },
                    rowStyle: {
                        fontFamily: 'Maitree'
                    },

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
