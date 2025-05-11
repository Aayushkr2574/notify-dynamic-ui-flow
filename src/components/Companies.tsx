
import React from "react";

const Companies = () => {
  const companies = [
    { name: "The Verge", logoPath: "/lovable-uploads/verge.png" },
    { name: "Slack", logoPath: "/lovable-uploads/slack.png" },
    { name: "Google", logoPath: "/lovable-uploads/google.png" },
    { name: "PayPal", logoPath: "/lovable-uploads/paypal.png" },
    { name: "Pinterest", logoPath: "/lovable-uploads/pinterest.png" },
    { name: "Mailchimp", logoPath: "/lovable-uploads/mailchimp.png" }
  ];

  return (
    <section className="py-20 bg-lookscout-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Proud to Be Used By</h2>
          <p className="text-lookscout-gray max-w-2xl mx-auto">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 items-center justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="w-full h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <img 
                src={company.logoPath} 
                alt={company.name} 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
