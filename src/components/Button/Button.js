import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//import clsx from 'clsx';

const cx = classNames.bind(styles);

function Button({
    to,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    lefticon,
    righticon,
    href,
    children,
    onClick,
    className,
    ...passProps
}) {
    let Comp = 'button';

    // const classes = clsx(cx('wrapper'), {
    //     [styles.primary]: primary,
    // });
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        // tuc la value cua className khong trung la className
        [className]: className,
    });

    const props = {
        onClick,

        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    // remove event listener when btn is disabled
    if (disabled) {
        // xu ly logic
        //delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') delete props[key];
        });
    }
    console.log("Comp :", Comp);
    
    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    lefticon: PropTypes.node,
    righticon: PropTypes.node,
    href: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};
export default Button;
