import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields.");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus("success");
      setStatusMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        "Network error. Please check your connection and try again."
      );
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tharunjatoth620@gmail.com",
      href: "mailto:tharunjatoth620@gmail.com",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      hoverColor: "hover:border-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7981984440",
      href: "tel:+917981984440",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      hoverColor: "hover:border-purple-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad Telangana",
      href: "#",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      hoverColor: "hover:border-indigo-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-indigo-100 to-purple-100 rounded-full -translate-y-36 translate-x-36 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full translate-y-36 -translate-x-36 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-indigo-50 rounded-full px-6 py-2 mb-6">
            <Mail size={16} className="text-indigo-600 mr-2" />
            <span className="text-sm font-semibold text-indigo-600">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's collaborate and bring your ideas to
            life. I'm always excited to work on new challenges and innovative
            solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Let's Connect
                </h3>
                <p className="text-gray-600">
                  Get in touch through any channel
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-lg mb-8">
              I'm currently available for freelance work and full-time
              opportunities. Feel free to reach out through any of the channels
              below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className={`block p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${item.hoverColor} hover:border-opacity-50`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mr-4`}
                      >
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm font-medium">
                          {item.label}
                        </p>
                        <p className="text-gray-900 font-semibold text-lg">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Response Time Card */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border-2 border-dashed border-purple-300">
              <div className="flex items-center mb-3">
                <CheckCircle size={20} className="text-purple-600 mr-2" />
                <h4 className="font-bold text-gray-900">Quick Response</h4>
              </div>
              <p className="text-gray-600 text-sm">
                I typically respond to emails within 24 hours. For urgent
                inquiries, feel free to call or connect with me on social media.
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <Send size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Send Message
                </h3>
                <p className="text-gray-600">Drop me a line anytime</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl py-3 px-12 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl py-3 px-12 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-sm"
                  placeholder="Let's discuss your project"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-3 top-4 text-gray-400"
                    size={20}
                  />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-white border border-gray-200 rounded-xl py-3 px-12 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none shadow-sm"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>
              </div>

              {/* Status Message */}
              {status !== "idle" && (
                <div
                  className={`p-4 rounded-xl flex items-center space-x-3 ${
                    status === "success"
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : status === "error"
                      ? "bg-red-50 border border-red-200 text-red-700"
                      : "bg-blue-50 border border-blue-200 text-blue-700"
                  }`}
                >
                  {status === "loading" && (
                    <Loader2 className="animate-spin" size={20} />
                  )}
                  {status === "success" && <CheckCircle size={20} />}
                  {status === "error" && <AlertCircle size={20} />}
                  <span className="font-medium">{statusMessage}</span>
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2 shadow-lg"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Quick Response
            </h4>
            <p className="text-gray-600">
              Fast and professional communication for all your project needs
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Multiple Channels
            </h4>
            <p className="text-gray-600">
              Reach out via email, phone, or through the contact form
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Available Now
            </h4>
            <p className="text-gray-600">
              Ready to take on new projects and exciting challenges
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-100 to-green-200 rounded-full border border-green-300">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-800 font-medium">
              Available for new projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
