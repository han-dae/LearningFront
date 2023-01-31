import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useState } from 'react';
const UploadPic = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '',
      name: '',
      status: '',
      url: '',
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const photo = new FormData();
  Object.values(fileList).forEach((file) => photo.append("file", file));
  sessionStorage.setItem('photo',photo)
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <ImgCrop rotate>
      <Upload
        listType="picture-card"
        //fileList={fileList}l
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length <2 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};
export default UploadPic;