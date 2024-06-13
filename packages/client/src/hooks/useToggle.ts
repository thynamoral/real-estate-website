import { useState } from "react";

const useToggle = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleOpen = () => setIsToggle(true);
  const handleClose = () => setIsToggle(false);

  return { isToggle, setIsToggle, handleClose, handleOpen };
};

export default useToggle;
