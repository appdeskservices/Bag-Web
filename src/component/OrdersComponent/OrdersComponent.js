import React, { useState } from "react";
import {
  ExportButton,
  ExportContainer,
  NewDraftButton,
  OverviewHeading,
  OrderHeadingContainer,
  OrdersContainer,
  OrdersTopContainer,
  DraftHeading,
  TableBox,
  FilterOptions,
  FilterApplyContainer,
  FilterResetButton,
  FilterApplyButton,
  IndividualFilterDiv,
  FilterSearchComponent,
  FilterSearchInput,
  FilterSearchButton,
} from "./OrdersComponentStyles";
import { BiExport } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import {
  FilterButton,
  FilterComponent,
  FilterHeading,
  TableSearch,
  TableTopFiltersContainer,
} from "../DashboardComponent/DashboardStyles";
import { MdTune } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OutsideClickHandler from "react-outside-click-handler";

export default function OrdersComponent() {
  const [showFilters, setShowFilters] = useState(false);
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
  const filters = ["Status", "Payment Status", "Date", "Sales Channels"];
  return (
    <OrdersContainer>
      <OrdersTopContainer>
        <OrderHeadingContainer>
          <OverviewHeading>Overview</OverviewHeading>
          <DraftHeading>Drafts</DraftHeading>
        </OrderHeadingContainer>
        <ExportContainer>
          <ExportButton>
            <BiExport size={20} color="#111827" /> Export list
          </ExportButton>
          <NewDraftButton>
            <AiOutlinePlus size={20} color="#111827" /> New draft order
          </NewDraftButton>
        </ExportContainer>
      </OrdersTopContainer>
      <TableTopFiltersContainer>
        <div style={{ display: "flex", gap: "0.2rem" }}>
          <div>
            {console.log(showFilters)}
            <FilterButton onClick={() => setShowFilters(!showFilters)}>
              <MdTune size={20} color="#111827" />
              Filters
            </FilterButton>
            {showFilters && (
              <OutsideClickHandler
                onOutsideClick={() => {
                  setShowFilters(false);
                }}
              >
                <FilterOptions>
                  <FilterApplyContainer>
                    <FilterResetButton>Reset</FilterResetButton>
                    <FilterApplyButton>Apply</FilterApplyButton>
                  </FilterApplyContainer>
                  {filters.map((val) => {
                    return (
                      <IndividualFilterDiv>
                        <input type="checkbox" />
                        {val}
                      </IndividualFilterDiv>
                    );
                  })}
                  <FilterSearchComponent>
                    <FilterSearchInput placeholder="Name your filter..." />
                    <FilterSearchButton>Save</FilterSearchButton>
                  </FilterSearchComponent>
                </FilterOptions>
              </OutsideClickHandler>
            )}
          </div>
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
      <TableBox>
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
      </TableBox>
    </OrdersContainer>
  );
}
