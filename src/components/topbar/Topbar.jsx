import "./topbar.scss";
import {  Mail ,AddIcCall} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            RSAP4YOU
          </a>
          <div className="itemContainer">
            <AddIcCall className="icon" />
            <span>+91 7479441094</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>kumaramarjeetraj7725@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
