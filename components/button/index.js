import style from './style.module.css';

const Button = ({ text, type, onClick, disabled, toggle, target }) => {
    return (
        <button
            type={type ? type : 'submit'}
            data-bs-toggle ={toggle}
            data-bs-target={target}
            disabled={disabled}
            onClick={onClick}
            className={`nav-link  fw-bold px-5 ${style.borderConnexion}`}>
            {text}
        </button>
    );
};

export default Button;
