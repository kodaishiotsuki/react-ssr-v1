import React from "react";
import { renderToString } from "react-dom/server";
import CountUp from "./countup";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script src="./static/client.js" async defer></script>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
};

const ssr = (): string => {
  return renderToString(
    <Layout>
      <CountUp />
    </Layout>
  );
};

export default ssr;
