import Image from "next/image";
import {
  Container,
  FeaturesDescription,
  FeaturesDetails,
  FeaturesSubtitle,
  FeaturesTitle,
  Feature,
} from "./styles";

export function Features() {
  return (
    <>
      <Container>
        <FeaturesSubtitle>Lacinia quis</FeaturesSubtitle>
        <FeaturesTitle>Features</FeaturesTitle>
        <FeaturesDetails>
          Sem et tortor consequat id porta. Egestas dui id ornare arcu odio ut
          sem. Laoreet id donec ultrices tincidunt arcu non sodales neque.
        </FeaturesDetails>
        <FeaturesDescription>
          <Feature>
            <Image
              src="/images/feature01.svg"
              alt="Feature 1 logo"
              height={70}
              width={70}
            />
            <h2>Metus aliquam</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </Feature>
          <Feature>
            <Image
              src="/images/feature02.svg"
              alt="Feature 2 logo"
              height={70}
              width={70}
            />
            <h2>Eget egestas</h2>
            <p>
              Quis blandit turpis cursus in hac. Dapibus ultrices in iaculis
              nunc. Risus ultricies tristique nulla aliquet.
            </p>
          </Feature>
        </FeaturesDescription>
      </Container>
    </>
  );
}
