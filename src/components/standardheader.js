import { Link } from "react-router-dom"

function StandardHeader(){
    return  <header className="header standard" id="nav-standard">
      <div className='header-container'>
      <Link to="/" id='aisis-online-link'>
          <h1 id='aisis-text'>aisis </h1> <h1 id='online-text'>online</h1>
          </Link>
          <ul>
             <li>
              <Link to="/enlist">
                Enlist
              </Link>
             </li>
             <li>
              <Link to="/class-schedules">
                Class Schedules
              </Link>
             </li>
             <li>
              <Link to="/individual-program-of-study">
                My IPS
              </Link>
             </li>
          </ul>

      </div>
          

  </header>
}
export default StandardHeader