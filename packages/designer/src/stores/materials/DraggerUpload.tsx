import { handleImageUpload } from "@/utils";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Typography, Upload } from "antd";
import { useEffect, useState } from "react";

const { Dragger } = Upload;

interface CustomUploadFile {
  uid: string;
  name: string;
  url: string;
  type: string;
  size: number;
  status: "done" | "error" | "uploading";
}

export default function DraggerUpload(props: {
  onChange?: (url: CustomUploadFile[]) => void;
  value: CustomUploadFile[];
}) {
  const { onChange, value } = props;
  const [fileList, setFileList] = useState<CustomUploadFile[]>(value || []);

  const uploadProps: UploadProps = {
    name: "file",
    multiple: true,
    beforeUpload(file, fileList) {
      console.log("beforeUpload", file, fileList);

      setFileList((prev) => {
        return [
          ...prev,
          {
            uid: file.uid,
            name: file.name,
            url: "",
            type: file.type,
            size: file.size,
            status: "uploading",
          },
        ];
      });

      handleImageUpload(file, (url) => {
        if (url) {
          message.success(`文件 ${file.name} 上传成功`);
        } else {
          message.error(`文件 ${file.name} 上传失败`);
        }
        setFileList((prev) => {
          return prev.map((item) => {
            if (item.uid === file.uid) {
              return {
                ...item,
                status: url ? "done" : "error",
                url: url || "",
              };
            }
            return item;
          });
        });
      });
      return false;
    },
    onChange({ fileList }) {
      setFileList((prev) => {
        return prev.reduce((acc, cur) => {
          if (fileList.find((it) => it.uid === cur.uid)) {
            acc.push(cur);
          }
          return acc;
        }, [] as CustomUploadFile[]);
      });
    },
  };

  useEffect(() => {
    onChange?.(fileList);
  }, [fileList]);

  return (
    <Dragger {...uploadProps} fileList={fileList}>
      <div className=" py-2">
        <Typography.Text>请点击或拖拽文件到此区域上传</Typography.Text>
      </div>
      <div>
        <Typography.Text type="secondary">
          支持单个或批量上传，严禁上传公司数据或其他隐私文件
        </Typography.Text>
      </div>
    </Dragger>
  );
}
