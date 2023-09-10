import { Layout } from "antd";
import { styled } from "styled-components";
import { ConnectionsGraph } from "@spanic/react-interview-components";
import { useRef } from "react";
import { exampleData, transformedData } from "./graph-model";

const { Content: AntdContent } = Layout;

const Graph = () => {
  function onGraphInit() {
    graphRef.current.layout({ name: "breadthfirst" }).run();
  }

  const graphRef = useRef();

  return (
    <Content>
      <ConnectionsGraph
        source={[...transformedData, ...exampleData]}
        onGraphInit={onGraphInit}
        ref={graphRef}
      />
    </Content>
  );
};

const Content = styled(AntdContent)`
  height: calc(100vh - 64px /* header height */);
`;

export { Graph };
