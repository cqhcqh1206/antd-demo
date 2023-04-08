import React from "react";
import { Button } from "antd";
import { useState } from "react";

function Class5() {
  const fun1 = (maxNum, deep) => {
    if (deep === 0) {
      return [];
    }
    const list = [];
    const num = Math.random() * maxNum;
    for (let i = 0; i < num; i++) {
      list[i] = {
        title: deep + "-" + i,
        label: "测试文案",
      };
      // @ts-ignore
      list[i].children = fun1(maxNum, deep - 1);
    }
    return list;
  };

  return (
    <>
      <div>
        <TreeComponent title={"第一个"} label={"xxx"} children={fun1(2, 6)} />
      </div>
    </>
  );
}

const TreeComponent = (props) => {
    const { title, label, children, defaultExpend } = props;

      const [open, setOpen] = useState(defaultExpend??true)

  return (
    <div>
      {title}|{label}{" "}
      {children.length > 0 && <Button
        onClick={() => {
          setOpen(!open)
        }}
      >
        展开
      </Button> }
      <br></br>
      {open ? (
        <div style={{ marginLeft: 10 }}>
          {children?.map((item, index) => {
            return <TreeComponent {...item} key={index} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Class5;

//树形组件