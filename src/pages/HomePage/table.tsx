import React from "react";
import styled from "styled-components";

// const Border = styled.div({
//   height: '63px'
// },
// });

interface HeaderType {
  children: React.ReactNode;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  borderRight?: boolean;
  borderLeft?: boolean;
}

const Header = ({
  children,
  borderWidth,
  borderStyle,
  borderColor,
  borderRight,
  borderLeft,
}: HeaderType) => {
  const borderWidthA = borderWidth ? borderWidth : "0.13rem";
  const borderStyleA = borderStyle ? borderStyle : "line";
  const borderColorA = borderColor ? borderColor : "black";
  const borderLeftA = `${borderWidthA} ${borderStyleA} ${borderColorA}`;
  return (
    <div
      style={{
        width: "7.69%",
        padding: "10px",
        paddingLeft: "8px",
        paddingRight: 0,
        // height: "73px",
        fontSize: "14px",
        fontFamily: "Montserrat, sans-serif",
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        borderLeft: borderLeft ? "1px solid black" : "",
        borderTopLeftRadius: borderLeft ? "10px" : "",
        borderBottomLeftRadius: borderLeft ? "10px" : "",
        borderRight: borderRight ? "1px solid black" : "",
        borderTopRightRadius: borderRight ? "10px" : "",
        borderBottomRightRadius: borderRight ? "10px" : "",
        
      }}
    >
      <div className="d-flex">
        <div
          style={{
            height: "63px",
            borderLeft: borderLeftA,
          }}
        />
        <p className="my-0 p-0 mx-1 d-flex align-items-center">{children}</p>
      </div>
    </div>
  );
};

export default function DataTable(props: any) {
  return (
    <div className="w-100 data-table p-0 m-0">
      <div className="w-100">
        <div className="w-100 data-table-border py-5 d-flex">
          <Header borderLeft={true} borderWidth={"0px"}>
            States
          </Header>
          <Header borderColor={"grey"} borderStyle={"solid"}>
            Total Startups
          </Header>
          <Header borderStyle={"dashed"}>FFS</Header>
          <Header borderStyle={"dashed"}>Patient Startups</Header>
          <Header borderStyle={"dashed"}>Seed Fund Startups</Header>
          <Header borderStyle={"dashed"}>Showcased Startups</Header>
          <Header borderStyle={"dashed"}>DDIIT Recognised Startups</Header>
          <Header borderStyle={"dashed"}>Women Owned</Header>
          <Header borderStyle={"solid"}>Mentors</Header>
          <Header borderColor={"grey"} borderStyle={"solid"}>
            Incubators
          </Header>
          <Header borderStyle={"dashed"}>Investors</Header>
          <Header borderStyle={"dashed"}>Accelerators</Header>
          <Header borderStyle={"dashed"} borderRight={true}>
            Government
          </Header>
        </div>
      </div>
      <div className="my-5"></div>
    </div>
  );
}
