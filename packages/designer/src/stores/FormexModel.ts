import { createCustomModel } from "@/common/createModel";
import { useBoolean } from "ahooks";
import { Form } from "antd";

export interface FormexModelProps {
  onFinish?: (values: any) => Promise<void>;
  disableSubmit?: boolean;
  successText?: string;
}

export const FormexModel = createCustomModel((props: FormexModelProps) => {
  const [formIns] = Form.useForm();

  const [showSuccessPage, showSuccessPageAction] = useBoolean(false);

  const onFormexFinish = async () => {
    await formIns.validateFields().then(props.onFinish);
    showSuccessPageAction.setTrue();
  };

  // 重新填写表单
  const onReFill = (reset?: boolean) => {
    reset && formIns.resetFields();
    showSuccessPageAction.setFalse();
  };

  return {
    ...props,
    formIns,
    showSuccessPage,
    onReFill,
    onFormexFinish,
  };
});
