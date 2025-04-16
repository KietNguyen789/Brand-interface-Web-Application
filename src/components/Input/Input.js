import classNames from 'classnames/bind';
import styles from './Input.scss';
import { useState, useRef } from 'react';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
const cx = classNames.bind(styles);
/*  const reflist = useRef([]);
    const [formData, setFormData] = useState([data.title, data.file, data.numvoucher, data.start, data.end]);
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
    
    const handleSubmit = (event) => {
        event.preventDefault();
      
    };
   // console.log(formData);

    const listinput = (
        <>
            <div className={cx('input-box')}>
                <p className={cx('title')}>Name {errors[0] && <span style={{ color: 'red' }}>*</span>}</p>

                <Input
                    ref={(ref) => (reflist.current[0] = ref)}
                    onChange={(e) => handleChange(e, 0)}
                    placeholder={'Name'}
                    error={errors[0]}
                    value={formData[0]}
                />
            </div>
            <div className={cx('input-box')}>
                <p className={cx('title')}>Image </p>
                <Input
                    ref={(ref) => (reflist.current[1] = ref)}
                    onChange={(e) => handleChange(e, 1)}
                    type="file"
                    className={cx('choose-file')}
                    name="Chose file"
                />
            </div>
            <div className={cx('input-box')}>
                <p className={cx('title')}>Number Vouchers {errors[2] && <span style={{ color: 'red' }}>*</span>}</p>
                <Input
                    ref={(ref) => (reflist.current[2] = ref)}
                    onChange={(e) => handleChange(e, 2)}
                    placeholder={'Number Vouchers'}
                    error={errors[2]}
                    value={formData[2]}
                />
            </div>
            <div className={cx('input-box')}>
                <p className={cx('title')}>
                    Time Start Time Start {errors[3] && <span style={{ color: 'red' }}>*</span>}
                </p>
                <Input
                    error={errors[3]}
                    ref={(ref) => (reflist.current[3] = ref)}
                    onChange={(e) => handleChange(e, 3)}
                    type="date"
                    name="start"
                    value={formData[3]}
                />
            </div>
            <div className={cx('input-box')}>
                <p className={cx('title')}>Time End {errors[4] && <span style={{ color: 'red' }}>*</span>}</p>
                <Input
                    error={errors[4]}
                    ref={(ref) => (reflist.current[4] = ref)}
                    onChange={(e) => handleChange(e, 4)}
                    type="date"
                    name="end"
                    value={formData[4]}
                />
            </div>
        </>
    );

    const listbutton = (
        <Button primary onClick={handleSubmit}>
            OK
        </Button>
    ); */
function Input({ label, isRequired, onBlur, onChange, error, placeholder, type, name, value }, ref) {
    const [inputValue, setInputValue] = useState(value || '');
    const InputRef = useRef();

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(e);
        }
    };
    return (
        <>
            <p className={cx('input-label')}>
                {label} {isRequired && <span style={{ color: 'red' }}>*</span>}
            </p>
            <input
                onBlur={onBlur}
                onChange={handleChange}
                ref={InputRef}
                value={inputValue}
                type={type}
                name={name}
                className={cx('inputinfo')}
                placeholder={error || placeholder}
            ></input>
        </>
    );
}

export default forwardRef(Input);
