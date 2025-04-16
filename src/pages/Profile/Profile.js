import Button from '~/components/Button';
import Formbox from '~/components/Formbox';
import Input from '~/components/Input';
import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Profile.scss';
import SubHeader from './SubHeader';
import { formatDateForInput } from '~/components/FormatDate';
import { EditEvent } from '~/services/editEvent';
const cx = classNames.bind(styles);

function Profile() {
    const location = useLocation();
    const data = location.state;
    const reflist = useRef([]);
    const [formData, setFormData] = useState([data.event_name, data.event_image, data.voucher_quantity,data.start_date, data.end_date]);
    const [errors, setErrors] = useState([]);

    const handleChange = (e, index) => {
        const value = e.target.value;

        setFormData((prevData) => ({
            ...prevData,
            [index]: value,
        }));

        if (value.trim() === '') {
            setErrors((prevErrors) => {
                const newErrors = [...prevErrors];
                newErrors[index] = true;
                return newErrors;
            });
        } else {
            setErrors((prevErrors) => {
                const newErrors = [...prevErrors];
                newErrors[index] = false;
                return newErrors;
            });
        }
    };
  
    const handleSubmit = async (event, formData) => {
        event.preventDefault();
        console.log(data.brand_id, data._id);
        console.log(typeof Number(formData[2]),typeof formData[3],typeof formData[4]);
        
       try{ 
        console.log(formData[3], formData[4]);     
        const res = await EditEvent(data.brand_id, data._id, formData[0],Number(formData[2]),formData[3],formData[4])
    console.log(res);
       
    }catch(e)
       {
        console.log(e);
        
       }
    };
    console.log(formData);

    const listinput = (
        <>
            <div className={cx('input-box')}>
                <Input
                    label="Name"
                    isRequired
                    ref={(ref) => (reflist.current[0] = ref)}
                    onChange={(e) => handleChange(e, 0)}
                    placeholder={'Name'}
                    error={errors[0]}
                    value={formData[0]}
                />
            </div>
            <div className={cx('input-box')}>
                <Input
                    label="Image"
                    isRequired
                    ref={(ref) => (reflist.current[1] = ref)}
                    onChange={(e) => handleChange(e, 1)}
                    type="text"
                    className={cx('choose-file')}
                    name="Chose link file on Internet"
                />
            </div>
            <div className={cx('input-box')}>
                <Input
                    label="Number Vouchers"
                    isRequired
                    ref={(ref) => (reflist.current[2] = ref)}
                    onChange={(e) => handleChange(e, 2)}
                    placeholder={'Number Vouchers'}
                    error={errors[2]}
                    value={formData[2]}
                />
            </div>
            <div className={cx('input-box')}>
                <Input
                    label="Time Start Time Start"
                    isRequired
                    error={errors[3]}
                    ref={(ref) => (reflist.current[3] = ref)}
                    onChange={(e) => handleChange(e, 3)}
                    type="date"
                    name="start"
                    value={formatDateForInput(data.start_date)}
                />
            </div>
            <div className={cx('input-box')}>
                <Input
                    label="Time End"
                    isRequired
                    error={errors[4]}
                    ref={(ref) => (reflist.current[4] = ref)}
                    onChange={(e) => handleChange(e, 4)}
                    type="date"
                    name="end"
                    value={formatDateForInput(data.end_date)}
                />
            </div>
        </>
    );

    const listbutton = (
        <Button primary onClick={e => handleSubmit(e, formData)}>
            OK
        </Button>
    );
  
    return (
        <div className={cx('profile-content')}>
            <Formbox label="Modify Info Event" inputs={listinput} buttons={listbutton} />
            <SubHeader id={data._id} />
           
        </div>
    );
}

export default Profile;
