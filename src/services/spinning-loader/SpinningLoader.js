import Loader from "react-js-loader";

export default function SpinningLoader({isLoading}) {
  return (
    <>
      <Loader
        type="spinner-default"
        loading={isLoading}
        bgColor={"black"}
        title={"loading..."}
        size={50}
      />
    </>
  );
}
