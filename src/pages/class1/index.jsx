import React from "react";
import { Carousel, Collapse } from "antd";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const { Panel } = Collapse;

const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

function Class1() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div style={{ height: 100 }}></div>
      <Collapse defaultActiveKey={["1"]} onChange={onChange}>
        <Panel header="最重要的通知" key="1">
          <p>目前由于open ai api的key还没申请到所以关于chatgpt的调用功能还无法实现</p>
        </Panel>
        <Panel header="不那么重要的通知" key="2">
          <p>本站是个人的练手网站，请包涵</p>
        </Panel>
        <Panel header="微不足道的通知" key="3">
          <p>如果你是意外到来的，那么很高兴见到你</p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Class1;
