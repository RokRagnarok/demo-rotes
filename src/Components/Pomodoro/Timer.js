import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }

        //Initial State
        this.state = {
            alert: {
                type: '',
                message: '',
            },

            time: 0
        };

        this.times = {
            defaultTime: 1500, // 25min
            shortBreak: 300, // 5min
            longBreak: 900, // 15min
            stop : 0,
            
        }
    }
  
    componentDidMount() {

            //Establece tiempo por defecto cuando el componente sea montado
        this.setDefaultTime()
    }

    setDefaultTime() {
        this.setState({
            time: this.times.defaultTime
        })
    }

    //BUTTONS
    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'Rutina larga'
            }
        })
        this.setTime(this.times.defaultTime);
    }
  setTimePause = () => {
    this.setState({

        
        alert: {
         type: 'pause',
         message: 'pause'
        }
    })
     this.setTime(this.times.pause);
  }
  setTimeStop = () => {
      this.setState({
          type: 'stop',
          message: 'detenido'
      })
      this.setTime(this.times.stop);
  }
    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Rutina corta'
            }
        })
        this.setTime(this.times.shortBreak);
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Rutina media'
            }
        });

        this.setTime(this.times.longBreak);
    }

    setTime = (newTime) => {
        this.restartInterval();
        this.setState({
            time: newTime,
        })
    }
    restartInterval = () => {
        clearInterval(this.interval);

        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: 'TIEMPO',
                    message: 'SE TERMINO EL TIEMPO'
                }
            })
        } else {
            this.setState({
                time: this.state.time - 1
            });
            
        }
    }

   displayTimer(seconds){
    const m = Math.floor(seconds/60);
    const s = seconds%60;
    

   

 return `${m < 10 ? '0' : ''}${m}: ${s < 10 ? '0' : ''}${s}`; 
     
     }


    render() {

        const {alert: { message, type}, time } = this.state;

        return (
            <div className = "Pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className = "timer">
                  {this.displayTimer(time)}
                </div>

                <div className = "types">
                    <button
                        className= "start"
                        onClick= {this.setTimeForWork}
                    >
                        25 minutos
                    </button>

                    <button
                        className= "short"
                        onClick= {this.setTimeForShortBreak}
                    >
                        5 minutos
                    </button>

                    <button
                        className= "long"
                        onClick= {this.setTimeForLongBreak}
                    >
                        15 minutos
                    </button>


                  
                </div>
              

                <button className = "Detener"
                onClick = {this.setTimeStop}
                >

                  stop
                </button>
           
            </div>

        )
    }

}

export default Timer;