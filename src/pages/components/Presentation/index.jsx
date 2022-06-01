import { PurchaseButton } from "../PurchaseButton";
import {
  Container,
  PresentationSubtitle,
  PresentationTitle,
  PresentationDetails,
} from "./styles";

export function Presentation() {
  return (
    <>
      <Container>
        <PresentationSubtitle>Adipiscing elit</PresentationSubtitle>
        <PresentationTitle>Landing X</PresentationTitle>
        <PresentationDetails>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </PresentationDetails>
        <PurchaseButton />
      </Container>
    </>
  );
}
