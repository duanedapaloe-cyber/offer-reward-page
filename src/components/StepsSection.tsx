import { ExternalLink, CheckCircle2, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: ExternalLink,
    title: "Visit the Offer Page",
    description: "Click the button above to access the exclusive offer page.",
    number: "01",
  },
  {
    icon: CheckCircle2,
    title: "Complete 3–5 Deals",
    description: "Choose and complete the required deals from the available options.",
    number: "02",
  },
  {
    icon: Trophy,
    title: "Receive Your $1000 Reward",
    description: "Once completed, your reward will be processed and delivered.",
    number: "03",
  },
];

const StepsSection = () => {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        How It Works
      </h2>
      
      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card 
              key={index}
              className="border-border shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-gradient-card rounded-3xl overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center relative">
                      <Icon className="w-7 h-7 text-primary" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-accent-foreground shadow-soft">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StepsSection;
