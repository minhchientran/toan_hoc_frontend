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
import { fixExpression } from "api";
import { findAndReplace } from "api";
import { saveAndReplace } from "api";
import { solveVolume } from "api";
import { Grid } from "@mui/material";

const types = [
  {
    label: "Biểu thức gốc",
    value: "original",
  },
  {
    label: "Biểu thức đã chỉnh sửa",
    value: "fixed",
  },
];
function Volume() {
  const navigate = useNavigate();
  const [showResult, setShowResult] = useState(false);
  const [pointA, setPointA] = useState({
    x: "",
    y: "",
    z: "",
  });
  const [pointB, setPointB] = useState({
    x: "",
    y: "",
    z: "",
  });
  const [pointC, setPointC] = useState({
    x: "",
    y: "",
    z: "",
  });
  const [pointD, setPointD] = useState({
    x: "",
    y: "",
    z: "",
  });
  const [responsive, setResponsive] = useState("");

  function solve() {
    setShowResult(true);
    solveVolume(pointA, pointB, pointC, pointD).then((res) => {
      setResponsive(res.data);
    });
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftTypography className="page-title">Tính thể tích tứ diện</SoftTypography>
      <Grid container spacing={3}>
        <Grid item>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Điểm A (x, y, z)
            </SoftTypography>
          </SoftBox>
        </Grid>
        <Grid item xs={12} sm={3} xl={3}>
          <SoftInput
            type="text"
            placeholder="Nhập tọa độ x"
            value={pointA.x}
            onChange={(e) => setPointA({ ...pointA, x: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={3} xl={3}>
          <SoftInput
            type="text"
            placeholder="Nhập tọa độ y"
            value={pointA.y}
            onChange={(e) => setPointA({ ...pointA, y: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={3} xl={3}>
          <SoftInput
            type="text"
            placeholder="Nhập tọa độ z"
            value={pointA.z}
            onChange={(e) => setPointA({ ...pointA, z: e.target.value })}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={1}>
        <Grid item>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Điểm B (x, y, z)
            </SoftTypography>
          </SoftBox>
        </Grid>
        <Grid item xs={12} sm={3} xl={3}>
          <SoftInput
            type="text"
            placeholder="Nhập tọa độ x"
            value={pointB.x}
            onChange={(e) => setPointB({ ...pointB, x: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={3} xl={3}>
          <SoftInput
            type="text"
            placeholder="Nhập tọa độ y"
            value={pointB.y}
            onChange={(e) => setPointB({ ...pointB, y: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={3} xl={3}>
          <SoftInput
            type="text"
            placeholder="Nhập tọa độ z"
            value={pointB.z}
            onChange={(e) => setPointB({ ...pointB, z: e.target.value })}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={1}>
        <Grid item>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Điểm C (x, y, z)
            </SoftTypography>
          </SoftBox>
        </Grid>
        <Grid item xs={12} sm={3} xl={3}>
          <SoftInput
            type="text"
            placeholder="Nhập tọa độ x"
            value={pointC.x}
            onChange={(e) => setPointC({ ...pointC, x: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={3} xl={3}>
          <SoftInput
            type="text"
            placeholder="Nhập tọa độ y"
            value={pointC.y}
            onChange={(e) => setPointC({ ...pointC, y: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={3} xl={3}>
          <SoftInput
            type="text"
            placeholder="Nhập tọa độ z"
            value={pointC.z}
            onChange={(e) => setPointC({ ...pointC, z: e.target.value })}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={1}>
        <Grid item>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Điểm D (x, y, z)
            </SoftTypography>
          </SoftBox>
        </Grid>
        <Grid item xs={12} sm={3} xl={3}>
          <SoftInput
            type="text"
            placeholder="Nhập tọa độ x"
            value={pointD.x}
            onChange={(e) => setPointD({ ...pointD, x: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={3} xl={3}>
          <SoftInput
            type="text"
            placeholder="Nhập tọa độ y"
            value={pointD.y}
            onChange={(e) => setPointD({ ...pointD, y: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={3} xl={3}>
          <SoftInput
            type="text"
            placeholder="Nhập tọa độ z"
            value={pointD.z}
            onChange={(e) => setPointD({ ...pointD, z: e.target.value })}
          />
        </Grid>
      </Grid>
      {/* Btn Sign In */}
      <SoftBox mt={4} mb={1} style={{ textAlign: "center" }}>
        <SoftButton variant="gradient" color="info" style={{ marginRight: "10px" }} onClick={solve}>
          Tính thể tích
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

export default Volume;
