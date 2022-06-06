import { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose, AiFillExclamationCircle } from "react-icons/ai";
import { RiMoneyDollarCircleFill, RiAccountCircleFill } from "react-icons/ri";
import { BsCheckCircleFill } from "react-icons/bs";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import {
  Container,
  Form,
  TermsContainer,
  Buttons,
  Stepper,
  FormContent,
  PostPurchase,
  PriceInformation,
} from "./styles";

const steps = ["Personal Info", "Billing Info", "Legal Info"];

export function NewSellingModal({ isOpen, onRequestClose, price }) {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    console.log(data);
    setEmail(data.email);
    setName(data.firstName);
    localStorage.setItem("@landing/email", data.email);
    handleNext();
  };

  const handleNext = () => {
    console.log(errors);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <AiOutlineClose />
        </button>
        <Container>
          <Stepper>
            {activeStep > 0 ? (
              <BsCheckCircleFill size={50} className="stepIcon" />
            ) : (
              <RiAccountCircleFill size={50} className="stepIcon" />
            )}
            <hr />
            {activeStep > 1 ? (
              <BsCheckCircleFill size={50} className="stepIcon" />
            ) : (
              <RiMoneyDollarCircleFill size={50} className="stepIcon" />
            )}
            <hr />

            {activeStep > 2 ? (
              <BsCheckCircleFill size={50} className="stepIcon" />
            ) : (
              <AiFillExclamationCircle size={50} className="stepIcon" />
            )}
          </Stepper>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <PriceInformation>
              {price === 79 ? "Pro Plan - $79" : "Basic Plan - $49"}
            </PriceInformation>
            {activeStep === steps.length && (
              <div>
                <FormContent>
                  <PostPurchase>
                    <h2>
                      Thanks for your order,{" "}
                      {name.charAt(0).toUpperCase() + name.slice(1)}!
                    </h2>
                    <h3>
                      Please check the e-mail <span>{email}</span> to have more
                      information.
                    </h3>
                  </PostPurchase>
                </FormContent>
                <Buttons>
                  <button type="button" onClick={() => handleReset()}>
                    Reset
                  </button>
                </Buttons>
              </div>
            )}
            {activeStep === 0 && (
              <section>
                <FormContent>
                  <h2>Personal Information</h2>
                  <div style={{ display: "flex" }}>
                    <input
                      style={{ marginRight: "1rem" }}
                      type="text"
                      placeholder="First Name"
                      {...register("firstName")}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName")}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="E-mail Address"
                    {...register("email")}
                  />
                </FormContent>
                <Buttons>
                  <button type="button" onClick={() => handleNext()}>
                    Next
                  </button>
                </Buttons>
              </section>
            )}
            {activeStep === 1 && (
              <section>
                <FormContent>
                  <h2>Billing Information</h2>
                  <input
                    type="text"
                    placeholder="Credit Card Number"
                    {...register("creditCard")}
                  />
                </FormContent>
                <Buttons>
                  <button type="button" onClick={() => handleBack()}>
                    Previous
                  </button>
                  <button type="button" onClick={() => handleNext()}>
                    Next
                  </button>
                </Buttons>
              </section>
            )}
            {activeStep === 2 && (
              <section>
                <FormContent>
                  <h2>Legal Information</h2>

                  <TermsContainer>
                    <input type="checkbox" {...register("acceptedTerms")} />
                    <span>
                      I accept the <span>Terms and Conditions</span>.
                    </span>
                  </TermsContainer>
                  <TermsContainer>
                    <input
                      type="checkbox"
                      {...register("acceptedNewsletter")}
                    />
                    <span>I accept to receive news and updates on e-mail.</span>
                  </TermsContainer>
                </FormContent>

                <Buttons>
                  <button type="button" onClick={() => handleBack()}>
                    Previous
                  </button>
                  <button type="submit">Finish</button>
                </Buttons>
              </section>
            )}
          </Form>
        </Container>
      </Modal>
    </>
  );
}

/*<label>Age</label>a
      <input {...register("age", { min: 18, max: 99 })} />
      {errors.age && (
        <p>You Must be older then 18 and younger then 99 years old</p>
      )} */
