// Content.js
import React, {Component} from 'react';

export default class Content extends Component {
  render() {
    const url_base   = "https://api.spotify.com/v1/artists?ids=";
    const ids        = "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6";
    const url        = url_base + ids;

    const auth_token = "BQCX-1lSELa7sWUui3AEjtOM4fuXjrDoGaTGrBxJIpz3lkhTbOSxI-CqoPZA2MDCxF2hwS5r0RllnI7A57fC_6Aj9gkTzIFJvCEvFQe4sZk9qBpX2Px709qv0lhmN8rgUogamktZyJsoBP8A";

    const json_obj = fetch(url, {
      method: 'get',
      headers: {
        'Authorization': 'Bearer BQCX-1lSELa7sWUui3AEjtOM4fuXjrDoGaTGrBxJIpz3lkhTbOSxI-CqoPZA2MDCxF2hwS5r0RllnI7A57fC_6Aj9gkTzIFJvCEvFQe4sZk9qBpX2Px709qv0lhmN8rgUogamktZyJsoBP8A',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
    console.log(json_obj);
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Page Header
            <small>Optional description</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
            <li className="active">Here</li>
          </ol>
        </section>

        <section className="content container-fluid">

        </section>
      </div>
    )
  }
}
