
import React from "react";
import { CircleCheck } from "lucide-react";

const Showcase = () => {
  return (
    <section className="py-20 bg-lookscout-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Redefining Product Features</h2>
          <p className="text-lookscout-gray max-w-2xl mx-auto">
            Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="flex items-start space-x-4 animate-fade-in"
                style={{ animationDelay: `${item * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-lookscout-blue rounded-full flex items-center justify-center">
                    <CircleCheck className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {item === 1 && "Explore ideas together"}
                    {item === 2 && "Bring those ideas to life"}
                    {item === 3 && "Ship better outcomes"}
                  </h3>
                  <p>
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                  <a 
                    href="#" 
                    className="text-lookscout-blue font-medium hover:underline mt-2 inline-block"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/showcase-1.jpg" 
                alt="Modern workspace" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg mt-8">
              <img 
                src="/lovable-uploads/showcase-2.jpg" 
                alt="Design workspace" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex space-x-4">
              <div className="w-1/2 rounded-l-3xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/showcase-3.jpg" 
                  alt="Workspace left" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 rounded-r-3xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/showcase-4.jpg" 
                  alt="Workspace right" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            {[1, 2, 3].map((item) => (
              <div 
                key={item + 3} 
                className="flex items-start space-x-4 animate-fade-in"
                style={{ animationDelay: `${item * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-lookscout-blue rounded-full flex items-center justify-center">
                    <CircleCheck className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {item === 1 && "Explore ideas together"}
                    {item === 2 && "Bring those ideas to life"}
                    {item === 3 && "Ship better outcomes"}
                  </h3>
                  <p>
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                  <a 
                    href="#" 
                    className="text-lookscout-blue font-medium hover:underline mt-2 inline-block"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
