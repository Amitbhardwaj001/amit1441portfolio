import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => (
  <section className="min-h-[75svh] flex flex-col justify-end px-6 pb-24 pt-32 container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.6, bounce: 0 }}
    >
      <p className="label-caps mb-4">Amit Bhardwaj</p>
      <h1 className="font-display font-bold text-foreground" style={{ fontSize: "clamp(2.5rem, 6vw + 1rem, 5rem)" }}>
        A computer science engineer{" "}
        <span className="text-muted-foreground">focused on data analytics, machine learning & problem solving.</span>
      </h1>
      <div className="mt-10 flex items-center gap-6">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
        >
          View Projects <ArrowDown size={14} />
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-muted-foreground underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors"
        >
          Get in touch
        </a>
      </div>
    </motion.div>
  </section>
);

export default Hero;
