import Image from "next/image";
import {
  Container,
  Details,
  Subtitle,
  Title,
  ImageExplanation,
  ImageDescription,
} from "./styles";

export function HowItWorks() {
  return (
    <>
      <Container>
        <Subtitle>Etiam dignissim</Subtitle>
        <Title>How it works</Title>
        <Details>
          Aenean sed adipiscing diam donec adipiscing tristique risus nec.
          Fermentum posuere urna nec tincidunt praesent.
        </Details>
        <ImageExplanation>
          <Image
            src="/images/howWorks.svg"
            height={650}
            width={650}
            alt="How it works image"
            className="howWorksImage"
          />
          <ImageDescription>
            <h2>Vestibulum mattis</h2>
            <p>
              Sed blandit libero volutpat sed. Eget dolor morbi non arcu risus
              quis varius quam. Viverra tellus in hac habitasse platea dictumst.
            </p>
          </ImageDescription>
        </ImageExplanation>
      </Container>
    </>
  );
}
