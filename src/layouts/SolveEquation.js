import { useEffect, useState } from "react";

// react-router-dom components
import { Link, useLocation, useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { solveEquation } from "api";

function SolveEquation() {
  const navigate = useNavigate();

  const [equation, setEquation] = useState("");

  const [variables, setVariables] = useState("");

  function handleKeyboard(key) {
    setEquation(equation + key);
  }

  const [responsive, setResponsive] = useState("");
  function solve() {
    solveEquation(variables, equation).then((res) => {
      // console.log(res.data.replaceAll("\\", "").replaceAll("[", "").replaceAll("]", ""));

      const result = res.data.map((value) => `x = ${value}; `);
      setResponsive(result);
    });
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftTypography className="page-title">Giải phương trình </SoftTypography>
      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Phương trình
          </SoftTypography>
        </SoftBox>
        <SoftInput
          type="text"
          placeholder="Nhập phương trình"
          onChange={(e) => setEquation(e.target.value)}
          value={equation}
        />
      </SoftBox>

      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Biến số
          </SoftTypography>
        </SoftBox>
        <SoftInput
          type="text"
          placeholder="Nhập các biến cách nhau bởi dấu cách (ví dụ: x y)"
          onChange={(e) => setVariables(e.target.value)}
        />
      </SoftBox>

      {/* Btn Sign In */}
      <SoftBox mt={4} mb={1} style={{ textAlign: "center" }}>
        <SoftButton variant="gradient" color="info" style={{ marginRight: "10px" }} onClick={solve}>
          Giải
        </SoftButton>
        <SoftButton variant="outlined" color="info" onClick={() => navigate("/home")}>
          Quay về trang chủ
        </SoftButton>
      </SoftBox>

      {/* Keyboard */}
      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Bàn phím tính toán
          </SoftTypography>
        </SoftBox>
        {/* Keyboard */}
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("sqrt()")}
        >
          sqrt()
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("sin()")}
        >
          sin()
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("cos()")}
        >
          cos()
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("tan()")}
        >
          tan()
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("log()")}
        >
          log()
        </SoftButton>
      </SoftBox>
      {/* Kết quả */}
      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Kết quả
          </SoftTypography>
        </SoftBox>
        <SoftTypography
          style={{
            border: "1px solid black",
            width: "100%",
            height: "200px",
            border: "0.0625rem solid #d2d6da",
            borderRadius: "0.5rem",
          }}
        >
          {responsive}
        </SoftTypography>
      </SoftBox>
    </DashboardLayout>
  );
}

export default SolveEquation;
