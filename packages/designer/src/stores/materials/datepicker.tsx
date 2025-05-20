import { DatePicker } from "antd";
import dayjs from "dayjs";

export default function CustomDatePicker(props: {
  format: DatePickerFormat;
  value?: any;
  onChange?: (value: any) => void;
  [key: string]: any;
}) {
  const { onChange, value, format } = props;
  return (
    <DatePicker
      {...props}
      style={{ width: "100%" }}
      value={value && dayjs(value, format)}
      onChange={(date, dateString) => {
        onChange?.(dateString);
      }}
    />
  );
}
