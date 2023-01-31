import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import axios from 'axios';
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
    console.log(fileList[0])
    const photo = new FormData();
    Object.values(fileList[0]).forEach((file) => photo.append("file", file));
    axios.post('/test/AxiosFileTest.do', photo, {
      headers: {
        "Content-Type": `multipart/form-data; `,
      },
      baseURL: 'http://localhost:8081/users'
    })
    .then((response) => {
        sessionStorage.setItem('photo',response.data); 
      })
      .catch((error) => {
        // 예외 처리
      })
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        console.log('dd',reader.readAsDataURL(file.originFileObj));
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