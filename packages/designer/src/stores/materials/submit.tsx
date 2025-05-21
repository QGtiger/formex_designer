import { Button, ConfigProvider } from "antd";
import { FormexModel } from "../FormexModel";

export default function Submit(
  props: MaterialItemProps<{
    text: string;
    textColor?: string;
  }>
) {
  const { disableSubmit, onFormexFinish } = FormexModel.useModel();
  return (
    <Button
      type="primary"
      // htmlType="submit"
      block
      style={{
        color: props.textColor,
      }}
      onClickCapture={(e) => {
        if (disableSubmit) {
          e.preventDefault();
        } else {
          onFormexFinish();
        }
      }}
    >
      {props.text}
    </Button>
  );
}
