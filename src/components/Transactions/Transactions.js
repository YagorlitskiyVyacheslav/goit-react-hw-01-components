import React from "react";
import Table from "./transactions.component"


const Transactions = ({items}) => {
    let tableColor = "rgba(165,165,165,0.5)";
    const changeTableColor = () => {
        if (tableColor === "rgba(165,165,165,0.5)") {
          return (tableColor = "#ffffff");
        }
        if (tableColor === '#ffffff') {
            return (tableColor = "rgba(165,165,165,0.5)");
        }
    }
    return (
      <>
        <h2>Task 4</h2>
        <Table>
          <Table.Thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </Table.Thead>
          <Table.Tbody>
            {items.map((item) => {
              return (
                <Table.Tr key={item.id} color={changeTableColor()}>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </>
    );
}

export default Transactions;
