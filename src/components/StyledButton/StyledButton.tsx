import { ReactNode } from 'react';
import { styled } from "@mui/system";



interface StyledButtonProps {
  children: ReactNode;
}
const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {

  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "5px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.secondary.main,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    transition: "all .5s ease",
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.contrastText,
    }
  }));
  return (
    <>
      <StyledButton>
        {children}
      </StyledButton>
    </>
  );
};

export default StyledButton;
