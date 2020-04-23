import React, { useState } from "react";
import "./styles.css";

export default function App() {
    const [file, setFile] = useState(
        [
            [{ fileNames: '', fileTitle: '' }]
        ],
    );

    const onPdfUploadHandler = (e, i) => {
        console.log(e, 'this')
        e.persist()
        let fileName =
            file.map((row, x) => {
                row = x === i ? {
                    fileNames: URL.createObjectURL(e.target.files[0]),
                    fileTitle: Math.random().toString(32).substring(2, 10) + '.pdf'
                } : { ...row }
                return { ...row }
            })
        console.log(fileName);
        setFile(fileName)
    }
    return (
        <div className="App">
            <table className="shipping-documents mt-10">
                <thead>
                    <tr>
                        <th>Container Name</th>
                        <th>Invoice Number</th>
                        <th>Invoice Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        file.map((row, i) => {
                            col
                            return (
                                <tr key={i}>
                                    <td >
                                        <a href={row.fileNames}
                                            target="_blank"
                                            rel="noopener noreferrer">{row.fileTitle}</a>
                                        <label>
                                            <p>Upload</p>
                                            <input
                                                style={{ display: 'none' }}
                                                type="file"
                                                accept=".pdf"
                                                name="fileUpload"
                                                onChange={(e) => onPdfUploadHandler(e, i)} />
                                        </label>
                                    </td>
                                    <td>
                                        <a href={row.fileNames}
                                            target="_blank"
                                            rel="noopener noreferrer">{row.fileTitle}</a>
                                        <label>
                                            <p>Upload</p>
                                            <input
                                                style={{ display: 'none' }}
                                                type="file"
                                                accept=".pdf"
                                                name="fileUpload"
                                                onChange={(e) => onPdfUploadHandler(e, i)} />
                                        </label>
                                    </td>
                                    <td key={i}>
                                        <a href={row.fileNames}
                                            target="_blank"
                                            rel="noopener noreferrer">{row.fileTitle}</a>
                                        <label>
                                            <p>Upload</p>
                                            <input
                                                style={{ display: 'none' }}
                                                type="file"
                                                accept=".pdf"
                                                name="fileUpload"
                                                onChange={(e) => onPdfUploadHandler(e, i)} />
                                        </label>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}