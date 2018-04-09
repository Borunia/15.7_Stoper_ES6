class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0,
        }
    
        //buttons
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.saveResult = this.saveResult.bind(this);
        this.deleteResult = this.deleteResult.bind(this);


        this.format = this.format.bind(this);
        this.getMiliseconds  = this.getMiliseconds.bind(this);
        this.getSeconds = this.getSeconds.bind(this);
        this.getMinutes = this.getMinutes.bind(this);
        this.pad0 = this.pad0.bind(this);
    }

    getMinutes() {
        if(this.state.seconds >= 60) {
          this.state.seconds = 0;
          this.setState({
            minutes: this.state.minutes += 1
          });
        } else {
          return this.state.minutes;
        }
    }

    getSeconds() {
        if (this.state.miliseconds >= 100 ) {
            this.state.miliseconds = 0;
            this.setState({
                seconds: this.state.seconds += 1
            });
        } else {
          return this.state.seconds;
        }
    }

    getMiliseconds() {
        return this.state.miliseconds;
      }

    reset() {
        this.setState({
        miliseconds: this.state.miliseconds = 0,
        seconds: this.state.seconds = 0,
        minutes: this.state.minutes = 0
        });
    }

    format(minuts, seconds, miliseconds) {
        return  this.pad0(minuts) + ':' + this.pad0(seconds) + ':' + this.pad0(miliseconds);
    }

    pad0(value) {
        if (value.toString().length < 2) {
            return value = '0' + value;
        } else {
            return value;
        }
    }

    start() {
        this.watch = setInterval( () => {
              this.setState({
                miliseconds: this.state.miliseconds + 1
            });
          }, 10);
        }

    stop() {
        clearInterval(this.watch);
    }

    saveResult() {
        const list = document.createElement('li');
        let wynik = document.querySelector('.stopwatch').textContent;
        list.innerHTML = wynik;
        document.getElementById('results').appendChild(list);
    }
    
    deleteResult() {
        const appendlist = document.getElementsByTagName('li');
        const results = document.getElementById('results');
        results.removeChild(appendlist[0]);
    }

    render() {
        return (
          <div className="timer">
            <nav className="controls">
              <a href="#" className="button" onClick={this.start}>Start</a>
              <a href="#" className="button"  onClick={this.stop}>Pause</a>
              <a href="#" className="button"  onClick={this.reset}>Reset</a>
              <a href="#"  className='button' onClick={this.saveResult}>Save results</a>
              <a href="#"  className='button' onClick={this.deleteResult}>Delete result</a>
            </nav>
            <div className="stopwatch">
            {this.format(this.getMinutes(), this.getSeconds(), this.getMiliseconds())}
            </div>
            <ol type='1' id='results'>
            </ol>
          </div>
        );
      }
}

ReactDOM.render(
    <Stopwatch />,
    document.getElementById('app')
  );
