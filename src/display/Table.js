function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Street</th>
                    <th>Payment</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.fullName}</td>
                            <td>{data.emailAddress}</td>
                            <td>{data.phoneNo}</td>
                            <td>{data.address}</td>
                            <td>{data.street}</td>
                            <td>{data.cash}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table;