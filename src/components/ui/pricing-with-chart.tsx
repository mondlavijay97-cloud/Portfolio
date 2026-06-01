'use client';

import { Button } from '@/components/ui/button';
import { CheckCircleIcon, ArrowRight } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export function PricingWithChart() {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl font-heading">
          Retainer <span className="text-gradient">Packages</span>
        </h2>
        <p className="max-w-xl text-muted-foreground text-base">
          Transparent monthly creative retainers crafted to fit your brand's unique needs.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <Card className="glass-card border-primary/15 flex flex-col -order-1 lg:order-none">
          <CardContent className="flex flex-col gap-8 p-8 flex-1">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <p className="text-lg font-semibold font-heading text-foreground">
                  Short-Form Growth Pack
                </p>
              </div>
              <span className="text-4xl font-bold font-heading text-foreground tracking-tight">
                ₹24,999<span className="text-xs font-normal text-muted-foreground">/mo</span>
              </span>
              <p className="text-sm text-muted-foreground">
                Best for vertical social platforms
              </p>
            </div>

            <Button variant="outline" size="lg" className="w-full" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Let's Get Started <ArrowRight size={18} />
              </a>
            </Button>

            <hr className="border-primary/10" />

            <div className="flex flex-col gap-3">
              {[
                '10 Viral-Optimized Vertical Edits',
                'Hook & Script Consultation',
                'Kinetic Typography & GFX',
                'Dynamic Sound Architecture',
                '2 revision rounds per clip',
                'Dedicated Slack/WhatsApp support',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircleIcon size={16} className="text-primary-bright shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pro Plan - spans 2 columns */}
        <Card className="glass-card border-primary/40 glow-purple lg:col-span-2 relative">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-cta px-5 py-1 text-xs font-bold tracking-wide text-primary-foreground shadow-lg z-10">
            POPULAR RETAINER
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {/* Pricing + Chart */}
            <div className="flex flex-col gap-6 p-8 border-b md:border-b-0 md:border-r border-primary/10">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold font-heading text-foreground">
                  Cinematic Horizontal Package
                </p>
                <span className="text-4xl font-bold font-heading text-foreground tracking-tight">
                  ₹59,999<span className="text-xs font-normal text-muted-foreground">/mo</span>
                </span>
                <p className="text-sm text-muted-foreground">
                  Complete custom visual production
                </p>
              </div>

              <div className="flex-1 min-h-0">
                <InterestChart />
              </div>
            </div>
            {/* Features */}
            <div className="flex flex-col gap-6 p-8">
              <p className="text-sm font-semibold font-heading text-foreground">
                Everything in Short-Form plus:
              </p>
              <div className="flex flex-col gap-3 flex-1">
                {[
                  '4 Cinematic Horizontal Videos (up to 10m)',
                  'Hollywood-Grade Color Correction',
                  'Immersive Custom Sound & SFX Design',
                  'Advanced Motion Graphics Layers',
                  'Priority Scheduling & Rapid Render',
                  'Source Assets & Project Files Delivered',
                  'Direct Creative Strategy Audits',
                  'Urgent 24hr Revision Turnaround',
                  'Dedicated Private Slack Workspace',
                  'Unlimited Video Call Consultations',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon size={16} className="text-primary-bright shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="flex flex-col gap-3">
                <Button variant="gradient" size="lg" className="w-full" asChild>
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Book Retainer Call <ArrowRight size={18} />
                  </a>
                </Button>
                <span className="text-xs text-muted-foreground text-center font-semibold text-[#A855F7]">
                  Limited to 3 clients per month
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function InterestChart() {
  const chartData = [
    { month: 'January', interest: 120 },
    { month: 'February', interest: 180 },
    { month: 'March', interest: 150 },
    { month: 'April', interest: 210 },
    { month: 'May', interest: 250 },
    { month: 'June', interest: 300 },
    { month: 'July', interest: 280 },
    { month: 'August', interest: 320 },
    { month: 'September', interest: 340 },
    { month: 'October', interest: 390 },
    { month: 'November', interest: 420 },
    { month: 'December', interest: 500 },
  ];

  const chartConfig = {
    interest: {
      label: 'Interest',
      color: 'hsl(var(--primary))',
    },
  } satisfies ChartConfig;

  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardHeader className="p-0 pb-2">
        <CardTitle className="text-sm font-heading text-foreground">Client Growth Trend</CardTitle>
        <CardDescription className="text-xs">
          Average retention rate improvement (+%)
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ChartContainer config={chartConfig} className="h-[180px] w-full">
          <LineChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <CartesianGrid vertical={false} stroke="hsl(var(--primary) / 0.1)" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line
              dataKey="interest"
              type="monotone"
              stroke="hsl(var(--primary-bright))"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
