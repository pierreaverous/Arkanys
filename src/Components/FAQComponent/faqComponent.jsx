// Components/FAQ/FAQ.js
import React from 'react';
import './faqComponents.scss'

const FAQComponents = () => {
    const questionsAnswers = [
        {
            question: "Question 1?",
            answer: "Réponse à la question 1."
        },
        {
            question: "Question 2?",
            answer: "Réponse à la question 2."
        },
        {
            question: "Question 2?",
            answer: "Réponse à la question 2."
        },
        {
            question: "Question 2?",
            answer: "Réponse à la question 2."
        },
        {
            question: "Question 2?",
            answer: "Réponse à la question 2."
        },
        {
            question: "Question 2?",
            answer: "Réponse à la question 2."
        },
        {
            question: "Question 2?",
            answer: "Réponse à la question 2."
        },
        {
            question: "Question 2?",
            answer: "Réponse à la question 2."
        },
        // ... ajoutez autant de questions/réponses que nécessaire
    ];

    return (
        <div className="faq-section">
            <h2>Foire aux questions</h2>
            <div className='containerFaq'>
                {questionsAnswers.map((item, index) => (
                    <div key={index} className="faq-item">
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQComponents;
