import { Link, useNavigate } from "react-router-dom";
import { LOGO } from "../../assets/images";
import useGoogleAuth from "../../hooks/useGoogleAuth";
import { useEffect, useState } from "react";
import useAuth from "../../store/useAuth";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { googleEmail, setGoogleEmail } = useGoogleAuth();
  const { user, register, googleAuth, loading, success, resetAuth } = useAuth(
    (state) => state
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    const payload = {
      email,
      password,
    };

    if (password !== confirm_password) {
      toast.error("Password and Confirm Password do not match.");
      return;
    }

    register(payload);
  };

  const handleGoogleAuth = () => {
    googleAuth(googleEmail);
    setGoogleEmail("");
  };

  useEffect(() => {
    if (!googleEmail) {
      return;
    }
    handleGoogleAuth();
  }, [googleEmail]);

  useEffect(() => {
    if (success) {
      navigate("/register_success");
    }
    if (user) {
      navigate("/dashboard");
    }
    resetAuth();
  }, [user, success, navigate]);

  return (
    <div className="max-w-screen min-h-screen bg-bg_pry py-[4rem]">
      <div className="max-w-[400px] w-full m-auto flex flex-col gap-8 px-[1rem]">
        <div className="flex flex-col items-center gap-3">
          <img src={LOGO} alt="" className="block w-[48px] mb-2" />
          <h1 className="text-center text-white font-[600] leading-[38px] text-[30px]">
            Create an account
          </h1>
          <p className="font-[400] text-[16px] leading-[24px] text-center text-text_tertiary">
            Start your 30-day free trial.
          </p>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[6px]">
              <label className="font-[500] text-[14px] leading-[20px] text-text_sec">
                Email*
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[44] rounded-[8px] py-[10px] px-[14px] border border-border_pry bg-transparent placeholder:text-[16px] font-[400] leading-[24px] text-text_primary outline-none focus:border-pry"
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="font-[500] text-[14px] leading-[20px] text-text_sec">
                Password*
              </label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-[44] rounded-[8px] py-[10px] px-[14px] border border-border_pry bg-transparent placeholder:text-[16px] font-[400] leading-[24px] text-text_primary outline-none focus:border-pry"
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="font-[500] text-[14px] leading-[20px] text-text_sec">
                Confirm Password*
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirm_password}
                onChange={(e) => setConfirm_password(e.target.value)}
                className="h-[44] rounded-[8px] py-[10px] px-[14px] border border-border_pry bg-transparent placeholder:text-[16px] font-[400] leading-[24px] text-text_primary outline-none focus:border-pry"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-center">
            <button
              className="w-full flex items-center justify-center p-[10px] rounded-[8px] bg-pry text-white text-[16px] font-[600] leading-[24px]"
              onClick={handleRegister}
            >
              {!loading ? (
                "Sign Up"
              ) : (
                <FaSpinner className="text-[25px] spinner" />
              )}
            </button>

            <div id="signInDiv"></div>
          </div>
        </div>

        <div className="text-center font-[400] text-[14px] leading-[20px] text-text_tertiary">
          Already have an account?{" "}
          <Link to="/login" className="font-[600] text-text_sec">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
