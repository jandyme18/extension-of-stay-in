import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import moment from 'moment';

export const DatePickerExample = () => {
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        if (data) {
            console.log(moment(data.issueDate).format("YYYY-MM-DD HH:mm:ss"))
            console.log(data.issueDate)
            console.log(data)
            //passport_issue_date = moment(data.issueDate).format("YYYY-MM-DDTHH:mm:ss")
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                as={DatePicker}
                name="issueDate"
                defaultValue={new Date()}
                control={control}
                render={({ field }) => (
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                    >
                        <DatePicker
                            value={field.value.toString()}
                            onChange={(e) => {
                                field.onChange(e);
                            }}
                            inputFormat="dd/MM/yyyy"
                            openTo='year'
                            autoOk
                            disableFuture
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                )}>
                </Controller>
            <div>
                <button type="submit" value="Submit" >Submit</button>
            </div>
        </form>
    );
}