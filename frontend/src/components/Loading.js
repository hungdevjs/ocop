import { Box, CircularProgress, alpha } from "@mui/material";

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      zIndex={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor={alpha("#000", 0.5)}
    >
      <CircularProgress color="info" />
    </Box>
  );
};

export default Loading;
