import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => (
  <section className="py-20 px-4 max-w-xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-6 text-teal-700">Contact</h2>
    <div className="w-24 h-1 bg-teal-500 mx-auto mb-6 rounded-full"></div>
    
    <p className="mb-6 text-gray-600">
      Feel free to reach out for opportunities, collaboration, or just a tech chat!
    </p>

    <div className="space-y-4 text-base text-left">
      <div className="flex items-center gap-3 justify-center">
        <Phone className="w-5 h-5 text-teal-600" />
        <a
          href="tel:+919730934457"
          className="text-teal-600 hover:underline"
        >
          +91-9730934457
        </a>
      </div>

      <div className="flex items-center gap-3 justify-center">
        <Mail className="w-5 h-5 text-teal-600" />
        <a
          href="mailto:yogeshkumavat42615@gmail.com"
          className="text-teal-600 hover:underline"
        >
          yogeshkumavat42615@gmail.com
        </a>
      </div>

      <div className="flex items-center gap-3 justify-center">
        <Linkedin className="w-5 h-5 text-teal-600" />
        <a
          href="https://www.linkedin.com/in/yogesh-kumavat-b81374237"
          target="_blank"
          rel="noreferrer"
          className="text-teal-600 hover:underline"
        >
          linkedin.com/in/yogesh-kumavat-b81374237
        </a>
      </div>

      <div className="flex items-center gap-3 justify-center">
        <Github className="w-5 h-5 text-teal-600" />
        <a
          href="https://github.com/Ykumavat5"
          target="_blank"
          rel="noreferrer"
          className="text-teal-600 hover:underline"
        >
          github.com/Ykumavat5
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
