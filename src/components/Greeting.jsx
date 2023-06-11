import { Box, Typography } from "@mui/material";
import { useState } from "react";

export function Greeting({ email }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Typography onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Box sx={{ fontSize: 30, animation: isHovered ? "shake 0.5s infinite" : "none", marginRight: 1 }}>👋</Box>
      Bem-vindo {email}!
    </Typography>
  );
}
