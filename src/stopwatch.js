var WatchContainer = React.createClass({

    getInitialState: function(){
      return {
        time: 0,
        laps: [],
      }
    },


    startTimeClick: function(e){
      var _this = this
      clearInterval(this.increment);
      this.increment = setInterval(function(){ 
        _this.setState({
          time: _this.state.time + 1
        }) 
      }, 1000)
    },

    stopTimeClick: function() {
      clearInterval(this.increment);
    },

    clearTime: function() {
      clearInterval(this.increment);

      this.setState({
        time: 0
      })
    },

    createLap: function() {
      this.state.laps.push(this.state.time)
    },
    
    render: function(){
      var laps = this.state.laps.map(function(lap){
        return <li> {lap} </li>;
      });

      var style = {
        color: 'green'
      };

      return (
        <div style={style}>
          <h3> Seconds: {this.state.time} </h3>
          <button onClick={this.startTimeClick}>Start</button>
          <button onClick={this.stopTimeClick}>Pause</button>
          <button onClick={this.clearTime}>Reset</button>
          <button onClick={this.createLap}>Lap</button>
          <ul>{laps}</ul>
        </div>
      )
    }
});

ReactDOM.render(<WatchContainer />, document.getElementById('app'));


