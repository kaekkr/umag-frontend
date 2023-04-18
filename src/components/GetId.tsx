import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { GetIdReq, GetIdRes } from "../type";
import { useEffect, useState } from "react";
import { Button } from "./Button";

export const GetId = ({ type }: { type: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GetIdReq>();

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [reqData, setReqData] = useState<GetIdReq>();
  const [resData, setResData] = useState<GetIdRes>();

  const onSubmit: SubmitHandler<GetIdReq> = (reqData) => {
    setReqData(reqData);
    setSubmitted((prevState) => !prevState);
  };

  useEffect(() => {
    const resData: GetIdRes = {
      id: 1,
      barcode: 1,
      price: 1,
      quantity: 1,
      supplyTime: "2022-12-28 11:00:02",
    };
    setResData(resData);
  }, [submitted]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-fuchsia-300 to-sky-500">
      <div className="bg-sky-100 rounded p-10 space-y-10">
        {submitted ? (
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h1 className="font-normal text-gray-700">ID: {resData?.id}</h1>
            <h1>Barcode: {resData?.barcode}</h1>
            <h1>Price: {resData?.price}</h1>
            <h1>Quantity: {resData?.quantity}</h1>
            <h1>Supply time: {resData?.supplyTime}</h1>
          </div>
        ) : (
          <div className="flex items-center space-x-10">
            <h1 className="text-center tracking-wide text-3xl text-gray-900">
              Get {type ? "supply" : "sale"} by id
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 flex flex-col"
            >
              <div className="flex flex-col">
                <label className="text-sm font-medium">Id </label>
                <input
                  {...register("id", { required: true })}
                  className="px-2 py-1.5
                  block w-full border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none
                  focus:border-sky-500
                  focus:ring-1
                  focus:ring-sky-500
                  focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
              </div>
              {errors.id && <span className="block">Id is required</span>}
              <Button />
            </form>
          </div>
        )}

        <div>
          <Link
            to={"/"}
            className="underline underline-offset-8 hover:text-blue-500"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};
