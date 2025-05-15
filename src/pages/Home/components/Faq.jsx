import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use CodeBook?",
          "answer": "CodeBook is your all-in-one learning companion designed to help developers grow faster, smarter, and with real-world skills. Whether you're a beginner trying to understand the basics or a seasoned developer looking to sharpen advanced techniques, CodeBook brings value in several key ways CodeBook offers curated content from foundations to advanced levels, covering essential tech stacks like React, Python, JavaScript, Git, and backend development."
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "Yes, absolutely! You can access your eBook on any mobile device — whether you're using an Android phone, iPhone, or tablet. CodeBook is designed with responsive layouts and mobile compatibility in mind, so you can: Read on the go without needing a computer, Resume where you left off, anytime, anywhere, Enjoy a smooth, user-friendly interface optimized for smaller screens. So whether you're commuting, traveling, or just relaxing, your learning never has to stop."
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "Refund policies for eBooks vary by platform. Some major eBook retailers like Amazon offer limited refunds, usually within a short time frame (typically 7 days) and under specific conditions (e.g., accidental purchase). Other platforms may have stricter policies and might not allow refunds at all. It's best to check the refund policy of the store where you bought the eBook for accurate details."
        },
        {
          "id": 4,
          "question": "Do you support Internation payments?",
          "answer": "Yes, we support international payments. Customers from around the world can make purchases using a variety of secure payment methods, including major credit/debit cards and digital wallets. All transactions are processed in your selected currency at checkout."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm px-[50px]">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}