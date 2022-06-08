import { FaShoppingCart } from "react-icons/fa";
import { StyledButton } from "./styles";

export function PurchaseButton({ onOpenNewSellingModal }) {
  return (
    <>
      <StyledButton onClick={onOpenNewSellingModal}>
        Purchase now
        <FaShoppingCart />
      </StyledButton>
    </>
  );
}
