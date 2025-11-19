import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-black rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-black rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Ready to start your project? Let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <motion.div 
                className="flex items-start gap-4 p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="mb-1">Office Location</p>
                  <p className="text-neutral-600">123 Design Street, Suite 400<br />San Francisco, CA 94102</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="mb-1">Phone</p>
                  <p className="text-neutral-600">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="mb-1">Email</p>
                  <p className="text-neutral-600">hello@archaus.design</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-neutral-50 p-8 rounded-2xl">
              <motion.div
                animate={{
                  scale: focusedField === "name" ? 1.02 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="bg-white border-neutral-200 focus:border-black transition-colors"
                />
              </motion.div>

              <motion.div
                animate={{
                  scale: focusedField === "email" ? 1.02 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="bg-white border-neutral-200 focus:border-black transition-colors"
                />
              </motion.div>

              <motion.div
                animate={{
                  scale: focusedField === "message" ? 1.02 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                <Textarea
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="bg-white border-neutral-200 focus:border-black transition-colors min-h-[150px]"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-black text-white hover:bg-neutral-800">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}