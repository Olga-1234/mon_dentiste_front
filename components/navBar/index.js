import Image from 'next/image';
import logo from '../../assets/monDentiste.png';
import Button from '../button';
import style from './style.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import ButtonM from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiUsers } from 'react-icons/fi';
import { TbBuildingHospital, TbClipboardList } from 'react-icons/tb';
import { RiPencilLine } from 'react-icons/ri';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0'
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5)
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                )
            }
        }
    }
}));

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [token, setToken] = useState('');
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    console.log(token, 'le token navbar');

    const [isAuth, setIsAuth] = useState(token);
    const [deconnect, setDeconnect] = useState(true);
    useEffect(() => {
        setIsAuth(isAuth);
        if (isAuth) {
            setDeconnect(false);
        }
    }, [isAuth]);

    // const deconnexion = () => {
    //     if (isAuth) {
    //         localStorage.clear();
    //         setIsAuth('');
    //         console.log(localStorage, 'le localstorage apres deconnection');
    //     }
    // };

    const [state, setState] = useState({ roles: [] });
    useEffect(() => {
        setState({
            roles:
                localStorage.getItem('roles') !== null
                    ? localStorage.getItem('roles').split(',')
                    : ' '
        });
        // console.log(localStorage.getItem('roles').split(','));
        //  console.log(localStorage)
    }, []);


    const router = useRouter();

    const handleLogout = () => {
        localStorage.clear();
        setIsAuth('');
        console.log(localStorage, 'le localstorage apres deconnection');
        router.push('/login');
    };
    return (
        <div className={`w-100  ${style.positionFixed}`}>
            <header className={`${style.header}`}>
                <a href="" className={`${style.logo} ${style.linkLogo} `}>
                    Mon Dentiste
                </a>
                <input className={`${style.menubtn} `} type="checkbox" id="menu-btn" />
                <label className={`${style.menuicon}`} htmlFor="menu-btn">
                    <span className={`${style.navicon}`}></span>
                </label>
                <ul className={`${style.menu} `}>
                    <li className="">
                        <Link href="/" passHref>
                            <a
                                title="Accueil"
                                className={
                                    router.pathname == '/'
                                        ? 'active text-info border  border-bottom'
                                        : 'text-dark'
                                }>
                                Accueil
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/dentiste" passHref>
                            <a
                                title="Dentistes"
                                className={
                                    router.pathname == '/dentiste'
                                        ? 'active text-info border  border-bottom'
                                        : 'text-dark'
                                }>
                                Dentistes
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/articles" passHref>
                            <a
                                title="Articles"
                                className={
                                    router.pathname == '/articles'
                                        ? 'active text-info border  border-bottom'
                                        : 'text-dark'
                                }>
                                Articles
                            </a>
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/a_propos_de_nous" passHref>
                            <a
                                title="A propos"
                                className={
                                    router.pathname == '/a_propos_de_nous'
                                        ? 'active text-info border  border-bottom'
                                        : 'text-dark'
                                }>
                                A propos
                            </a>
                        </Link>
                    </li>

                    {token ? (
                        <li className="pt-3 px-3">
                            <IconButton
                                id="demo-customized-button"
                                aria-controls={open ? 'demo-customized-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                variant="text"
                                disableElevation
                                onClick={handleClick}>
                                <AccountCircleIcon />
                            </IconButton>
                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button'
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}>
                                {state.roles.indexOf('customer') > -1 && (
                                    <Link href="/AdminPage" passHref>
                                        <a
                                            className={`d-block ${style.textdecoration}`}
                                            aria-current="page">
                                            <MenuItem onClick={handleClose} disableRipple>
                                                <TbClipboardList /> <p className="px-1"> </p>
                                                Rendez-vous
                                            </MenuItem>
                                        </a>
                                    </Link>
                                )}

                                {state.roles.indexOf('dentiste') > -1 && (
                                    <Link href="/AdminPage/dentiste" passHref>
                                        <a
                                            className={`d-block ${style.textdecoration}`}
                                            aria-current="page">
                                            <MenuItem onClick={handleClose} disableRipple>
                                                <TbClipboardList /> <p className="px-1"> </p>
                                                Les rendez-vous
                                            </MenuItem>
                                        </a>
                                    </Link>
                                )}

                                {state.roles.indexOf('admin') > -1 && (
                                    <Link href="/AdminPage/adminrendez_vous" passHref>
                                        <a
                                            className={`d-block ${style.textdecoration}`}
                                            aria-current="page">
                                            <MenuItem onClick={handleClose} disableRipple>
                                                <TbClipboardList /> <p className="px-1"> </p>
                                                Tous les rendez-vous
                                            </MenuItem>
                                        </a>
                                    </Link>
                                )}
                                {(state.roles.indexOf('admin') > -1 ||
                                    state.roles.indexOf('dentiste') > -1) && (
                                    <Link href="/AdminPage/articles" passHref>
                                        <a
                                            className={`d-block ${style.textdecoration}`}
                                            aria-current="page">
                                            <MenuItem onClick={handleClose} disableRipple>
                                                <RiPencilLine /> <p className="px-1"> </p>
                                                Articles
                                            </MenuItem>
                                        </a>
                                    </Link>
                                )}
                                {state.roles.indexOf('admin') > -1 && (
                                    <Link href="/AdminPage/cabinet" passHref>
                                        <a
                                            className={`d-block ${style.textdecoration}`}
                                            aria-current="page">
                                            <MenuItem onClick={handleClose} disableRipple>
                                                <TbBuildingHospital /> <p className="px-1"> </p>
                                                Les cabinets
                                            </MenuItem>
                                        </a>
                                    </Link>
                                )}
                                {state.roles.indexOf('admin') > -1 && (
                                    <Link href="/AdminPage/utilisateur" passHref>
                                        <a
                                            className={`d-block ${style.textdecoration}`}
                                            aria-current="page">
                                            <MenuItem disableRipple>
                                                <FiUsers /> <p className="px-1"> </p>
                                                Users
                                            </MenuItem>
                                        </a>
                                    </Link>
                                )}
                                <Divider sx={{ my: 0.5 }} />
                                <MenuItem onClick={handleLogout}>
                                    <FiLogOut /> <p className="px-1"> </p>
                                    Deconnexion
                                </MenuItem>
                            </StyledMenu>
                        </li>
                    ) : (
                        <li className="">
                            <Link href="/login" passHref>
                                <a title="login">
                                    {/* <IconButton
                                aria-haspopup="true"
                                variant="text"
                                disableElevation
                                > */}
                                    <AccountCircleIcon color="text" />
                                    {/* </IconButton> */}
                                </a>
                            </Link>
                        </li>
                    )}
                </ul>
            </header>
        </div>
    );
};

export default NavBar;
