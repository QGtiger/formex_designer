import { useEffect, useMemo } from "react";
import { uncompress } from "../../utils";
import { PreviewFormex } from "@formex/designer";

export default function SharePage() {
  useEffect(() => {
    document.title = "表单分享";
  }, []);

  const initialSchema = useMemo(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    return JSON.parse(uncompress(hash));
  }, []);
  return <PreviewFormex schema={initialSchema} onFinish={console.log} />;
}
