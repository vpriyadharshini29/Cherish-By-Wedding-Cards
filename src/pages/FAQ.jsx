// File: src/components/FAQ.jsx
import React from 'react';

const faqs = [
  {
    question: "1. How much do Indian wedding invitation cards typically cost?",
    answer:
      "The cost of Indian wedding cards can vary widely depending on several factors such as design complexity, material used, customization options, and quantity ordered. Typically, Indian wedding invitations can range from affordable options to more extravagant and luxurious choices.\n\nFor simpler and more budget-friendly options, you can find Indian wedding cards starting from around INR 10 to INR 60 per card. These cards may feature standard designs, basic printing techniques, and standard paper quality.",
  },
  {
    question: "2. Do you provide sample card before finalizing the order?",
    answer:
      "We don’t practise business by providing sample cards, since all the cards are manufactured against order, once the customer places the order, we go for the manufacturing process. So we don’t keep sample cards to carry.",
  },
  {
    question: "3. Do you provide printing services?",
    answer:
      "Yes, we provide the cards with printing. The text can be printed in ink, foil and by using thermographic process.",
  },
  {
    question: "4. How much time will it take for the complete procedure for an order?",
    answer:
      "Once the customer approve the proof and after the confirmation of the payment, we shall start the printing process and deliver the cards in ten working days time. Then the cards can be shipped across in three to four days, which is to be door delivered.",
  },
  {
    question: "5. Do you provide add on cards like Rsvp, Thank you cards etc.?",
    answer:
      "Yes, we provide full range of save the date, Card, Rsvp card, Thank you card, Place card, Reception card, Sangeet card, Cocktail card, Mehndi card etc.",
  },
  {
    question: "6. Do you provide the text samples of addon cards?",
    answer:
      "Kindly visit the (*******) for the text samples link.",
  },
  {
    question: "7. Could you suggest me, wordings, symbols, logos for the order?",
    answer:
      "You can select appropriate text for your card with related logos fonts the link and as specified below.",
  },
  {
    question: "8. How to place the order after selecting the card?",
    answer:
      "You can choose a card from the hosted list and initially register with us for proceeding to the order booking. After registration, you can book the card with the quantity required and other details.",
  },
  {
    question: "9. Can I add up extra page / insert in the card?",
    answer:
      "You can add extra inserts to your card. The charges for the insert and the printing charges will be additional.",
  },
  {
    question: "10. How do we pay through online?",
    answer:
      "After all your selections are finished, you can make use of the view cost option, to view the entire selections of cards with their prices and shipping cost. Then click on the pay icon which will take you to the online payment gateway through which the payment can be done online within minutes. After the confirmation of the payment only we shall start the manufacturing process.",
  },
];

const FAQ = () => {
  return (
    <div className="bg-[#E6E6FA] min-h-screen px-6 md:px-24 py-10 font-[Poppins] text-[#333]">
      <h2 className="text-2xl font-semibold mb-8 text-center tracking-wide">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="space-y-6">
        {faqs.map((item, idx) => (
          <div key={idx} className="rounded-md shadow-md">
            <div className="bg-[#fcba03] text-[20px] font-semibold px-4 py-3 rounded-t-md">
              {item.question}
            </div>
            <div className="bg-[#E6E6FA] text-[16px] px-4 py-4 whitespace-pre-line rounded-b-md">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
