import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// de tippy nhan duoc ref
// biet vi tri comp
// hien thi tippy-box

// tiny cac anh qua lon

const Image = forwardRef(({ src, alt, className, fallback: customfallback = images.noimage, ...props }, ref) => {
    const handleError = () => {
        setfallback(customfallback);
    };
    const [fallback, setfallback] = useState('');

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        ></img>
    );
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
    //ref: PropTypes.string,
};
export default Image;
