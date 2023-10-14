import { Link, useNavigate, useParams } from "react-router-dom";
import { LOGO } from "../../assets/images";
import { MdArrowBack } from "react-icons/md";
import { useEffect, useState } from "react";
import useAuth from "../../store/useAuth";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { resetPassword, loading, success, resetAuth } = useAuth(
    (state) => state
  );
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.userId;

  const handleResetPassword = () => {
    if (password !== confirm_password) {
      toast.error("Password and Confirm Password do not match.");
      return;
    }

    if (userId) {
      resetPassword(password, userId);
    }
  };

  useEffect(() => {
    if (!success) {
      return;
    }
    resetAuth();
    navigate("/reset_success");
  }, [success, navigate]);

  return (
    <div className="max-w-screen min-h-screen bg-bg_pry py-[4rem]">
      <div className="max-w-[400px] w-full m-auto flex flex-col gap-8 px-[1rem]">
        <div className="flex flex-col items-center gap-3">
          <img src={LOGO} alt="" className="block w-[48px] mb-2" />
          <h1 className="text-center text-white font-[600] leading-[38px] text-[30px]">
            Reset password
          </h1>
          <p className="font-[400] text-[16px] leading-[24px] text-center text-text_tertiary">
            Reset your password and log back in.
          </p>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[6px]">
              <label className="font-[500] text-[14px] leading-[20px] text-text_sec">
                New Password*
              </label>
              <input
                type="password"
                placeholder="Reset your password"
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

          <div className="flex flex-col gap-[16px]">
            <button
              className="w-full flex items-center justify-center p-[10px] rounded-[8px] bg-pry text-white text-[16px] font-[600] leading-[24px]"
              onClick={handleResetPassword}
            >
              {!loading ? (
                "Reset password"
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

export default ResetPassword;
