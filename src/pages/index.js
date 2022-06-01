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

  function handleOpenNewSellingModal() {
    console.log("index handle open");
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
            <Presentation />
            <Features />
            <HowItWorks />
            <Pricing
              onOpenNewSellingModal={handleOpenNewSellingModal}
              id="teste"
            />
            <Footer />
            <NewSellingModal
              isOpen={isNewSellingModalOpen}
              onRequestClose={handleCloseNewSellingModal}
            />
          </div>
        </Main>
      </Wrapper>
    </>
  );
}
