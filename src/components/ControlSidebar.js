// ControlSidebar.js
import React, {Component} from 'react';

export default class ControlSidebar extends Component {
  render() {
    return (
      <div>
      <aside className="control-sidebar control-sidebar-dark">
        <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
          <li className="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home"></i></a></li>
          <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears"></i></a></li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="control-sidebar-home-tab">
            <h3 className="control-sidebar-heading">Recent Activity</h3>
          </div>
        </div>
      </aside>
      <div className="control-sidebar-bg"></div>
      </div>
    )
  }
}
