import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <div>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="success">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
  );
};