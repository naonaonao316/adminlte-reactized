// Header.js
import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <a href="#" className="logo">
          <span className="logo-mini">SSG</span>
          <span className="logo-lg"><b>SSG</b>DashBoard</span>
        </a>
        <nav className="navbar navbar-static-top" role="navigation">
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          {/* Navbar Right Menu */}
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* Messages: style can be found in dropdown.less */}
              <li className="dropdown messages-menu">
                {/* Menu toggle button */}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-envelope-o"></i>
                  <span className="label label-success">4</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 4 messages</li>
                  <li>
                    {/* inner menu: contains the messages */}
                    <ul className="menu">
                      <li>{/* start message */}
                        <a href="#">
                          <div className="pull-left">
                            {/* user image */}
                            <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                          </div>
                          {/* Message title and timestamp */}
                          <h4>
                            Support Team
                            <small><i className="fa fa-clock-o"></i>5 mins</small>
                          </h4>
                          {/* The message */}
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      {/* End message */}
                    </ul>
                  </li>
                  <li className="footer"><a href="#">See all messages</a></li>
                </ul>
              </li>

              {/* Notifications Menu */}
              <li className="dropdown notifications-menu">
                {/* Menu toggle button */}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o"></i>
                  <span className="label label-warning">10</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 10 notifications</li>
                  <li>
                    {/* Inner Menu: contains the notifications */}
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-aqua"></i>5 new members joined today
                        </a>
                      </li>
                      {/* end notification */}
                    </ul>
                  </li>
                  <li className="footer"><a href="#">View all</a></li>
                </ul>
              </li>
              {/* User Account Menu */}
              <li className="dropdown user user-menu">
                {/* Menu Toggle Button */}
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  {/* The user image in the navbar */}
                  <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image" />
                  {/* hidden-xs hides the username on small devices so only the image appears.*/}
                  <span className="hidden-xs">Alexander Pierce</span>
                </a>
                <ul className="dropdown-menu">
                  {/* Another code will be written after bug fix... */}
                </ul>
              </li>
              {/* Control Sidebar Toggle Button */}
              <li>
                <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
