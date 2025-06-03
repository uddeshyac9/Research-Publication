"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "How do I track the progress of my thesis?",
      answer:
        "We provide a user-friendly platform that allows you to track the progress of your thesis. Once your order is placed, you'll have entry to a dashboard where you may monitor the assignment's progress. You can communicate along with your assigned creator, receive updates, and offer feedback at diverse ranges of the writing process. This obvious method ensures which you are usually knowledgeable about the progress of your thesis and can make any vital changes alongside the manner.",
    },
    {
      question: "How do I get started with thesis writing service?",
      answer:
        "Getting started is simple. Contact us through our website, provide your requirements, and we'll match you with the right expert for your project.",
    },
    {
      question: "What if I need revisions to my thesis?",
      answer:
        "We offer unlimited revisions within the agreed timeframe to ensure your complete satisfaction with the final product.",
    },
    {
      question: "Who can benefit from thesis writing service?",
      answer:
        "Our services are designed for graduate students, PhD candidates, researchers, and academics who need professional writing assistance.",
    },
    {
      question: "How does We ensure the quality of the thesis?",
      answer:
        "We have a rigorous quality assurance process including expert review, plagiarism checks, and multiple rounds of editing.",
    },
    {
      question: "What subjects and disciplines do we cover?",
      answer:
        "We cover a wide range of academic disciplines including sciences, humanities, business, engineering, and social sciences.",
    },
    {
      question: "Can We help with thesis formatting and citation styles?",
      answer:
        "Yes, we provide comprehensive formatting services and support all major citation styles including APA, MLA, Chicago, and Harvard.",
    },
    {
      question: "How do we handle urgent thesis requests?",
      answer:
        "We have a dedicated team for urgent requests and can accommodate tight deadlines with our express service options.",
    },
    {
      question: "Is thesis writing service confidential?",
      answer:
        "Absolutely. We maintain strict confidentiality and never share your personal information or work with third parties.",
    },
    {
      question: "How do we handle plagiarism?",
      answer:
        "We guarantee 100% original content and use advanced plagiarism detection tools to ensure all work is completely unique.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="border-2 border-orange-400 rounded-3xl p-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-800 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
