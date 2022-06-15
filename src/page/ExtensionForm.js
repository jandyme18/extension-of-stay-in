import * as React from "react";
import CurrentDate from '../components/CurrentDate';
import { useForm } from 'react-hook-form';
import moment from "moment"

export const ExtensionForm = () => {

    //change moment.js format
    const momentObj = moment();
    const formatDate = "YYYY-MM-DD HH:mm:ss";
    const resultFormat = momentObj.format(formatDate);

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            extDate: resultFormat,
            firstName: "",
            middleName: "",
            lastName: "",
            birthDate: "",
            birthPlace: "",
            nationality: "",
            passportNO: "",
            issueDate: "",
            expiryDate: "",
            visaType: "",
            arrivedBy: "",
            inDate: "",
            portOfArrival: "",
            tm6NO: "",
            extendDate: 0,
            reason: "",
            adress: "",
            adressNo: "",
            road: "",
            subDistrict: "",
            district: "",
            province: ""
        }
    });

    const onSubmit = (data) => console.log(data);

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
                                {...register("firstName", {
                                    required: 'จำเป็นต้องกรอกช่องนี้',
                                    pattern: {
                                        value: /[A-Za-zก-ฮ]/,
                                        message: 'กรอกแค่ตัวอักษรเท่านั้น'
                                    },
                                    minLength: {
                                        value: 2,
                                        message: 'กรอกอย่างน้อย 2 ตัวอักษร'
                                    }
                                }
                                )} />
                            <p className="mt-2 text-sm text-red-600">{errors.firstName && errors.firstName.message}</p>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-middle-name">
                                ชื่อรอง
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-middle-name" type="text" placeholder=""
                                {...register("middName", {
                                    pattern: {
                                        value: /[A-Za-zก-ฮ]/,
                                        message: 'กรอกแค่ตัวอักษรเท่านั้น'
                                    }
                                }
                                )} />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-last-name">
                                ชื่อสกุล
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""
                                {...register("lastName", {
                                    required: 'จำเป็นต้องกรอกช่องนี้',
                                    pattern: {
                                        value: /[A-Za-zก-ฮ]/,
                                        message: 'กรอกแค่ตัวอักษรเท่านั้น'
                                    },
                                    minLength: {
                                        value: 2,
                                        message: 'กรอกอย่างน้อย 2 ตัวอักษร'
                                    }
                                }
                                )} />
                            <p className="mt-2 text-sm text-red-600">{errors.lastName && errors.lastName.message}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-birth-date">
                                วันเดือนปีเกิด
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-birth-date" type="date" placeholder=""
                                {...register("birthDate", {
                                    required: "จำเป็นต้องกรอกช่องนี้"
                                }
                                )} />
                            <p className="mt-2 text-sm text-red-600">{errors.birthDate && errors.birthDate.message}</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-birth-place">
                                สถานที่เกิด
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-middle-name" type="text" placeholder="กรอกเมืองที่ท่านเกิดเป็นภาษาอังกฤษ เช่น Bangkok"
                                {...register("birthPlace", {
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
                                    pattern: {
                                        value: /[A-Za-zก-ฮ]/,
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
                    </div>
                    <hr className="border-1 border-dashed mb-8" />
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-passport-no">
                                เลขหนังสือเดินทาง
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-passport-no" type="text" placeholder="เช่น A3325567"
                                {...register("passportNO", {
                                    required: "จำเป็นต้องกรอกช่องนี้"
                                })} />
                            <p className="mt-2 text-sm text-red-600">{errors.passportNO && errors.passportNO.message}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-issue-date">
                                วันที่<u className="text-red-500">ออก</u>หนังสือเดินทาง
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-issue-date" type="date" placeholder=""
                                {...register("issueDate")} />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-expiry-date">
                                วัน<u className="text-red-500">หมดอายุ</u>หนังสือเดินทาง
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-expiry-date" type="date" placeholder=""
                                {...register("expiryDate")} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-visa-type">
                                ประเภทวีซ่า
                            </label>
                            <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="visa-type" id="grid-visa-type" {...register("visaType")}>
                                <option value="transit-visa">Transit VISA</option>
                                <option value="tourist-visa">Tourist VISA</option>
                                <option value="non-immgrant-visa">Non-Immigrant VISA</option>
                                <option value="diplomatic-visa">Diplomatic VISA</option>
                                <option value="official-visa">Official VISA</option>
                                <option value="courtesy-visa">Courtesy VISA</option>
                                <option value="non-immgrantLongStay-visa">Non-Immigrant VISA Long Stay</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-arrived-by">
                                หมายเลขยานพาหนะ
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-arrived-by" type="text" placeholder=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-in-date">
                                วันที่เดินทางเข้า
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-in-date" type="date" placeholder=""
                                {...register("issueDate")} />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-port-of-arrival">
                                ด่านที่เดินทางเข้า
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-port-of-arrival" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-4/6 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-tm6-no">
                                หมายเลข ตม.6 (Arrival Card)
                            </label>
                            <input className="uppercase appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-tm6-no" type="text" placeholder="" />
                        </div>
                        <div className="w-full md:w-4/12 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-extend-date">
                                จำนวนวันที่ขออยู่ต่อ
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-extend-date" type="number" placeholder="ตัวเลขเท่านั้น"
                                {...register("extendDate", {
                                    pattern: {
                                        value: /[0-9]/,
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
                            <p className="mt-2 text-sm text-red-600">{errors.extendDate && errors.extendDate.message}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-reason">
                                เหตุผลในการขออยู่ต่อ
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-7 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-reason" name="grid-reason" placeholder="จำกัด 250 ตัวอักษร"
                                {...register("reason", {
                                    required: "จำเป็นต้องกรอกช่องนี้",
                                    pattern: {
                                        value: /[A-Za-zก-ฮ0-9]/,
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
                            <p className="mt-2 text-sm text-red-600">{errors.reason && errors.reason.message}</p>
                        </div>
                    </div>
                    <hr className="border-1 border-dashed mb-6" />
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-adress">
                                ที่อยู่
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-7 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-reason" name="grid-adress" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-adress-no">
                                เลขที่บ้าน
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-adress-no" type="text" placeholder="" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-road">
                                ถนน
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-road" type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-sub-district">
                                ตำบล/แขวง
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" list="grid-sub-district" name="grid-sub-district"
                                    {...register("subDistrict")} />
                            </label>
                            <datalist id="grid-sub-district">
                                <option value="บางนา"></option>
                                <option value="บางบ่อ"></option>
                                <option value="ทองหล่อ"></option>
                            </datalist>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-district">
                                อำเภอ/เขต
                                <input className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" list="grid-district" name="grid-district"
                                    {...register("district")} />
                            </label>
                            <datalist id="grid-district">
                                <option value="บางนา"></option>
                                <option value="บางบ่อ"></option>
                                <option value="ทองหล่อ"></option>
                            </datalist>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-l font-regular mb-2" for="grid-province">
                                จังหวัด
                                <input className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" list="grid-province" name="grid-province"
                                    {...register("province")} />
                            </label>
                            <datalist id="grid-province">
                                <option value="กรุงเทพ"></option>
                                <option value="กรุงศรี"></option>
                                <option value="กรุงสุโขทัย"></option>
                            </datalist>
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