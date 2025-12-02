'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Target, Rocket, BarChart3, Users, Shield } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  sectionTitle: 'Everything You Need to Validate and Scale',
  sectionSubtitle: 'Powerful tools designed specifically for startup velocity and innovation',
  ctaText: 'Start Building Today',
  ctaHref: '/get-started',
  features: [
    {
      id: 'rapid-prototyping',
      icon: 'Zap',
      title: 'Rapid Prototyping',
      description:
        'Build and iterate on your MVP in days, not months. Our streamlined development tools help you validate ideas quickly.',
      badge: 'Core Feature',
    },
    {
      id: 'market-validation',
      icon: 'Target',
      title: 'Market Validation',
      description:
        'Test your assumptions with real users through integrated A/B testing, user feedback loops, and analytics.',
      badge: 'Popular',
    },
    {
      id: 'scale-ready',
      icon: 'Rocket',
      title: 'Scale-Ready Infrastructure',
      description:
        'Built on enterprise-grade architecture that grows with you from 100 to 100,000+ users seamlessly.',
      badge: 'Enterprise',
    },
    {
      id: 'analytics-insights',
      icon: 'BarChart3',
      title: 'Deep Analytics & Insights',
      description:
        'Make data-driven decisions with comprehensive metrics, user behavior tracking, and performance monitoring.',
      badge: 'Pro',
    },
    {
      id: 'team-collaboration',
      icon: 'Users',
      title: 'Team Collaboration',
      description:
        'Keep your entire team aligned with real-time collaboration tools, shared workspaces, and progress tracking.',
      badge: 'Team',
    },
    {
      id: 'security-compliance',
      icon: 'Shield',
      title: 'Security & Compliance',
      description:
        'Enterprise-level security with SOC 2 compliance, data encryption, and privacy controls built-in from day one.',
      badge: 'Secure',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      Zap: Zap,
      Target: Target,
      Rocket: Rocket,
      BarChart3: BarChart3,
      Users: Users,
      Shield: Shield,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Zap;
    return <IconComponent className="h-8 w-8" />;
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="features" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {config.features.map((feature, idx) => (
            <Card
              key={feature.id}
              className="bg-card text-card-foreground border-border hover:bg-accent/5 transition-colors duration-300 group"
            >
              <CardContent className="p-8">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    {getIcon(feature.icon)}
                  </div>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary/5 border border-border rounded-2xl p-8 lg:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to accelerate your startup?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of founders who are building the future with our platform.
            </p>
            <Button
              size="lg"
              onClick={handleCTAClick}
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
            >
              <span data-editable="ctaText">{config.ctaText}</span>
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
