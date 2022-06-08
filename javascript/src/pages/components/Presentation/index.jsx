import React from "react";
import { PurchaseButton } from "../PurchaseButton";
import {
  Container,
  PresentationSubtitle,
  PresentationTitle,
  PresentationDetails,
} from "./styles";

const BASIC_PLAN_PRICE = 49;

export function Presentation({ onOpenNewSellingModal }) {
  return (
    <>
      <Container>
        <PresentationSubtitle>Adipiscing elit</PresentationSubtitle>
        <PresentationTitle>Landing X</PresentationTitle>
        <PresentationDetails>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </PresentationDetails>
        <PurchaseButton
          onOpenNewSellingModal={() => onOpenNewSellingModal(BASIC_PLAN_PRICE)}
        />
      </Container>
    </>
  );
}
