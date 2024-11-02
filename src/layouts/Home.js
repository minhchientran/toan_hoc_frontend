import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

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
import { solveExpression } from "api";
import { fixExpression } from "api";

function Home() {
  const navigate = useNavigate();

  const [expression, setExpression] = useState("");
  const [isSolved, setIsSolved] = useState(false);
  const [responsive, setResponsive] = useState("");
  function solve() {
    solveExpression(expression).then((res) => {
      // console.log(res.data);
      setResponsive(res.data);
      setIsSolved(true);
    });
  }

  const [wrongText, setWrongText] = useState("");
  const [isFixed, setIsFixed] = useState(false);
  const [fixedText, setFixedText] = useState("");
  function fixText() {
    fixExpression(wrongText).then((res) => {
      // console.log(res.data);
      setFixedText(res.data);
      setIsFixed(true);
    });
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftTypography className="page-title">Tính toán biểu thức</SoftTypography>
      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Biểu thức
          </SoftTypography>
        </SoftBox>
        <SoftInput
          type="text"
          placeholder="Nhập biểu thức"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
        />
      </SoftBox>

      {isSolved && (
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Kết quả
            </SoftTypography>
          </SoftBox>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            {responsive}
          </SoftTypography>
        </SoftBox>
      )}
      {/* Btn Sign In */}
      <SoftBox mt={4} mb={1} style={{ textAlign: "center" }}>
        <SoftButton variant="gradient" color="info" style={{ marginRight: "10px" }} onClick={solve}>
          Tính toán
        </SoftButton>
      </SoftBox>

      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Sửa dấu ngoặc
          </SoftTypography>
        </SoftBox>
        <SoftInput
          type="text"
          placeholder="Nhập chuỗi với dấu ngoặc sai"
          value={wrongText}
          onChange={(e) => setWrongText(e.target.value)}
        />
      </SoftBox>

      {isFixed && (
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Kết quả
            </SoftTypography>
          </SoftBox>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            {fixedText}
          </SoftTypography>
        </SoftBox>
      )}
      {/* Btn Sign In */}
      <SoftBox mt={4} mb={1} style={{ textAlign: "center" }}>
        <SoftButton
          variant="gradient"
          color="info"
          style={{ marginRight: "10px" }}
          onClick={fixText}
        >
          Sửa dấu ngoặc
        </SoftButton>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Home;
