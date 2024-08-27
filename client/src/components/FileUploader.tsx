import React, {
  InputHTMLAttributes,
  forwardRef,
  ChangeEvent,
  useState,
} from "react";
import { IoImageOutline } from "react-icons/io5";

interface FileUploaderProps extends InputHTMLAttributes<HTMLInputElement> {
  _id: string;
}

const FileUploader: React.FC<FileUploaderProps> = forwardRef<
  HTMLInputElement,
  FileUploaderProps
>(({ _id, onChange, ...rest }, ref) => {
  const [previewImg, setPreviewImg] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setPreviewImg(imgUrl);
    }
    if (onChange) {
      onChange(e);
    }
  };

  const renderContent = () => {
    if (!previewImg) {
      return (
        <div className="h-40 grid place-content-center">
          <label
            className="text-textColor cursor-pointer text-xl flex flex-col items-center"
            htmlFor={_id}
          >
            <IoImageOutline className="w-8 h-8" />
            Add Photo
          </label>
        </div>
      );
    }
    return (
      previewImg && (
        <div className="mb-5 relative  w-full ">
          <img
            src={previewImg}
            alt="Preview"
            className="sm:w-full sm:h-full sm:object-cover rounded-xl"
          />

          <div className="absolute bottom-3 right-3">
            <label
              htmlFor={_id}
              className="py-1 px-4 text-sm text-textColor cursor-pointer border border-slate-300 font-semibold rounded-lg bg-bgColor"
            >
              {" "}
              Change Image
            </label>
          </div>
        </div>
      )
    );
  };

  return (
    <React.Fragment>
      {renderContent()}
      <input
        onChange={handleFileChange}
        type="file"
        id={_id}
        ref={ref}
        {...rest}
        style={{ display: "none" }}
      />
    </React.Fragment>
  );
});

export default FileUploader;
