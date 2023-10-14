const Error = () => {
  return (
    <div className="h-screen w-sceen flex items-center justify-center flex-col gap-[1rem]">
      <div className="max-w-[500px]">
        <img
          src="https://res.cloudinary.com/dk9bt9lkn/image/upload/v1697283544/node-react-auth/13315300_5203298_upli2l.svg"
          alt=""
          className="w-full block"
        />

        <p>Looks like the link you followed is invalid or broken.</p>
      </div>
    </div>
  );
};

export default Error;
