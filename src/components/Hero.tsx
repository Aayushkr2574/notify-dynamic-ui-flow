
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-lookscout-blue text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
              Your Supercharged Design Workflow.
            </h1>
            <p className="text-lg text-blue-100 max-w-lg mx-auto lg:mx-0">
              We've been told it is not possible to overachieve our customers' expectations. 
              We have not reinvented the wheel, we decided to build upon it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-secondary bg-white text-lookscout-blue hover:bg-blue-50">
                Start for free
              </Button>
              <Button className="btn-secondary bg-transparent text-white border-white hover:bg-blue-800/20">
                See how it works
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-blue-400/30">
              <p className="text-blue-100 text-sm mb-4">Trusted by amazing companies</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center opacity-80">
                <img src="/lovable-uploads/airbnb.png" alt="Airbnb" className="h-6 w-auto" />
                <img src="/lovable-uploads/slack.png" alt="Slack" className="h-6 w-auto" />
                <img src="/lovable-uploads/netflix.png" alt="Netflix" className="h-6 w-auto" />
                <img src="/lovable-uploads/paypal.png" alt="PayPal" className="h-6 w-auto" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            {/* Person image - Replace with real image as uploaded by user */}
            <div className="bg-white rounded-full p-2 shadow-lg max-w-xs md:max-w-sm mx-auto animate-float">
              <div className="bg-lookscout-blue-50 rounded-full p-3">
                <div className="rounded-full overflow-hidden aspect-square">
                  <img 
                    src="/lovable-uploads/person.png" 
                    alt="Design Professional"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Abstract shapes */}
            <div className="absolute top-0 -right-10 w-24 h-24 bg-lookscout-blue-100 rounded-full opacity-30 animate-float" style={{animationDelay: "1s"}}></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-lookscout-blue-100 rounded-full opacity-30 animate-float" style={{animationDelay: "2s"}}></div>
            <div className="absolute top-1/3 left-1/4 w-10 h-10 bg-white rounded-full opacity-20 animate-float" style={{animationDelay: "0.5s"}}></div>
            <div className="absolute top-2/3 right-1/4 w-16 h-16 bg-white rounded-full opacity-20 animate-float" style={{animationDelay: "1.5s"}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
