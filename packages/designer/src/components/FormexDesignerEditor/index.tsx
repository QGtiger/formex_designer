import Material from "./components/Material";
import EditArea from "./components/EditArea";
import Setting from "./components/Setting";

import Header from "./components/Header";

import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSchemaStore } from "@/stores/useSchemaStore";
import { App, ConfigProvider } from "antd";

import zhCN from "antd/locale/zh_CN";
import { FormexModel } from "@/stores/FormexModel";

const defaultObj = {};

export default function FormexDesignerEditor(props: {
  initialSchema?: FormexSchema;
  height?: number;
  onChange?: (schema: FormexSchema) => void;
  title?: string;
  headerMenu?: React.ReactNode;
}) {
  const { initialSchema, height, onChange, title, headerMenu } = props;
  const {
    setSchema,
    selectedComponentId,
    schema,
    setOverComponentId,
    setSelectedComponentId,
  } = useSchemaStore();

  useEffect(() => {
    initialSchema && setSchema(initialSchema);

    return () => {
      console.log("FormexDesignerEditor unmount");
      // TODO : 组件卸载时清空数据 后续动态创建store 好了
      setSelectedComponentId("");
      setOverComponentId("");
    };
  }, []);

  useEffect(() => {
    onChange?.(schema);
  }, [JSON.stringify(schema), onChange]);

  useEffect(() => {
    const ele = document.getElementById("allotment-container");
    if (ele) {
      setTimeout(() => {
        ele.style.opacity = "1";
      }, 50);
    }
  }, []);

  return (
    <ConfigProvider locale={zhCN}>
      <App>
        <FormexModel.Provider value={defaultObj}>
          <DndProvider backend={HTML5Backend}>
            <div
              className="h-[100vh] w-[100%] flex flex-col"
              style={{
                height: height ? `${height}px` : "100vh",
              }}
            >
              <Header title={title} rightContent={headerMenu} />
              <Allotment
                defaultSizes={[100]}
                id="allotment-container"
                className="opacity-0"
              >
                <Allotment.Pane preferredSize={280} maxSize={400} minSize={200}>
                  <Material />
                </Allotment.Pane>
                <Allotment.Pane className="bg-[#e5e8ec]">
                  <EditArea />
                </Allotment.Pane>
                <Allotment.Pane preferredSize={340} maxSize={450} minSize={300}>
                  <Setting key={selectedComponentId} />
                </Allotment.Pane>
              </Allotment>
            </div>
          </DndProvider>
        </FormexModel.Provider>
      </App>
    </ConfigProvider>
  );
}
