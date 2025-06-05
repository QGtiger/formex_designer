import { useEffect, useMemo } from "react";
import { uncompress } from "../../utils";
import { PreviewFormex } from "@formex/designer";
import { App } from "antd";

export default function SharePage() {
  const { message } = App.useApp();
  useEffect(() => {
    document.title = "表单分享";
  }, []);

  const initialSchema = useMemo(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    return JSON.parse(uncompress(hash));
  }, []);
  return (
    <PreviewFormex
      schema={initialSchema}
      onFinish={console.log}
      showErrorMessage={(t) => {
        message.error(t);
      }}
      onFileUpload={async (file) => {
        const url = URL.createObjectURL(file);
        return url;
      }}
    />
  );
}
