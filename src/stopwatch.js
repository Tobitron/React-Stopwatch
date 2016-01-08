var WatchContainer = React.createClass({

    getInitialState: function(){
      return {
        time: 0,
        data: "I'm initial state data"
      }
    },


    startTimeClick: function(e){
      var _this = this
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

    
    render: function(){
      return (
        <div>
          <h3> Seconds: {this.state.time} </h3>
          <button onClick={this.startTimeClick}>Start</button>
          <button onClick={this.stopTimeClick}>Pause</button>
          <button onClick={this.clearTime}>Reset</button>
        </div>
      )
    }
});

ReactDOM.render(<WatchContainer />, document.getElementById('app'));


