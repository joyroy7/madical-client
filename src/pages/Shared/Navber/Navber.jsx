import { Link } from "react-router-dom";
// import logo from '../../../assets/Home/logo.png'
const Navber = () => {

    const navOptions = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/AvailableCamps'>Available Camps</Link></li>
    <li><a>Dashboard</a></li>
    <li><Link to='/contact'>Contact Us</Link></li>
    <li><Link to='/login'>Login</Link></li>

    </>


    return (
        <>
        <div className="navbar fixed z-10 bg-opacity-40 max-w-screen-xl bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Madical</a>
    {/* <img src={logo} alt="" /> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            
        </>
    );
};

export default Navber;