
import React from "react";

const Testimonial = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="mx-auto mb-6" width="24" height="24" viewBox="0 0 24 24">
            <path 
              fill="#437EF7" 
              d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z"
            />
          </svg>
          
          <blockquote className="mb-8">
            <p className="text-2xl font-medium text-lookscout-dark leading-relaxed">
              "Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!"
            </p>
          </blockquote>
          
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img 
                src="/lovable-uploads/testimonial-avatar.jpg" 
                alt="Lisa Smith" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold">Lisa Smith</p>
              <p className="text-sm text-lookscout-gray">CEO Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
