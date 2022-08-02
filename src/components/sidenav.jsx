import React, { Component } from 'react';

class SideNav extends Component {
    state = {  } 
    render() {
        return (
          <div class="vertical-menu" style={{display: "inline-block"}}>
            <a href="#" class="active">Home</a>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
          </div>
        )
    }
}
 
export default SideNav;