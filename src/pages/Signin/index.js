import Button from '~/components/Button';
import Formbox from '~/components/Formbox';
import Input from '~/components/Input';
import Mask from '~/layouts/Mask';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { checklogin } from '~/services/login';
import { useNavigate } from 'react-router-dom';
import { login } from '~/libs/redux/sliceAuth';
import { useAppDispatch, useAppSelector } from '~/libs/redux/hooks';
import { signupbrand } from '~/services/siginup';
import PropTypes from 'prop-types';
const signupFields = [
                { label: 'username', placeholder: 'username' },
                { label: 'password', placeholder: 'password' },
                { label: 'Name', placeholder: 'Name' },
                { label: 'email', placeholder: 'email' },
                { label: 'phone', placeholder: 'phone' },
                { label: 'Industry', placeholder: 'Industry' },
                { label: 'Address', placeholder: 'Address' },
                { label: 'GPS (Lat)', placeholder: 'GPS (Lat)' },
                { label: 'GPS (Long)', placeholder: 'GPS (Long)' },
               
            ];
            
const loginFields = [
                { label: 'Account', placeholder: 'Account' },
                { label: 'Password', placeholder: 'Password' }
            ];

function Signin({setToken}) {
    const [signup, setSignup] = useState(false);
    const [formData, setFormData] = useState([]);
    const [errors, setErrors] = useState([]);
      
const handleSignup = () => {
        setSignup(true);
    };
    const Submit = async (e) => {
        e.preventDefault();
        //username, password,brand_name,email,phone,industry,address,lat,long
       try
        { 
          console.log(formData);
          const res = await signupbrand(formData[0], formData[1], formData[2], formData[3], formData[4], formData[5], formData[6]);
          console.log(res);
            
        }
        catch(e)
        {
            console.log(e);
            
        }
        setSignup(false);
    };
    const handleSignin = async (e)  => {
        e.preventDefault();
        if(!formData[0] || !formData[1])
        {
            return;
        }
        try {
            const { authToken } = await checklogin(formData[0], formData[1]);
            console.log('setToken in signin type: ',typeof setToken);
           
            setToken(authToken);
              //  setTokens(authToken);
            
                // This should be a function call
            
            
        } catch (error) {
            console.error(error);
        } 
    }
   // console.log(formData[0],typeof formData[0],formData[1], typeof formData[1] )
    // useEffect(() => {
    //     if (token) {
    //       navigate('/home');
    //     }
    //   }, [token, navigate]);
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
    const listinput = signup ? (
        signupFields.map((field, index) => (
            <Input
                key={index}
                label={field.label}
                isRequired
                error={errors[index]}
                value={formData[index]}
                onChange={(e) => handleChange(e, index)}
                placeholder={field.placeholder}
            />
        ))
    ) : (
        loginFields.map((field, index) => (
            <Input
                key={index}
                label={field.label}
                isRequired
                error={errors[index]}
                value={formData[index]}
                onChange={(e) => handleChange(e, index)}
                placeholder={field.placeholder}
            />
        ))
    );

    const listbutton = signup ? (
        <Button primary onClick={Submit}>
            OK
        </Button>
    ) : (
        <>
            <Button primary onClick={(e) => handleSignin(e)}>
                    Sign in
            </Button>
           
            <Button primary onClick={e => handleSignup(e)}>
                Sign up
            </Button>
        </>
    );

    return (
        <Mask>
            <Formbox label="Sign in" inputs={listinput} buttons={listbutton} />
        </Mask>
    );
}
Signin.propTypes = {
    setToken: PropTypes.func.isRequired
  };
export default Signin;
