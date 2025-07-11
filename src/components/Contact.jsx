import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      access_key: "0ecfaef1-dee2-4c29-abea-e543b4684f36", // replace with your key
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://api.web3forms.com/submit", payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      toast.success("Your message has been sent!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-2">Contact Me</h1>
        <p className="text-gray-600 text-lg">
          Fill out the form below and I’ll get back to you shortly.
        </p>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white w-full max-w-xl p-8 rounded-xl shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Full Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
              type="text"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
              type="email"
              placeholder="johndoe@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              {...register("message", { required: "Message cannot be empty" })}
              className={`w-full border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-green-500`}
              placeholder="Type your message here..."
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
