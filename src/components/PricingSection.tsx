import { motion } from "framer-motion";
import { PricingWithChart } from "@/components/ui/pricing-with-chart";

const PricingSection = () => (
  <section id="pricing" className="py-24 relative">
    <div className="absolute inset-0 bg-glow pointer-events-none" />
    <motion.div
      className="container relative mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <PricingWithChart />
    </motion.div>
  </section>
);

export default PricingSection;
