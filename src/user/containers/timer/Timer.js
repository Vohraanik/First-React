import React, { Component } from 'react'
import style from './timer.module.css'

export default class timer extends Component {

  // 1.It used to intizlize state value or binding methods
  constructor(props) {
    super(props)

    this.state = {
      time: new Date()
    }
  }

  tick = () =>{
    this.setState({
      time: new Date()
    })
  }


  //3. It is called after mounting .it is mostly used to get data from server
  componentDidMount() {
    this.timeRef = setInterval(this.tick,1000);
  }
  

  // 4. It is called when state and props value changed 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.time !== this.state.time) {
      console.log('Component did update');
    }
  }

  // 5. it is used realse occupied resources when we move to anothor component

  componentWillUnmount() {
    clearInterval(this.timeRef);
  }

  // 2. It is used display JSX in Dom.It is Called whwn any state or props changes
  render() {
    return (
      <div>
      <div className={style.timerContainer}>
        <h1 className={style.timerHeading}>Timer</h1>
        <h1 className={style.timerDisplay}>{this.state.time.toLocaleTimeString()}</h1>
      </div>

      </div>
    )
  }
}
