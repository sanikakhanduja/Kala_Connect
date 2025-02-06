import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Mail, LockKeyhole, Phone, ShoppingCartIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../utils/axios";
import AuthImagePattern from "../components/authImagePattern";
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState(null); // "buyer" or "seller"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    bio: "",
    location: "",
    phone: "",
    shopName: "",
    profilePicture: null,
  });

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!formData.password.trim()) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");
    if (!emailRegex.test(formData.email))
      return toast.error("Please enter a valid email");

    if (role === "seller") {
      if (!formData.bio.trim()) return toast.error("Bio is required");
      if (!formData.location.trim()) return toast.error("Location is required");
      if (!formData.phone.trim()) return toast.error("Phone number is required");
      if (!formData.shopName.trim())
        return toast.error("Shop name is required");
      if (!formData.profilePicture)
        return toast.error("Profile picture is required");
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

    try {
        console.log("seding req")
        const res = await axiosInstance.post("/auth/signup",formData)
        console.log(res.data)
        toast.success("Account Created Successfully")
        localStorage.setItem("token", res.data.token);
        navigate("/")
        window.location.reload(); 

    } catch (error) {
        toast.error("Signup failed. Please try again.");
    }
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F0E3] via-[#A7C7D7] to-[#F1C6AC]">
      {/* Role Selection Modal */}
      {!role && (
        <div className="fixed inset-0 bg-gradient-to-br from-[#F8F0E3] via-[#A7C7D7] to-[#F1C6AC] text-lg flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold">Are you a Seller or Buyer?</h2>
            <div className="mt-4 space-x-4">
              <button
                onClick={() => setRole("buyer")}
                className="btn btn-primary hover:cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Buyer
              </button>
              <button
                onClick={() => setRole("seller")}
                className="btn btn-primary hover:cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            
              >
                Seller
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Left Side - Form */}
      {role && (
        <div className="flex flex-col justify-center items-center p-6 sm:p-12">
          <div className="w-full max-w-md space-y-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mt-2 tracking-tight">
                Create Account
              </h1>
              <p className="text-base-content/60 text-xl tracking-tight">
                Get started as a {role === "seller" ? "Seller" : "Buyer"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="size-5 text-base-content/40" />
                  </div>
                  <input
                    type="text"
                    className="input input-bordered w-full p-3 pl-10"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Role</span>
                </label>
                <div className="relative">
                  <div className="absolute flex items-center inset-y-0 left-0 pl-3 pointer-events-none">
                    <Mail className="size-5 text-base-content/40" />
                  </div>
                  <input
                    type="text"
                    className="input input-bordered w-full p-3 pl-10"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    placeholder="seller/buyer"
                  />
                </div>
              </div>
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <div className="relative">
                  <div className="absolute flex items-center inset-y-0 left-0 pl-3 pointer-events-none">
                    <Mail className="size-5 text-base-content/40" />
                  </div>
                  <input
                    type="email"
                    className="input input-bordered w-full p-3 pl-10"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                  <div className="absolute flex items-center inset-y-0 left-0 pl-3 pointer-events-none">
                    <LockKeyhole className="text-base-content/40 size-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full p-3 pl-10"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
            
              </div>

              {/* Additional Seller Fields */}
              {role === "seller" && (
                <>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Shop Name</span>
                    </label>
                    <div className="relative">
                  <div className="absolute flex items-center inset-y-0 left-0 pl-3 pointer-events-none">
                    {/* <ShoppingCartIcon className="text-base-content/40 size-5"></ShoppingCartIcon> */}
                  </div>
                    <input
                      type="text"
                      className="input input-bordered w-full pl-10 p-3"
                      value={formData.shopName}
                      onChange={(e) =>
                        setFormData({ ...formData, shopName: e.target.value })
                      }
                      placeholder="My Handmade Store"
                    />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                    <span className="label-text font-medium">Location</span>
                    </label>
                    <div className="relative">
                  <div className="absolute flex items-center inset-y-0 left-0 pl-3 pointer-events-none">
                 
                  </div>
                    <input
                      type="text"
                      className="input input-bordered w-full pl-10 p-3"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="City, Country"
                    />
                    </div>
                  </div>
                  <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Phone No.</span>
                </label>
                <div className="relative">
                  <div className="absolute flex items-center inset-y-0 left-0 pl-3 pointer-events-none">
                    <Phone className="text-base-content/40 size-5"></Phone>
                  </div>
                  <input
                    type="number"
                    className="input input-bordered w-full p-3 pl-10"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="your contact no."
                  />
                </div>
              </div>
                </>
              )}

              {/* Submit Button */}
              <div className=" flex items-center justify-center">
              
<button type="submit" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an Account</button>
</div>
            </form>

            {/* Login Link */}
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      )}
          </div>
  );
};

export default SignUpPage;
