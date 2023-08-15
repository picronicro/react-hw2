import React from "react";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            background: "#ff0022",
            width: "100px",
            height: "100px"
        }
    }

    render() {
        return(
            <div style={this.state} onClick={() => this.changeColor()}></div>
        )
    }

    changeColor() {
        if (this.state.background === "#ff0022") {
            this.setState({background: "#004cff"})
        } else if (this.state.background === "#004cff") {
            this.setState({background: "#ff0022"})
        }
    }
}

export default App;
