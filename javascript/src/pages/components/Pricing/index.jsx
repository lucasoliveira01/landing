import { Container, Details, Prices, Price, Subtitle, Title } from "./styles";
import { AiOutlineCheck } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

const BASIC_PLAN_PRICE = 49;
const PRO_PLAN_PRICE = 79;

export function Pricing({ onOpenNewSellingModal }) {
  return (
    <>
      <Container>
        <Subtitle>Lobortis scelerisque</Subtitle>
        <Title>Pricing X</Title>
        <Details>
          Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
          Scelerisque felis imperdiet proin fermentum leo vel orci porta non.
          Sit amet justo donec enim.
        </Details>
        <Prices>
          <Price>
            <h3>Basic</h3>
            <h2>$49</h2>
            <p>
              Vel elit scelerisque mauris pellentesque pulvinar pellentesque.
              Bibendum ut tristique et egestas quis. Integer malesuada nunc vel
              risus.
            </p>
            <ul>
              <li>
                <AiOutlineCheck color="#7B7B8F" />
                <p>Sociis natoque penatibus et magnis dis parturient.</p>
              </li>
              <li>
                <AiOutlineCheck color="#7B7B8F" />
                <p>Neque volutpat ac tincidunt vitae.</p>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => onOpenNewSellingModal(BASIC_PLAN_PRICE)}
            >
              Buy this
              <FaShoppingCart />
            </button>
          </Price>
          <Price className="recommended">
            <h3>Pro Plan</h3>
            <h2>$79</h2>
            <p>
              Tincidunt praesent semper feugiat nibh. Ultrices tincidunt arcu
              non sodales neque sodales. Magna ac placerat vestibulum lectus
              mauris ultrices.
            </p>
            <ul>
              <li>
                <AiOutlineCheck color="#7B7B8F" />
                <p>Sociis natoque penatibus et magnis dis parturient.</p>
              </li>
              <li>
                <AiOutlineCheck color="#7B7B8F" />
                <p>Neque volutpat ac tincidunt vitae.</p>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => onOpenNewSellingModal(PRO_PLAN_PRICE)}
            >
              Buy this
              <FaShoppingCart />
            </button>
          </Price>
        </Prices>
      </Container>
    </>
  );
}
