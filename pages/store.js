import Link from "next/link";
import { FileZipOutlined } from '@ant-design/icons';

function Upload({ files }) {

  return (
    <div>
      <h1>Upload files</h1>
      <Link href='/'><a> &larr; Back</a></Link>
      <ul>
        {files.map((file) =>
          <li key={file}>
            <FileZipOutlined />
            <Link href={`/store/${file}`}>{file}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(`http://localhost:3000/api/file`, {
    method: 'GET'
  })
  let files = await response.json()

  return {
    props: { files }, // will be passed to the page component as props
  }
}

export default Upload;
