import React, { PureComponent, useRef } from "react"
import './App.css';
import ChartGraph from "./ChartGraph"
import Report from "./Report"
import Loader from 'react-loader-spinner'



const filename = 'Csv-file'
const fields = {
  "name": "Date",
  "open": "Open",
  "high": "High",
  "low": "Low",
  "close": "Close"
},
  style = {
    padding: "5px"
  },
  text = "Convert Json to Csv";


class App extends PureComponent {
  state = {
    isloading: true,
    data: [],
    error: false
  }

  componentDidMount() {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo')
      .then((resp) => resp.json())
      .then(json => {
        this.setState({ isloading: false, data: json })
      })
      .catch((err) => this.setState({ isloading: false, error: true }))
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
      for (let i = 0; i < graphArray.length; i++) {
        graphArray[i].open = graphArray[i]['0'];
        graphArray[i].high = graphArray[i]['1'];
        graphArray[i].low = graphArray[i]['2'];
        graphArray[i].close = graphArray[i]['3'];
        delete graphArray[i]['0'];
        delete graphArray[i]['1'];
        delete graphArray[i]['2'];
        delete graphArray[i]['3'];
        delete graphArray[i]['4'];
      }
    }




    if (isloading) {
      return <div className=" d-flex flex-column justify-content-center" style={{ color: "white" }}>
        <div className="App-header" >
          Stock Market Timeline
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Loader
            type="Bars"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      </div>
    }

    return (
      <div className="App" >
        <div className="App-header" >
          Stock Market Timeline
        </div>
        <hr style={{ backgroundColor: 'white' }} />

        {this.state.error ? <div> There was some error fetching data. Please check your internet connection.</div> : <div><Report data={graphArray}
          filename={filename}
          fields={fields}
          style={style}
          text={text} />
          <div className="d-flex justify-content-center">
            <ChartGraph graphData={graphArray} />
          </div> </div>}

      </div>
    );
  }

}

export default App;
