import classes from "./Navbar.module.css";

const Navbar = () => {
    return ( 
        <ul className={classes["navbar"]}>
            <li>SCHEDULE</li>
            <li>WORKSHOP</li>
            <li>ACTIVITIES</li>
            <li>SPONSERS</li>
            <li>CONTACT US</li>
            <li>INNOVATIVE CORNER</li>
            <ul><li>SIGN IN</li>
            <li>SIGN UP</li></ul>
        </ul>
     );
}
 
export default Navbar;