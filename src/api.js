import axios from "axios";
// import * as https from "https";

const API = axios.create({
  baseURL: "http://mathapp.gpmn.net:9001",
  timeout: 300000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  validateStatus: (status) => {
    return true;
  },
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false,
  // }),
});

export async function systemEquation(
  type,
  variables,
  equation1,
  equation2,
  equation3,
  equation4,
  equation5
) {
  const url = `/calculator/solve_system/${type}`;
  const data = new FormData();
  data.append("variables", variables);
  data.append("equation1", equation1);
  data.append("equation2", equation2);

  if (equation3) data.append("equation3", equation3);
  if (equation4) data.append("equation4", equation4);
  if (equation5) data.append("equation5", equation5);

  return API.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function solveEquation(variables, equation) {
  const url = `/calculator_giaipt/solve_equation`;
  const data = new FormData();
  data.append("variable", variables);
  data.append("equation", equation);

  return API.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function solveExpression(expression) {
  const url = `/calculator/calculate`;
  const data = new FormData();
  data.append("expression", expression);

  return API.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function fixExpression(text) {
  const url = `/fix/fix_brackets`;
  const data = new FormData();
  data.append("text", text);

  return API.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function findAndReplace(original_text, fixed_text, find_text, replace_text, target) {
  const url = `/fix/find_replace`;
  const data = new FormData();
  data.append("original_text", original_text);
  data.append("fixed_text", fixed_text);
  data.append("find_text", find_text);
  data.append("replace_text", replace_text);
  data.append("target", target);

  return API.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function saveAndReplace(find_text, replace_text) {
  const url = `/fix/save_replace`;
  const data = new FormData();
  data.append("find_text", find_text);
  data.append("replace_text", replace_text);

  return API.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function solveDerivative(func, variable) {
  const url = `/dao_ham`;
  const data = new FormData();
  data.append("function", func);
  data.append("variable", variable);
  // console.log(func, variable);
  return API.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function solveEquationNew(leftSide, method, rightSide, variable) {
  const url = `/giai_pt`;
  const data = new FormData();
  data.append("left_side", leftSide);
  data.append("comparison", method);
  data.append("right_side", rightSide);
  data.append("variable", variable);
  // console.log(leftSide, method, rightSide, variable);
  return API.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function solveArea(pointA, pointB, pointC) {
  const url = `/tinh_dien_tich_tam_giac`;
  const data = new FormData();
  // console.log(pointA, pointB, pointC);
  data.append("Ax", pointA.x);
  data.append("Ay", pointA.y);
  data.append("Az", pointA.z);
  data.append("Bx", pointB.x);
  data.append("By", pointB.y);
  data.append("Bz", pointB.z);
  data.append("Cx", pointC.x);
  data.append("Cy", pointC.y);
  data.append("Cz", pointC.z);
  return API.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export async function solveVolume(pointA, pointB, pointC, pointD) {
  const url = `/tinh_the_tich_tu_dien`;
  const data = new FormData();
  data.append("Ax", pointA.x);
  data.append("Ay", pointA.y);
  data.append("Az", pointA.z);
  data.append("Bx", pointB.x);
  data.append("By", pointB.y);
  data.append("Bz", pointB.z);
  data.append("Cx", pointC.x);
  data.append("Cy", pointC.y);
  data.append("Cz", pointC.z);
  data.append("Dx", pointD.x);
  data.append("Dy", pointD.y);
  data.append("Dz", pointD.z);
  // console.log(pointA, pointB, pointC, pointD);

  return API.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
