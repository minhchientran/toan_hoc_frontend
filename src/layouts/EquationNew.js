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
import { solveEquationNew } from "api";
import { Grid } from "@mui/material";

const types = [
  {
    label: "=",
    value: "=",
  },
  {
    label: "<=",
    value: "<=",
  },
  {
    label: ">=",
    value: ">=",
  },
  {
    label: "<",
    value: "<",
  },
  {
    label: ">",
    value: ">",
  },
];
function Equation() {
  const navigate = useNavigate();
  const [showResult, setShowResult] = useState(false);
  const [leftSide, setLeftSide] = useState("");
  const [rightSide, setRightSide] = useState("");
  const [variable, setVariable] = useState("");
  const [method, setMethod] = useState(types[0]);
  const [responsive, setResponsive] = useState("");

  function solve() {
    setShowResult(true);
    solveEquationNew(leftSide, method.value, rightSide, variable).then((res) => {
      setResponsive(res.data);
    });
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftTypography className="page-title">Giải phương trình</SoftTypography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} xl={3}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Vế trái
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="text"
            placeholder="Nhập vế trái"
            value={leftSide}
            onChange={(e) => setLeftSide(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={2} xl={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Phép so sánh
            </SoftTypography>
          </SoftBox>
          <SelectBox
            label=""
            required={false}
            placeholder=""
            options={types}
            value={method}
            onChange={(e) => setMethod(e)}
            sx={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={12} sm={3} xl={3}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Vế phải
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="text"
            placeholder="Nhập vế phải"
            value={rightSide}
            onChange={(e) => setRightSide(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={4} xl={4}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Giải theo biến
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
          Giải phương trình
        </SoftButton>
        {/* <SoftButton variant="outlined" color="info" onClick={() => navigate("/home")}>
          Quay về trang chủ
        </SoftButton> */}
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

export default Equation;
