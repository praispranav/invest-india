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
  const borderStyleA = borderStyle ? borderStyle : "solid";
  const borderColorA = borderColor ? borderColor : "black";
  const borderLeftA = `${borderWidthA} ${borderStyleA} ${borderColorA}`;
  return (
    // <>
    //   {children}
    // </>
    <th
      style={{
        width: "7.5%",
        padding: "10px",
        paddingLeft: "0px",
        paddingRight: 0,
        // height: "73px",
        fontSize: "13px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="d-flex" >
        <div
          style={{
            height: "63px",
            borderLeft: borderLeftA,
          }}
        />
        <p className="my-0 p-0 mx-1 d-flex align-items-center">{children}</p>
      </div>
    </th>
    
  );
};

export default function DataTable(props: any) {
  return (
    <div className="w-100 data-table p-0 m-0">
      <table className="w-100">
        <thead className="w-100 py-5">
          <tr className='card d-flex flex-row justify-content-between' style={{ background: "white"}}>
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
          </tr>
        </thead>
      </table>
      <div className="my-5"></div>
    </div>
  );
}
