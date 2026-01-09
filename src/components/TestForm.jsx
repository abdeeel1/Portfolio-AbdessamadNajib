import { Send } from "lucide-react";

export default function TestForm() {
  return (
    <form
  noValidate
  method="POST"
  action="https://formspree.io/f/movbqrgl"
  className="space-y-6"
>
  <div>
    <label htmlFor="name" className="block text-sm font-medium mb-2">
      Your Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-red-700"
      placeholder="Abdessamad Najib..."
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium mb-2">
      Your Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-red-700"
      placeholder="example@gmail.com"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium mb-2">
      Your Message
    </label>
    <textarea
      id="message"
      name="message"
      required
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-red-700 resize-none"
      placeholder="Hello, I'd like to talk about..."
    />
  </div>

  <button
    type="submit"
    className="cosmic-button w-full flex items-center justify-center gap-2"
  >
    Send Message
    <Send size={16} />
  </button>
</form>

  );
}
