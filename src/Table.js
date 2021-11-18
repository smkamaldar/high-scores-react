import React from "react";

const Table = (props) => {
    const { scores } = props;
    return (
        <div className="row justify-content-md-center">
            <div className="col-10">
                <table className="table bg-info">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores.map((person, index) => {
                            return (
                                <tr key={index}>
                                    <td>{person.n}</td>
                                    <td>{person.s}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default Table;