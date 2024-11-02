import { useEffect, useState } from "react";

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
import SelectBox from "components/SelectBox";
import { solveDerivative } from "api";
import { Grid } from "@mui/material";

function Derivative() {
  const navigate = useNavigate();
  const [showResult, setShowResult] = useState(false);
  const [func, setFunc] = useState("");
  const [variable, setVariable] = useState("");
  const [responsive, setResponsive] = useState("");

  function solve() {
    setShowResult(true);
    solveDerivative(func, variable).then((res) => {
      setResponsive(res.data);
    });
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftTypography className="page-title">Đạo hàm</SoftTypography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} xl={6}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Hàm số
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="text"
            placeholder="Nhập hàm số"
            value={func}
            onChange={(e) => setFunc(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6} xl={6}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Biến
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="text"
            placeholder="Nhập biến"
            value={variable}
            onChange={(e) => setVariable(e.target.value)}
          />
        </Grid>
      </Grid>
      {/* Btn Sign In */}
      <SoftBox mt={4} mb={1} style={{ textAlign: "center" }}>
        <SoftButton variant="gradient" color="info" style={{ marginRight: "10px" }} onClick={solve}>
          Tính đạo hàm
        </SoftButton>
        <SoftButton variant="outlined" color="info" onClick={() => navigate("/home")}>
          Quay về trang chủ
        </SoftButton>
      </SoftBox>
      {showResult && (
        <>
          <SoftTypography style={{ marginTop: "10px" }}>Kết quả</SoftTypography>
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                {responsive}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </>
      )}
    </DashboardLayout>
  );
}

export default Derivative;
