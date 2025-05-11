
import React from "react";

const Companies = () => {
  return (
    <section className="py-20 bg-lookscout-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Proud to Be Used By</h2>
          <p className="text-lookscout-gray max-w-2xl mx-auto">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
            <img src="/lovable-uploads/verge.png" alt="The Verge" className="max-h-full" />
          </div>
          <div className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
            <img src="/lovable-uploads/slack.png" alt="Slack" className="max-h-full" />
          </div>
          <div className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
            <img src="/lovable-uploads/google.png" alt="Google" className="max-h-full" />
          </div>
          <div className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
            <img src="/lovable-uploads/paypal.png" alt="PayPal" className="max-h-full" />
          </div>
          <div className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
            <img src="/lovable-uploads/pinterest.png" alt="Pinterest" className="max-h-full" />
          </div>
          <div className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
            <img src="/lovable-uploads/mailchimp.png" alt="Mailchimp" className="max-h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
