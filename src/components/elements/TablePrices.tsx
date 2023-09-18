import { Arrangements } from "@/types/data";
import styled from "@emotion/styled";
import React from "react";
import { Table } from "react-bootstrap";

type Props = {
  arrangement: Arrangements;
};

export default function TablePrices({ arrangement }: Props) {
  return (
    <TableStyle hover className="section-divider">
      <thead>
        <tr>
          <th>Достапни дати</th>
          <th>Цена по ноќ</th>
          <th>Ноќи</th>
          <th>Вкупно</th>
        </tr>
      </thead>
      <tbody>
        {arrangement.Prices[0].Prices.map((date) => {
          return (
            <tr key={date.id}>
              <td>{date.dateAvailable}</td>
              <td>{date.price}</td>
              <td>{date.nights}</td>
              <td>{date.price * date.nights}</td>
            </tr>
          );
        })}
      </tbody>
    </TableStyle>
  );
}

const TableStyle = styled(Table)`
  & thead {
    --bs-table-bg: var(--tertiary-color);

    & th {
      color: white;
    }
  }
`;
