import './navigation.styles.scss'
import { Outlet,Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo} from "../../assests/crown.svg"
const Navigation=()=>{
    return (
      <Fragment>
      <div className="Nav">
      <Link className="logo-container" to='/'>
        <CrwnLogo className="logo"/>
        </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to = '/shop'>
        SHOP
        </Link>
        <Link className="nav-link" to = '/auth'>
        SIGN IN / SIGN UP
        </Link>
      </div> 
      </div>
      <Outlet/>
      </Fragment>
    )
  }
  export default Navigation;