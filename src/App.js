import React, { PureComponent, useRef } from "react"
import './App.css';
import ChartGraph from "./ChartGraph"
import Report from "./Report"


const filename = 'Csv-file'
const fields = {
  "name": "Date",
  "0": "open",
  "1": "high",
  "2": "low",
  "3": "close"
},
  style = {
    padding: "5px"
  },
  text = "Convert Json to Csv";


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
        <div className="App-header" >
          Stock Market Timeline
        </div>
        <Report data={graphArray}
          filename={filename}
          fields={fields}
          style={style}
          text={text} />
        <div className="d-flex justify-content-center">
          <ChartGraph graphData={graphArray} />
        </div>
      </div>
    );
  }

}

export default App;
