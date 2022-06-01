import { FaShoppingCart } from "react-icons/fa";
import { StyledButton } from "./styles";

export function PurchaseButton() {
  return (
    <>
      <StyledButton>
        Purchase now
        <FaShoppingCart />
      </StyledButton>
    </>
  );
}
