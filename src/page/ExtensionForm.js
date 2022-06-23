import React, { useState, useEffect } from "react";
import CurrentDate from '../components/CurrentDate';
import { useForm } from 'react-hook-form';
import moment from "moment"
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
// import axios from "../components/axiosInstance";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



export const ExtensionForm = () => {
    const ExtensionAPI_URL = 'http://103.122.112.32:3000/api/v1/extensions';

    //change moment.js format
    // const momentObj = moment();
    // const formatDate = "YYYY-MM-DDTHH:mm:ss";
    // const resultFormat = momentObj.format(formatDate);
    // console.log(resultFormat);


    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            // extDate: resultFormat,
            telelphone_no: "",
            first_name: "",
            middle_name: "",
            last_name: "",
            birth_date: "",
            birth_place: "",
            nationality: "",
            passport_no: "",
            passport_issue_date: "",
            passport_expired_date: "",
            visa_type: "",
            convreg_no: "",
            arrival_port: "",
            date_of_entry: "",
            tm6_no: "",
            extension_days: 0,
            adress: "",
        }
    });

    // const schema = yup.object().shape({
    //     telelphone_no: yup.string(),
    //     first_name: yup.string(),
    //     middle_name: yup.string(),
    //     last_name: yup.string(),
    //     birth_date: yup.string(),
    //     birth_place: yup.string(),
    //     nationality: yup.string(),
    //     passport_no: yup.string(),
    //     passport_issue_date: yup.string(),
    //     passport_expired_date: yup.string(),
    //     visa_type: yup.string(), //เหตุผลในการขออยู่ต่อ
    //     convreg_no: yup.string(),
    //     arrival_port: yup.string(),
    //     date_of_entry: yup.string(),
    //     tm6_no: yup.string(),
    //     extension_days: yup.number,
    //     adress: yup.string(),
    // });

    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     resolver: yupResolver(schema)
    // });

    const [resStatus, setResStatus] = useState("");
    // const reDirectTo = useNavigate();
    const onSubmit = (data) => {

        Axios
            .post(
                ExtensionAPI_URL,
                data,
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then(function(response) {
                console.log(response.status);
                if (response.status === 200){
                    setResStatus("Successful Adding Form!")
                } else {
                    setResStatus("error")
                }
            })
            .catch(function (error){
                console.log(error);
            });

        // axios
        //     .post("api/v1/extensions", data)
        //     .then(function(response){
        //         console.log(response.status);
        //         if (response.status === 200) {
        //             setResStatus("Successful Adding Form!")
        //         } else {
        //             setResStatus("error")
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

        Swal.fire({
            icon: 'question',
            title: 'ต้องการบันทึกข้อมูลหรือไม่?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'ตกลง',
            confirmButtonColor: '#3b82f6',
            cancelButtonText: 'ยกเลิก',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'ข้อมูลของคุณถูกบันทึกแล้ว',
                    showConfirmButton: true,
                    confirmButtonText: 'ตกลง',
                    confirmButtonColor: '#3b82f6',
                })
                // reDirectTo('/dashboard')
                console.log(data);
            }
        })
    }

    console.log(resStatus)

    return (
        <div className="w-full font-maitree">
            <div className="container mx-auto mb-7">
                <form className="w-full"
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-3xl font-500 pt-3">แบบฟอร์มกรอกข้อมูล<br />
                        คำขออนุญาตเพื่ออยู่ในราชอาณาจักรเป็นการชั่วคราวต่อไป</div> <hr className="my-5 border-1 border-light-gray" />
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-ext-date">
                                วันที่ยื่นเอกสาร
                            </label>
                            <div className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            > {<CurrentDate />} </div>

                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-first-name">
                                ชื่อ
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder=""
                                {...register("first_name", {
                                    required: 'จำเป็นต้องกรอกช่องนี้',
                                    pattern: {
                                        value: /^[A-Za-zก-๙]{2,50}$/,
                                        message: 'กรอกแค่ตัวอักษรและไม่เกิน 50 ตัวเท่านั้น'
                                    },
                                    minLength: {
                                        value: 2,
                                        message: 'กรอกอย่างน้อย 2 ตัวอักษร'
                                    }
                                }
                                )} />
                            <p className="mt-2 text-sm text-red-600">{errors.first_name && errors.first_name.message}</p>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-middle-name">
                                ชื่อรอง
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-middle-name" type="text" placeholder=""
                                {...register("middle_name", {
                                    pattern: {
                                        value: /^[A-Za-zก-๙.]{1,50}$/,
                                        message: 'กรอกแค่ตัวอักษรและไม่เกิน 50 ตัวเท่านั้น'
                                    }
                                }
                                )} />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-last-name">
                                ชื่อสกุล
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""
                                {...register("last_name", {
                                    required: 'จำเป็นต้องกรอกช่องนี้',
                                    pattern: {
                                        value: /^[A-Za-zก-๙]{2,50}$/,
                                        message: 'กรอกแค่ตัวอักษรและไม่เกิน 50 ตัวเท่านั้น'
                                    },
                                    minLength: {
                                        value: 2,
                                        message: 'กรอกอย่างน้อย 2 ตัวอักษร'
                                    }
                                }
                                )} />
                            <p className="mt-2 text-sm text-red-600">{errors.last_name && errors.last_name.message}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-birth-date">
                                วันเดือนปีเกิด
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-birth-date" type="date" placeholder=""
                                {...register("birth_date")} />
                            {/* <p className="mt-2 text-sm text-red-600">{errors.birth_date && errors.birth_date.message}</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-birth-place">
                                สถานที่เกิด
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-middle-name" type="text" placeholder="กรอกเมืองที่ท่านเกิดเป็นภาษาอังกฤษ เช่น Bangkok"
                                {...register("birth_place", {
                                    minLength: 3,
                                    pattern: {
                                        value: /[A-Za-zก-ฮ]/,
                                        message: 'กรอกแค่ตัวอักษรเท่านั้น'
                                    },
                                }
                                )} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-nationality">
                                รหัสสัญชาติ 3 หลัก
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-nationality" type="text" placeholder="เช่น THA"
                                {...register("nationality", {
                                    required: "จำเป็นต้องกรอกช่องนี้",
                                    pattern: {
                                        value: /[A-Za-zก-๙]/,
                                        message: 'กรอกแค่ตัวอักษรเท่านั้น'
                                    },
                                    maxLength: {
                                        value: 3,
                                        message: 'กรอกให้ครบ 3 ตัวอักษร'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'กรอกให้ครบ 3 ตัวอักษร'
                                    }
                                })} />
                            <p className="mt-2 text-sm text-red-600">{errors.nationality && errors.nationality.message}</p>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-nationality">
                                เบอร์โทรศัพท์
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-telelphone_no" type="text" placeholder="เช่น 0900000000"
                                {...register("telelphone_no", {
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'กรอกแค่ตัวเลขเท่านั้น'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'กรอกเกิน 10 หลัก'
                                    },
                                    minLength: {
                                        value: 10,
                                        message: 'กรอกให้ครบ 10 หลัก'
                                    }
                                })} />
                            <p className="mt-2 text-sm text-red-600">{errors.telelphone_no && errors.telelphone_no.message}</p>
                        </div>
                    </div>
                    <hr className="border-1 border-dashed mb-8" />
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-passport-no">
                                เลขหนังสือเดินทาง
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-passport-no" type="text" placeholder="เช่น A3325567"
                                {...register("passport_no", {
                                    required: "จำเป็นต้องกรอกช่องนี้"
                                })} />
                            <p className="mt-2 text-sm text-red-600">{errors.passport_no && errors.passport_no.message}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-passport-issue-date">
                                วันที่<u className="text-red-500">ออก</u>หนังสือเดินทาง
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-passport-issue-date" type="date" placeholder=""
                                {...register("passport_issue_date", {required: 'จำเป็นต้องเลือกวันที่'})} 
                                />
                            <p className="mt-2 text-sm text-red-600">{errors.passport_issue_date && errors.passport_issue_date.message}</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-passport-expiry-date">
                                วัน<u className="text-red-500">หมดอายุ</u>หนังสือเดินทาง
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-passport-expiry-date" type="date" placeholder=""
                                {...register("passport_expired_date", {required: 'จำเป็นต้องเลือกวันที่'})} 
                                />
                            <p className="mt-2 text-sm text-red-600">{errors.passport_expired_date && errors.passport_expired_date.message}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-visa-type">
                                ประเภทวีซ่า
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="visa_type" id="grid-visa-type"
                            {...register("visa_type")} />
                            {/* <p className="mt-2 text-sm text-red-600">{errors.visa_type && errors.visa_type}</p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-convreg-no">
                                หมายเลขยานพาหนะ
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-convreg-no" type="text" placeholder=""
                                {...register("convreg_no")} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-date-of-entry">
                                วันที่เดินทางเข้า
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-date-of-entry" type="date" placeholder=""
                                {...register("date_of_entry")} />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-arrival-port">
                                ด่านที่เดินทางเข้า
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-arrival-port" type="text" placeholder=""
                                {...register("arrival_port")} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-4/6 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-tm6-no">
                                หมายเลข ตม.6 (Arrival Card)
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-tm6-no" type="text" placeholder=""
                                {...register("tm6_no")} />
                        </div>
                        <div className="w-full md:w-4/12 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-extend-date">
                                จำนวนวันที่ขออยู่ต่อ
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-extend-date" type="number" placeholder="ตัวเลขเท่านั้น"
                                {...register("extension_days", {
                                    pattern: {
                                        value: /^[0-9]{1,2}$/,
                                        message: 'กรอกแค่ตัวเลขเท่านั้น'
                                    },
                                    max: {
                                        value: 30,
                                        message: "กรอกจำนวนวันได้ไม่เกิน 30 วัน"
                                    },
                                    min: {
                                        value: 1,
                                        message: "กรอกอย่างน้อย 1 วัน"
                                    }
                                })} />
                            <p className="mt-2 text-sm text-red-600">{errors.extension_days && errors.extension_days.message}</p>
                        </div>
                    </div>
                    <hr className="border-1 border-dashed mb-6" />
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-adress">
                                ที่อยู่
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-7 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-reason" name="grid-adress" placeholder=""
                                {...register("adress", {
                                    // required: "จำเป็นต้องกรอกช่องนี้",
                                    pattern: {
                                        value: /[A-Za-zก-๙0-9]/,
                                        message: 'กรอกแค่ตัวอักษร'
                                    },
                                    maxLength: {
                                        value: 250,
                                        message: 'จำกัด 250 ตัวอักษร'
                                    },
                                    minLength: {
                                        value: 2,
                                        message: 'กรอกอย่างน้อย 2 ตัวอักษร'
                                    }
                                })} />
                        </div>
                    </div>
                    <button type="submit" value="Submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-medium hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        ส่งแบบฟอร์ม
                    </button>
                </form>
            </div>
        </div>
    )

}