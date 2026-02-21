
import { Mail, Phone, Linkedin, Github, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      const response = await fetch('https://formspree.io/f/xblkknjp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 relative bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden w-full">
      {/* Subtle grid background */}
      <div className="dark:hidden absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
      <div className="hidden dark:block absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)', backgroundSize: '32px 32px'}} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-2 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-cyan-500 bg-clip-text text-transparent select-none">Contact Me</h2>
        </div>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border border-gray-200 dark:border-slate-700 min-w-0">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-green-500 rounded-full shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Email</h3>
              </div>
              <a 
                href="mailto:amansharma97385@gmail.com" 
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base md:text-lg block break-all"
              >
                amansharma97385@gmail.com
              </a>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border border-gray-200 dark:border-slate-700 min-w-0">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-blue-500 rounded-full shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Phone</h3>
              </div>
              <a 
                href="tel:+918535062452" 
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base md:text-lg block"
              >
                +91-8535062452
              </a>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border border-gray-200 dark:border-slate-700 min-w-0">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-purple-500 rounded-full shrink-0">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">GitHub</h3>
              </div>
              <a 
                href="https://github.com/amansharma97385" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base md:text-lg block break-all"
              >
                github.com/amansharma97385
              </a>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border border-gray-200 dark:border-slate-700 min-w-0">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-blue-600 rounded-full shrink-0">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">LinkedIn</h3>
              </div>
              <a 
                href="https://www.linkedin.com/in/amansharma97385" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base md:text-lg block break-all"
              >
                linkedin.com/in/amansharma97385
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-slate-700 min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Send Message</h3>
            

            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="min-w-0">
                <label className="block text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full min-w-0 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="min-w-0">
                <label className="block text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full min-w-0 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="min-w-0">
                <label className="block text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2 font-medium text-sm sm:text-base">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full min-w-0 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base">
                  ❌ Failed to send message. Please try again or email me directly.
                </div>
              )}
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full min-w-0 bg-gray-900 dark:bg-slate-700 hover:bg-gray-800 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
