// ALL THE COMMENTED CODE WRITTEN WITHOUT 'ANT DESIGN'

import Link from 'next/link'
import { Upload, message, Button, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { useState } from "react";

const Index = () => {

  // const [file, setFile] = useState(null);
  // const [progress, setProgress] = useState(0);

  // const chooseFile = (event) => {
  //   console.log(event.target.files[0]);
  //   if (event.target.files && event.target.files[0]) {
  //     const a = event.target.files[0];
  //     setFile(a);
  //     setProgress(Math.floor(a.size / 100))
  //   }
  // };

  // const uploadFile = async (event) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   const response = await fetch("/api/file", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const status = await response.json()
  //   alert(status.message)
  // };

  const props = {
    name: 'file',
    action: "/api/file",
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className='container' style={{display: 'flex', justifyContent: 'center'}}>
      <Card style={{ width: 240, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className='nav'>
          <Link href='/store'><a>See what's in the Store</a></Link>
        </div>
        <br />
        <h3 style={{display: 'flex', justifyContent: 'center'}}>Choose a file</h3>
        {/* <progress value={progress} max='100' />
        <input type="file" encType="multipart/form-data" onChange={chooseFile} required />
        <button type="submit" onClick={uploadFile}>Button Upload</button> */}
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Card>
    </div>
  );
};

export default Index;
