
import React from "react";
import { Mail, Zap, BarChart3, FileStack, Layers, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const featuresList = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Work Organization",
      description: "Dedicated space where your team and clients can manage and organize daily work."
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Fast Connection",
      description: "Your tasks are synced, enabling real-time collaboration with others from anywhere."
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Streamlined Processes",
      description: "Stay focused and on track with visual schedules, team activities, and progress reports."
    },
    {
      icon: <FileStack className="h-5 w-5" />,
      title: "Easier Integrations",
      description: "Configure actions and automate processes for seamless third-party tools connections."
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Marketing Analytics",
      description: "Comprehensive analytics to understand your performance and growth opportunities."
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: "Workflow Builder",
      description: "Powerful automation platform that puts productivity at your organization's fingertips."
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Messaging for all</h2>
          <p className="text-lookscout-gray max-w-2xl mx-auto">
            User generated content in real-time will have multiple touchpoints for offshoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card flex flex-col group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="mb-4">{feature.description}</p>
              <a 
                href="#" 
                className="text-lookscout-blue font-medium hover:underline mt-auto inline-flex items-center"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
