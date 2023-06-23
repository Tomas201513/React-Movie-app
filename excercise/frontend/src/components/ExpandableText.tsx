import React, { ReactNode, useState } from "react";

interface Prop {
  children: string;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars = 10 }: Prop) => {
  const [size, setSize] = useState(false);
  if (children.length <= maxChars) return <>{children}</>;
  const str = children.substring(0, maxChars);
  return (
    <>
      {size ? (
        <>
          {children}
          <button
            onClick={() => {
              setSize(false);
            }}
          >
            less
          </button>
        </>
      ) : (
        <>
          {str}
          <button
            onClick={() => {
              setSize(true);
            }}
          >
            more
          </button>
        </>
      )}
    </>
  );
};

export default ExpandableText;
