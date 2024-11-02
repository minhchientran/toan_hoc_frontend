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
function FixText() {
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [showResult, setShowResult] = useState(false);
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [type, setType] = useState(types[0]);

  const [isSolved, setIsSolved] = useState(false);
  const [responsive, setResponsive] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  function solve() {
    setShowResult(true);
    fixExpression(text).then((res) => {
      setResponsive(res.data);
    });
  }

  function handleFindAndReplace() {
    findAndReplace(text, responsive, find, replace, type.value).then((res) => {
      if (type.value === types[1].value) setResponsive(res.data);
      else setText(res.data);
    });
  }

  function saveFindAndReplace() {
    saveAndReplace(find, replace).then((res) => {
      setIsSaved(true);
      // setResponsive(res.data);
    });
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftTypography className="page-title">Chỉnh sửa biểu thức</SoftTypography>
      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Biểu thức
          </SoftTypography>
        </SoftBox>
        <SoftInput
          type="text"
          placeholder="Nhập biểu thức"
          value={text}
          onChange={(e) => setText(e.target.value)}
          // size="large"
        />
      </SoftBox>
      {/* Btn Sign In */}
      <SoftBox mt={4} mb={1} style={{ textAlign: "center" }}>
        <SoftButton variant="gradient" color="info" style={{ marginRight: "10px" }} onClick={solve}>
          Sửa biểu thức
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
              {/* <SoftTypography component="label" variant="caption" fontWeight="bold">
                {text}
              </SoftTypography> */}
            </SoftBox>
            <SoftInput type="text" disabled value={responsive} />
          </SoftBox>

          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Tìm
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="text"
              // placeholder="Nhập biểu thức"
              value={find}
              onChange={(e) => setFind(e.target.value)}
            />
          </SoftBox>

          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Thay thế
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="text"
              // placeholder="Nhập biểu thức"
              value={replace}
              onChange={(e) => setReplace(e.target.value)}
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Loại
              </SoftTypography>
            </SoftBox>
            <SelectBox
              label=""
              required={false}
              placeholder=""
              options={types}
              value={type}
              onChange={(e) => setType(e)}
              sx={{ width: "100%" }}
            />
          </SoftBox>

          {isSaved && (
            <SoftTypography component="label" variant="caption">
              Đã lưu
            </SoftTypography>
          )}

          {/* Btn Sign In */}
          <SoftBox mt={4} mb={1} style={{ textAlign: "center" }}>
            <SoftButton
              variant="gradient"
              color="info"
              style={{ marginRight: "10px" }}
              onClick={handleFindAndReplace}
            >
              Tìm và thay thế
            </SoftButton>
            <SoftButton variant="outlined" color="info" onClick={saveFindAndReplace}>
              Lưu Tìm và thay thế
            </SoftButton>
          </SoftBox>
        </>
      )}
    </DashboardLayout>
  );
}

export default FixText;
