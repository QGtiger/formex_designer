import { FormDesignerEditor } from "@formex/designer";
import "@formex/designer/styles.css";
import { basename, compress, copyText } from "../../utils";
import { App, Button, ConfigProvider } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
import { useRef } from "react";

function setSchemaByLocalStorage(schema: any) {
  localStorage.setItem("formex-schema", JSON.stringify(schema));
}

function getSchemaByLocalStorage() {
  const schema = localStorage.getItem("formex-schema");
  if (schema) {
    return JSON.parse(schema);
  }
  return;
}

export default function EditorPage() {
  const schemaRef = useRef<any>({});
  const { message } = App.useApp();
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#7f70f5" } }}>
      <FormDesignerEditor
        onChange={(schema) => {
          console.log("schema", schema);
          schemaRef.current = schema;
          setSchemaByLocalStorage(schema);
        }}
        initialSchema={getSchemaByLocalStorage()}
        title="Formex"
        headerMenu={
          <Button
            size="middle"
            icon={<ShareAltOutlined />}
            type="primary"
            onClick={() => {
              const compressedStr = compress(JSON.stringify(schemaRef.current));
              const url = `${window.location.origin}${basename}/share/#${compressedStr}`;
              console.log(url);
              copyText(url);
              message.success("已复制到剪切板");
            }}
          >
            分享
          </Button>
        }
      />
    </ConfigProvider>
  );
}
