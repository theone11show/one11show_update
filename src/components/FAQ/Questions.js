import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // arrow icons

const faqData = [
  {
    question: "How do I enter the venue with my ticket?",
    answer:
      "Show your digital or printed ticket along with a valid ID at the entry gate. You’ll receive a <strong>wristband/pass</strong> that gives you access to the festival.",
  },
  {
    question: "Can I transfer my ticket to someone else?",
    answer:
      "Tickets are generally <strong>non-transferable</strong>, but in case of genuine emergencies, please contact our support team.",
  },
  {
    question: "Do I need to carry ID proof?",
    answer:
      "Yes. <strong>Government-issued ID proof</strong> (like Aadhaar, PAN, Passport, or Driving License) is mandatory for entry.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "Gates open a few hours before the performances start. <strong>Early arrival is recommended</strong> to avoid long queues and to enjoy pre-event activities.",
  },
  {
    question: "Is there parking available at the venue?",
    answer:
      "Yes, limited parking is available. We recommend <strong>carpooling</strong> or using public transport.",
  },
  {
    question: "Will re-entry be allowed?",
    answer:
      "No <strong>re-entry</strong> is allowed once you leave the venue, so plan accordingly.",
  },
  {
    question: "What items are not allowed inside?",
    answer:
      "Prohibited items include: outside food/drinks, sharp objects, illegal substances, professional cameras (unless authorized), and <strong>large bags</strong>.",
  },
  {
    question: "What if I lose my ticket or wristband?",
    answer:
      "Tickets and wristbands are <strong>non-replaceable</strong>. Please keep them safe at all times.",
  },
  {
    question: "Are refunds available if I can’t attend?",
    answer:
      "Tickets are <strong>non-refundable</strong>. Refunds may only apply if the event is cancelled.",
  },
  {
    question: "Who do I contact for ticket-related issues?",
    answer:
      "For help with tickets, email us at <strong>team@theone11.show</strong> or call at <strong>+91 74777 85294</strong>.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" text-white py-32 px-6 flex flex-col items-center"
style={{
        backgroundImage: "url('/faq-bg.avif')" ,
          backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", 
      }}
    >
      <div className="w-full max-w-2xl">
        {faqData.map((faq, index) => (
          <div
            key={index}
          className="border-b-2 border-white py-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question with numbering */}
            <div className="flex justify-between items-center">
              <h3
                className="font-semibold font-[Montserrat]"
                style={{
                  fontSize: "clamp(18px, 4vw, 26px)", // responsive
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {index + 1}. {faq.question}
              </h3>

              {/* Arrow */}
              <span className="text-xl">
                {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p
                className="mt-3 text-gray-300"
                style={{
                  fontSize: "clamp(14px, 3.5vw, 20px)",
                  fontFamily: "'Montserrat', sans-serif",
                }}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
