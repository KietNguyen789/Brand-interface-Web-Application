import { useEffect, useState, useRef } from 'react';
import Button from '~/components/Button';
import Mask from '~/layouts/Mask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './CreateEvent.scss';
import Formbox from '~/components/Formbox';
import Input from '~/components/Input';
import { createEvent } from '~/services/createEvent';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
/* voucher_condition = {
        "shoe": 4,
        "book": 10,
        "coin": 2
    }, */
const input_info = [
    {label : 'name', type:'text'},
    {label : 'Choose link file on Internet', type:'text'},
    {label : 'Number Vouchers', type:'number'},
    {label : 'shoe', type:'number'},
    {label : 'book', type:'number'},
    {label : 'coin', type:'number'},
    {label : 'Budget', type:'number'},
    {label : 'Start', type:'date'},
    {label : 'End', type:'date'},
]
function CreateEvent() {
    const [showMask, setShowMask] = useState(false);
   // const navigate = use
   //const navigate = useNavigate(); 
   const handleCreate = () => {
        setShowMask(true);
        //console.log(showMask);
    };
   
   /* event_name,
    event_image,
    voucher_quantity,
    voucher_condition,
    start_date,
    end_date */
    const handleSubmit = async (e) => {
    e.preventDefault();
        try {
            const start_date = formData[7];
            const end_date = formData[8];

            console.log(typeof formData[0],typeof formData[1], typeof Number(formData[2]), typeof Number(formData[3]),typeof Number(formData[4]),typeof Number(formData[5]), typeof start_date, typeof end_date);
            
            await createEvent(sessionStorage.getItem('brand_id'),formData[0], formData[1], Number(formData[2]),  Number(formData[3]), Number(formData[4]), Number(formData[5]),Number(formData[6]), start_date, end_date);
           // await navigate('/home')
          
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
        setShowMask(false);
    };
    const handleClose = () => {
        setShowMask(false);
    };
    const [formData, setFormData] = useState([]);
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
    const listinput = (
        
           input_info.map((field,index) => (
            <Input
                error={errors[index]}
                isRequired
                value={formData[index]}
                onChange={(e) => handleChange(e, index)}
                type={field.type}
                label={field.label}
            />
           
        ))
    );

    const listbutton = (
        <>
            <Button  primary onClick={handleSubmit}>
                Create
            </Button>
            <Button primary onClick={handleClose}>
                Close
            </Button>
        </>
    );

    return (
        <>
            {showMask && (
                <Mask>
                    <Formbox label="Create Event" inputs={listinput} buttons={listbutton}></Formbox>
                </Mask>
            )}

            <Button lefticon={<FontAwesomeIcon icon={faPlus} />} onClick={handleCreate} className={cx('Upload-btn')}>
                Create Event
            </Button>
        </>
    );
}

export default CreateEvent;
