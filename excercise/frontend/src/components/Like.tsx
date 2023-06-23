import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface Prop {
  like: boolean;
  onClick: () => void;
}
const Like = ({ like, onClick }: Prop) => {
  let x = 5;
  x++;
  console.log(x);

  return (
    <>
      {like ? (
        <BsHeartFill color="#ea6882" onClick={onClick} />
      ) : (
        <BsHeart onClick={onClick} />
      )}
      {x}
    </>
  );
};

export default Like;
