import { useState } from "react";

import { Wrapper, Main } from "../../styles/globals";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { HowItWorks } from "./components/HowItWorks";
import { NewSellingModal } from "./components/NewSellingModal";
import { Presentation } from "./components/Presentation";
import { Pricing } from "./components/Pricing";

export default function Home() {
  const [isNewSellingModalOpen, setIsNewSellingModalOpen] = useState(false);
  const [price, setPrice] = useState(false);

  function handleOpenNewSellingModal(price) {
    setPrice(price);
    setIsNewSellingModalOpen(true);
  }

  function handleCloseNewSellingModal() {
    setIsNewSellingModalOpen(false);
  }

  return (
    <>
      <Wrapper>
        <Main>
          <div className="inner">
            <Presentation
              onOpenNewSellingModal={(price) =>
                handleOpenNewSellingModal(price)
              }
            />
            <Features />
            <HowItWorks />
            <Pricing
              onOpenNewSellingModal={(price) =>
                handleOpenNewSellingModal(price)
              }
              id="teste"
            />
            <Footer />
            <NewSellingModal
              price={price}
              isOpen={isNewSellingModalOpen}
              onRequestClose={handleCloseNewSellingModal}
            />
          </div>
        </Main>
      </Wrapper>
    </>
  );
}
