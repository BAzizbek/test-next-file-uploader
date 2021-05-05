import React from 'react';

function Error(props) {
  return (
    <>
      <div className='error'>
        Sorry, the page doesn't exist 🤷‍♂️
      </div>
      <style jsx>
        {`
          .error {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}

export default Error;
