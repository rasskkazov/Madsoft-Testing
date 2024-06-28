import { RouterProvider } from "react-router-dom";
import { ConfigProvider, Progress } from "antd";
import { red } from "@ant-design/colors";

import { router } from "./router/Router";

import "./App.scss";

const antdConf = {
  token: {
    colorPrimary: red[7],
  },

  components: {
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: 26,
    },
    Progress: {
      defaultColor: red[7],
    },
  },
};

export const App = () => {
  return (
    <ConfigProvider theme={antdConf}>
      <RouterProvider router={router} />;
    </ConfigProvider>
  );
};
