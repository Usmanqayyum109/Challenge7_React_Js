import React, { useEffect, useState } from "react";

export default function Challenge7() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    // alert("Sello");
    document.title = `You Clicked me ${num} Times`;
  });
  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Me {num}
      </button>
    </div>
  );
}
