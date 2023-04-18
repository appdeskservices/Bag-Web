import React from "react";
import AnalyticsDashboard from "./AnalyticsDashboard";
import {
  DashboardContainer,
  DashboardLowerContainer,
  FilterButton,
  FilterComponent,
  FilterHeading,
  TableHeading,
  TableSearch,
  TableTopFiltersContainer,
} from "./DashboardStyles";
import { MdTune } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Dashboard() {
  function createData(order, date, customer, status, salesChannel, total) {
    return { order, date, customer, status, salesChannel, total };
  }

  const rowStyle = {
    fontFamily: "Inter",
    color: "#111827",
    fontWeight: "400",
  };

  const columnStyle = {
    fontFamily: "Inter",
    color: "#6B7280",
    fontWeight: "600",
  };

  const rows = [
    createData(
      "#2416",
      "30 January 2022 16:25",
      "Gracyn Schaeferz",
      "Awaiting Payment",
      "Website",
      "$244.99"
    ),
    createData(
      "#2416",
      "30 January 2022 16:25",
      "Gracyn Schaeferz",
      "Awaiting Payment",
      "Website",
      "$244.99"
    ),
    createData(
      "#2416",
      "30 January 2022 16:25",
      "Gracyn Schaeferz",
      "Awaiting Payment",
      "Website",
      "$244.99"
    ),
    createData(
      "#2416",
      "30 January 2022 16:25",
      "Gracyn Schaeferz",
      "Awaiting Payment",
      "Website",
      "$244.99"
    ),
    createData(
      "#2416",
      "30 January 2022 16:25",
      "Gracyn Schaeferz",
      "Awaiting Payment",
      "Website",
      "$244.99"
    ),
  ];
  return (
    <DashboardContainer>
      <AnalyticsDashboard />
      <DashboardLowerContainer>
        <TableHeading>Recent Orders</TableHeading>
        <TableTopFiltersContainer>
          <div style={{ display: "flex", gap: "0.2rem" }}>
            <FilterButton>
              <MdTune size={20} color="#111827" />
              Filters
            </FilterButton>
            <FilterComponent>
              <FilterHeading>Only US +$100</FilterHeading>
              <RxCross1 style={{ cursor: "pointer" }} />
            </FilterComponent>
            <FilterComponent>
              <FilterHeading>Sweden from 2021</FilterHeading>
              <RxCross1 style={{ cursor: "pointer" }} />
            </FilterComponent>
          </div>
          <TableSearch placeholder="Search name or email..." />
        </TableTopFiltersContainer>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={columnStyle}>Order</TableCell>
                <TableCell align="center" style={columnStyle}>
                  Date
                </TableCell>
                <TableCell align="center" style={columnStyle}>
                  Customer
                </TableCell>
                <TableCell align="center" style={columnStyle}>
                  Status
                </TableCell>
                <TableCell align="center" style={columnStyle}>
                  Sales channel
                </TableCell>
                <TableCell align="center" style={columnStyle}>
                  Total
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.order}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" style={rowStyle}>
                    {row.order}
                  </TableCell>
                  <TableCell align="center" style={rowStyle}>
                    {row.date}
                  </TableCell>
                  <TableCell align="center" style={rowStyle}>
                    {row.customer}
                  </TableCell>
                  <TableCell align="center" style={rowStyle}>
                    {row.status}
                  </TableCell>
                  <TableCell align="center" style={rowStyle}>
                    {row.salesChannel}
                  </TableCell>
                  <TableCell align="center" style={rowStyle}>
                    {row.total}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DashboardLowerContainer>
    </DashboardContainer>
  );
}
