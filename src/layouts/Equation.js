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
import { systemEquation } from "api";

function Equation() {
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const location = useLocation();
  const { pathname } = location;
  const pathNameArr = pathname.split("/");
  const numVar = Number(pathNameArr[1].at(-1));

  useEffect(() => {
    setIsSolved(false);
    setResponsive("");
    setEquation1("");
    setEquation2("");
    setEquation3("");
    setEquation4("");
    setEquation5("");
    setVariables("");
  }, [numVar]);

  const [equation1, setEquation1] = useState("");
  const [equation2, setEquation2] = useState("");
  const [equation3, setEquation3] = useState("");
  const [equation4, setEquation4] = useState("");
  const [equation5, setEquation5] = useState("");

  const [variables, setVariables] = useState("");
  const [isSolved, setIsSolved] = useState(false);
  const [responsive, setResponsive] = useState("");
  const [currentFocus, setCurrentFocus] = useState();
  function handleKeyboard(key) {
    switch (currentFocus) {
      case "1":
        setEquation1(equation1 + key);
        break;
      case "2":
        setEquation2(equation2 + key);
        break;
      case "3":
        setEquation3(equation3 + key);
        break;
      case "4":
        setEquation4(equation4 + key);
        break;
      case "5":
        setEquation5(equation5 + key);
        break;
    }
  }

  function solve() {
    systemEquation(numVar, variables, equation1, equation2, equation3, equation4, equation5).then(
      (res) => {
        // console.log(res.data.replaceAll("\\", "").replaceAll("[", "").replaceAll("]", ""));
        setResponsive(res.data.replaceAll("\\", "").replaceAll("[", "").replaceAll("]", ""));
        setIsSolved(true);
      }
    );
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftTypography className="page-title">Giải hệ phương trình ({numVar} ẩn) </SoftTypography>
      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Phương trình 1
          </SoftTypography>
        </SoftBox>
        <SoftInput
          type="text"
          placeholder="Nhập phương trình 1"
          onChange={(e) => setEquation1(e.target.value)}
          value={equation1}
          onFocus={() => setCurrentFocus("1")}
        />
      </SoftBox>

      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Phương trình 2
          </SoftTypography>
        </SoftBox>
        <SoftInput
          type="text"
          placeholder="Nhập phương trình 2"
          onChange={(e) => setEquation2(e.target.value)}
          value={equation2}
          onFocus={() => setCurrentFocus("2")}
        />
      </SoftBox>

      {numVar > 2 && (
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Phương trình 3
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="text"
            placeholder="Nhập phương trình 3"
            onChange={(e) => setEquation3(e.target.value)}
            value={equation3}
            onFocus={() => setCurrentFocus("3")}
          />
        </SoftBox>
      )}

      {numVar > 3 && (
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Phương trình 4
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="text"
            placeholder="Nhập phương trình 4"
            onChange={(e) => setEquation4(e.target.value)}
            value={equation4}
            onFocus={() => setCurrentFocus("4")}
          />
        </SoftBox>
      )}

      {numVar > 4 && (
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Phương trình 5
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="text"
            placeholder="Nhập phương trình 5"
            onChange={(e) => setEquation5(e.target.value)}
            value={equation5}
            onFocus={() => setCurrentFocus("5")}
          />
        </SoftBox>
      )}

      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Biến số
          </SoftTypography>
        </SoftBox>
        <SoftInput
          type="text"
          placeholder="Nhập các biến cách nhau bởi dấu cách (ví dụ: x y)"
          value={variables}
          onChange={(e) => setVariables(e.target.value)}
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
          Giải
        </SoftButton>
        <SoftButton variant="outlined" color="info" onClick={() => navigate("/home")}>
          Quay về trang chủ
        </SoftButton>
      </SoftBox>

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
          onClick={() => handleKeyboard("+")}
        >
          +
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("-")}
        >
          -
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("*")}
        >
          *
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("/")}
        >
          /
        </SoftButton>

        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("^")}
        >
          ^
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("sqrt(")}
        >
          sqrt(
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("sin(")}
        >
          sin(
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("cos(")}
        >
          cos(
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("tan(")}
        >
          tan(
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("log(")}
        >
          log(
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("intergrate(")}
        >
          intergrate(
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("driff(")}
        >
          driff(
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("limit(")}
        >
          limit(
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("(")}
        >
          (
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard(")")}
        >
          )
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("=")}
        >
          =
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard("<")}
        >
          &lt;
        </SoftButton>
        <SoftButton
          variant="contained"
          color="dark"
          style={{ marginRight: "10px", marginBottom: "10px" }}
          onClick={() => handleKeyboard(">")}
        >
          &gt;
        </SoftButton>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Equation;
