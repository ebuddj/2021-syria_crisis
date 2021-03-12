import React, {Component} from 'react';
import style from './../styles/styles.less';

import DWChart from 'react-datawrapper-chart';

let interval, path_prefix;
const images = ['1 People in need and targeted.jpg','2 Total displacements.jpg','3 Syrian refugees per country.jpg','4 Funding to Syria Crisis.jpg','5 Funding Syria Humanitarian Response Plan.jpg','6 Funding Syria Refugee and Resilience Response Plan.jpg','7 Top donors to Syria Crisis.jpg'];
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide_images:false,
      current_img:images[0],
      dw_elements:false
    }
  }
  componentDidMount() {
    let idx = 0;
    interval = setInterval(() => {
      idx++
      this.setState((state, props) => ({
        current_img:images[idx]  
      }));
      if (idx >= (images.length - 1)) {
        clearInterval(interval)
        this.setState((state, props) => ({
          hide_images:true
        }), this.createDWChart);
      }
    }, 1);
  }
  createDWChart() {
    this.setState((state, props) => ({
      dw_elements:['//datawrapper.dwcdn.net/34jp9/1/','//datawrapper.dwcdn.net/6PyK5/1/','//datawrapper.dwcdn.net/09vnr/2/','//datawrapper.dwcdn.net/sZhpE/1/','//datawrapper.dwcdn.net/kXEfC/2/','//datawrapper.dwcdn.net/u7jCu/1/','//datawrapper.dwcdn.net/hhtZe/1/']
     }), this.initDWChart);
  }
  initDWChart() {
     !function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"])for(var e in a.data["datawrapper-height"]){var t=document.getElementById("datawrapper-chart-"+e)||document.querySelector("iframe[src*='"+e+"']");t&&(t.style.height=a.data["datawrapper-height"][e]+"px")}}))}();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {
    clearInterval(interval);
  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    if (location.href.match('localhost')) {
      path_prefix = './';
    }
    else {
      path_prefix = 'https://raw.githubusercontent.com/ebuddj/2021-syria_crisis/main/public/';
    }
    return (
      <div className={style.app}>
        <img src={path_prefix + 'img/' + this.state.current_img} alt="" style={(this.state.hide_images === true) ? {display: 'none'} : {display: 'block'}}/>
        {this.state.dw_elements && this.state.dw_elements.map((item, i) =>
          <DWChart key={i} title={'Chart ' + i} src={item} />
        )}
      </div>
    );
  }
}
export default App;