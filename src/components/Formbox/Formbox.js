import classNames from 'classnames/bind';
import styles from './Formbox.scss';
import { useState } from 'react';
import React from 'react';

const cx = classNames.bind(styles);

function Formbox({ className, label, inputs = [], buttons }) {
    return (
        <div className={cx('formbox-wrapper')}>
            <p className="label">{label}</p>
            <div className={cx('inputs')}>{inputs}</div>
            <div className={cx('buttons')}>{buttons}</div>
        </div>
    );
}

export default Formbox;
