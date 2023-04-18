import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { DeleteEnum } from "../type";
import { useState } from "react";
import { Button } from "./Button";

export const Delete = ({ type }: { type: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeleteEnum>();

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [data, setData] = useState<DeleteEnum>({});

  const onSubmit: SubmitHandler<DeleteEnum> = (data) => {
    setData(data);
    setSubmitted((prevState) => !prevState);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-fuchsia-300 to-sky-500">
      <div className="bg-sky-100 rounded p-10 space-y-10">
        {submitted ? (
          <div>
            {data.id}
          </div>
        ) : (
          <div className="flex items-center space-x-10">
            <h1 className="text-center tracking-wide text-3xl text-gray-900">
              Delete {type ? "supply" : "sale"}
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
