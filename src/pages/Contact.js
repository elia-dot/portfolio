import React, { useState } from "react";
import styled from "styled-components";
import { RiPhoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";

import SuccessModal from "../components/SuccessModal";
emailjs.init("user_Gn1THNvOz5h6jUkC3p6bS");



const ContactContainer = styled.section`
  width: 100%;
`;

const TextContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 950px) {
    width: 100%;
  }
`;
const ContactTitle = styled.h1`
  font-size: 3em;
  color: #64ffda;
  margin-top: 1em;
  margin-left: 0.2em;
`;

const ContactText = styled.p`
  font-size: 1.3em;
  margin-top: 1em;
  margin-left: 0.4em;
`;

const FormContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 950px) {
    width: 100%;
  }
`;
const Form = styled.form`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
`;
const MainDetails = styled.div`
  width: 100%;
  display: flex;
  input {
    @media (min-width: 950px) {
      width: 50%;
    }
  }
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
const FormInput = styled.input`
  all: unset;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5em 1em;
  color: #e6f1ff;
  margin: 0.4em;
`;

const FormTextArea = styled.textarea`
  all: unset;
  background: rgba(0, 0, 0, 0.3);
  padding: 1em 1em;
  color: #e6f1ff;
  margin: 0.4em;
`;

const SubmitInpot = styled.input`
  background: none;
  border: 1px solid #64ffda;
  color: #64ffda;
  padding: 0.8em 2em;
  align-self: flex-end;
  margin: 2em 0.4em;
  cursor: pointer;
  font-size: 1.1em;
  transition: all 0.7s linear; 
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
  }
`;

const IconWraper = styled.div`
  border: 1px solid #64ffda;
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 1em;
  margin: 1em 1em 1em 0.4em;
`;

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_uyrjenf", "template_82llwdg", "#form")
      .then(
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      )
      .then(setModalOpen(true));

      setTimeout(() => {
        setModalOpen(false)
      }, 4000)
  };
  return (
    <>
    {modalOpen && <SuccessModal/>}
      <TextContainer>
        <ContactTitle>Contact me</ContactTitle>
        <ContactText>
          Got a question or proposal? or you just want to say hi? Go ahead.
        </ContactText>
      </TextContainer>
      <ContactContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit} id="form">
            <MainDetails>
              <FormInput
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <FormInput
                placeholder="Email"
                name="email"
                value={form.email}
                required
                onChange={handleChange}
              />
            </MainDetails>
            <FormInput
              placeholder="Subject"
              name="subject"
              value={form.subject}
              required
              onChange={handleChange}
            />
            <FormTextArea
              placeholder="Message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
            />
            <SubmitInpot
              type="submit"
              value="Send Message"
            />
          </Form>
          <IconContainer>
            <IconWraper>
              <RiPhoneFill />
            </IconWraper>
            <ContactText>052-395-4305</ContactText>
          </IconContainer>
          <IconContainer>
            <IconWraper>
              <MdEmail />
            </IconWraper>
            <ContactText>eliacohen100@gmail.com</ContactText>
          </IconContainer>
        </FormContainer>
      </ContactContainer>
    </>
  );
};

export default Contact;
