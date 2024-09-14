import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    alert("i am working ");

    return () => {
      document.title = "Main page";
    };
  }, []);

  return <div className="navigation">i am navbar</div>;
}
