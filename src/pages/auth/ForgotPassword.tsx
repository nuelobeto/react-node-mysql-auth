import { Link, useNavigate } from "react-router-dom";
import { LOGO } from "../../assets/images";
import { MdArrowBack } from "react-icons/md";
import { useEffect, useState } from "react";
import useAuth from "../../store/useAuth";
import { FaSpinner } from "react-icons/fa";

const ForgotPassword = () => {
  const { forgotPassword, loading, success, resetAuth } = useAuth(
    (state) => state
  );
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    forgotPassword(email);
  };

  useEffect(() => {
    if (success) {
      navigate("/forgot_success");
    }

    resetAuth();
  }, [success, navigate]);

  return (
    <div className="max-w-screen min-h-screen bg-bg_pry py-[4rem]">
      <div className="max-w-[400px] w-full m-auto flex flex-col gap-8 px-[1rem]">
        <div className="flex flex-col items-center gap-3">
          <img src={LOGO} alt="" className="block w-[48px] mb-2" />
          <h1 className="text-center text-white font-[600] leading-[38px] text-[30px]">
            Forgot password?
          </h1>
          <p className="font-[400] text-[16px] leading-[24px] text-center text-text_tertiary">
            No worries, we’ll send you reset instructions.
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
          </div>

          <div className="flex flex-col gap-[16px]">
            <button
              className="w-full flex items-center justify-center p-[10px] rounded-[8px] bg-pry text-white text-[16px] font-[600] leading-[24px]"
              onClick={handleForgotPassword}
            >
              {!loading ? (
                "Send reset link"
              ) : (
                <FaSpinner className="text-[25px] spinner" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Link
            to={"/login"}
            className="font-[600] text-[14px] leading-[20px] text-text_tertiary w-fit flex items-center justify-center gap-[6px]"
          >
            <MdArrowBack className="text-[20px]" />
            Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
