import React, { PureComponent } from "react"
import './App.css';
import ChartGraph from "./ChartGraph"
class App extends PureComponent {
  state = {
    isloading: true,
    data: []
  }

  componentDidMount() {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo')
      .then((resp) => resp.json())
      .then(json => {
        this.setState({ isloading: false, data: json })
      })
      .catch((err) => console.log("error->", err))
  }
  render() {
    const { isloading, data } = this.state;
    delete data['Meta Data']
    let objArray = [];
    let graphArray = [];
    let newData = Object.values(data)[0]
    if (newData) {
      Object.keys(newData).forEach(key => objArray.push({
        name: key,
        ...Object.values(newData[key])
      }));
      for (let i = 0; i < objArray.length; i += 14) {
        graphArray.push(objArray[i])
      }
    }


    if (isloading) {
      return <div style={{ color: "white" }}>
        Loading data....
      </div>
    }

    return (
      <div className="App" >
        Stock Market Timeline
        <ChartGraph graphData={graphArray} />
        <Report data={graphArray}
          filename={filename}
          fields={fields}
          style={style}
          text={text} />
      </div>
    );
  }

}

export default App;
