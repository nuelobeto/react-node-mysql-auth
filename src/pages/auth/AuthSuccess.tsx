import { Link, useLocation } from "react-router-dom";
import { LOGO } from "../../assets/images";
import { useEffect, useState } from "react";

const AuthSuccess = () => {
  const { pathname } = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (pathname === "/register_success") {
      setMessage(
        "A verification link has been sent to your email. This link will expire in 2 minutes."
      );
    }
    if (pathname === "/reset_success") {
      setMessage("Your password has been reset successfully.");
    }
    if (pathname === "/forgot_success") {
      setMessage(
        "A link to reset your password has been sent to your email. This link will expire in 2 minutes."
      );
    }
  }, [pathname]);

  return (
    <div className="max-w-screen min-h-screen bg-bg_pry py-[4rem]">
      <div className="max-w-[400px] w-full m-auto flex flex-col gap-8 px-[1rem]">
        <div className="flex flex-col items-center gap-3">
          <img src={LOGO} alt="" className="block w-[48px] mb-2" />
          <h1 className="text-center text-white font-[600] leading-[38px] text-[30px]">
            Success!!!
          </h1>
          <p className="font-[400] text-[16px] leading-[24px] text-center text-text_tertiary">
            {message}
          </p>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            {pathname.includes("/reset_success") && (
              <Link
                to={"/login"}
                className="p-[10px] rounded-[8px] bg-pry text-white text-[16px] font-[600] leading-[24px] text-center"
              >
                Back to Log in
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSuccess;
