import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './faqComponents.scss';

const FAQComponents = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const { t } = useTranslation();
    const questionsAnswers = t('faq.questions', { returnObjects: true });

    return (
        <div className="faq-section">
            <h2>{t('faq.title')}</h2>
            <div className='containerFaq'>
                {questionsAnswers.map((item, index) => (
                    <div key={index} className="faq-item">
                        <h3 onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            {item.question}
                            <span className={`arrow ${openIndex === index ? 'up' : 'down'}`}></span>
                        </h3>
                        {openIndex === index && <p>{item.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQComponents;
