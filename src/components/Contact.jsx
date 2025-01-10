import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { MetalPlanetCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { linkedInIcon, githubIcon, emailIcon } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_lv7vj1j',
        'template_2zkp51a',
        {
          from_name: form.name,
          to_name: 'Saswath',
          from_email: form.email,
          to_email: 's2yeshwa@uwaterloo.ca',
          message: form.message,
        },
        'Q15WEtWJCjDejlkJG'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you! I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Something went wrong.');
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl relative"
      >
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <p className={styles.sectionSubText}>Get in touch</p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/saswath-yeshwanth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedInIcon}
                alt="LinkedIn"
                className="w-8 h-8 object-contain hover:opacity-75 transition-opacity duration-300"
              />
            </a>
            <a
              href="https://github.com/saswath-06"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-8 h-8 object-contain hover:opacity-75 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
        <h3 className={styles.sectionHeadText}>Contact me.</h3>
        <p className="text-gray-300 text-md -mt-2">
          Email: <a href="mailto:s2yeshwa@uwaterloo.ca" className="text-blue-400 hover:underline">s2yeshwa@uwaterloo.ca</a>
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Subject"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl transition-all duration-300 
                       hover:bg-purple-700
                       hover:ring-1 hover:ring-purple-700
                       hover:shadow-purple-600 hover:shadow-0.25g 
                       hover:translate-y-[-2px]"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative"
      >
        <MetalPlanetCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
