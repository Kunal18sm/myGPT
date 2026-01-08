import "./sidebar.css";
import logo from "./assets/logo.jpg";

function Sidebar() {
  return (
    <section className="sidebar">
      <button>
        <img className="logo" src={logo} alt="logo" />
        <i className="fa-regular fa-pen-to-square"></i>
      </button>

      {/* new chat button  */}

      {/* history  */}
      <ul className="history">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>

      {/* sign  */}
      <div className="sign">

      </div>
    </section>
  )
}

export default Sidebar;