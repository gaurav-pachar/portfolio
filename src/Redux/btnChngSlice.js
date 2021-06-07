import { createSlice } from '@reduxjs/toolkit';
import { NavigationLink, ScrollLink } from '../components/Navigation/NavBarItem';
// import { MdMail } from 'react-icons/md';
import { RiPagesFill } from 'react-icons/ri';
import { FaTools , FaUserAlt , FaUserGraduate , FaBlackTie } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';



const Resume_minimized = (<NavigationLink link="/portfolio/resume">
                                 <RiPagesFill/>
                                     Resume
                                </NavigationLink>);

const Resume_expanded = (
    <>
    <ScrollLink to="about"><FaUserAlt/>About</ScrollLink>
    <ScrollLink to="skills"><FaTools/>Skills</ScrollLink>
    <ScrollLink to="experience"><FaBlackTie/>Experience</ScrollLink>
    <ScrollLink to="academics"><FaUserGraduate/>Academics</ScrollLink>
    </>
);

export const navBaritemsChngSlice = createSlice({
    name: 'navBaritemsStateChange',
    initialState: {
       value0: Resume_minimized,
       value1: false,
       value2: false,
    },
    reducers: {
        minimize: (state) => {
            state.value0 = Resume_minimized
        },
        expand: (state) => {
            state.value0 = Resume_expanded
        },
        showMenuBtn: (state) => {
            state.value1 = true
        },
        hideMenuBtn: (state) => {
            state.value1 = false
        },
        showMenu: (state) => {
            state.value2 = !(state.value2)
        },
        hideMenu: (state) => {
            state.value2 = false
        }
    },
});

export const { minimize, expand, showMenuBtn, showMenu, hideMenuBtn, hideMenu} = navBaritemsChngSlice.actions;

export default navBaritemsChngSlice.reducer;