import React, {useState} from 'react'

// STYLING
import '../my-trips-components/faq.css'
    // FONT AWESOME
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
    import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
    import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

    // faqs array of objects - questions and answers for FAQs components
    const faqs = [
        {
            question: 'How can I find a trip if I booked through a third-party site?',
            answer: 'When you booked through a third-party site, you would have received a 6-digit confirmation code consisting of letters and numbers, which is required to access your trip prior to check-in. During check-in, you can also access your trip with the 13-digit ticket number.'
        },
        {
            question: 'How do I add a trip to my account?',
            answer: 'If you booked directly with us, your reservation will appear in your account. If you booked elsewhere, you can save any reservation with us to your account by selecting “Save to my trips” while viewing the reservation.',
        },
        {
            question: 'Can I look up a trip with the ticket number?',
            answer: 'To view a reservation, you must have the United confirmation number. However, you’re also able to check in for a flight using the 13-digit ticket number beginning with “016.”',
        },
        {
            question: 'Where can I find my car and hotel reservation?',
            answer: 'To find car and hotel reservations made with United Packages, open your United Packages confirmation email and select “Manage your booking”.',
        },
        {
            question: 'How can I manage my United Packages reservation?',
            answer: 'To view and modify a United Packages booking, open your United Packages confirmation email and select "Manage your booking".If you need further assistance, call United Packages customer service at 866-263-7950.'
        }
    ]
function Faq() {
    const [ activeFaqIndex, setActiveFaqIndex] = useState(null)

    const toggleFaq = (index) => {
        setActiveFaqIndex(activeFaqIndex === index ? null : index)
    }

  return (
    <div className='faqComponentMain'>
        <div className='faqComponent'>
            <h1 className='faqsHeader text-2xl font-bold mb-6'>FAQs</h1>
            <div className='faqDiv space-y-4'>
                {faqs.map((faq, index) => (
                    <div key={index} className='faqBtnDiv border-b '>
                        <button
                            onClick={() => toggleFaq(index)}
                            className='faqBtn'
                        >
                            <span className='faqQuestion'>{faq.question}</span>
                            <div className="upDownDiv">
                                <span className='faqToggle'>{activeFaqIndex === index ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
                            </div>
                            
                        </button>
                        {activeFaqIndex === index && (
                            <p className='faqAnswer mt-2 text-gray-700'>
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <div className='faqLinkDiv mt-8'>
                <a href="#" className='faqLink text-blue-600 hover:underline'>
                    View more Trip FAQs <FontAwesomeIcon icon={faChevronRight} />
                </a>
            </div>
        </div>
      
    </div>
  )
}

export default Faq
