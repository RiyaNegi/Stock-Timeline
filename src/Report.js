import React from "react"
import {
    JsonToCsv,
    useJsonToCsv
} from 'react-json-csv';

function Report(props) {
    const { saveAsCsv } = useJsonToCsv();
    const { data, fields, filename } = props
    console.log("values passed -> ", data, fields, filename)
    return <button onClick={() => saveAsCsv({ data, fields, filename })}>
        Create excel report
</button>
}

export default Report
