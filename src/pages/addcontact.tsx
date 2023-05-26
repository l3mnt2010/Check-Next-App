import { useForm, SubmitHandler } from "react-hook-form";
import { Add, Data } from "@/interface/interface";
import { useAppDispatch, RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { ErrorMessage } from "@hookform/error-message";
import { addUser } from "@/redux/contact.slice";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { showToastMessage } from "./dasboard";

export default function AddContact() {
  const data = useSelector((state: RootState) => state.information);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Add>();
  const onSubmit: SubmitHandler<Add> = async (data) => {
    console.log("hihihi", data);
    await dispatch(addUser(data));
    showToastMessage();
    router.push("/");
  };

  return (
    <form className="flex flex-col left_register w-screen h-screen justify-center items-center gap-5">
      <h1 className="mb-4 text-2xl font-bold text-orange-600">
        Bạn đang thêm mới User
      </h1>
      <label className="block mb-2 text-sm font-medium text-white">Name</label>
      <input
        className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Please input your name"
        type="text"
        {...register("name", {
          required: true,
          minLength: 5,
          maxLength: 20,
        })}
      />
      <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => (
          <p className="text-red-500">Vui lòng nhập thông tin tên</p>
        )}
      />
      <label className="block mb-2 text-sm font-medium text-white">Job</label>
      <input
        className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Input your job"
        type="text"
        {...register("job", {
          required: true,
          maxLength: 30,
          minLength: 5,
        })}
      />
      <ErrorMessage
        errors={errors}
        name="job"
        render={({ message }) => (
          <p className="text-red-500">
            Vui lòng nhập lại yêu cầu độ dài lớn hơn 5 và tối đa la 30{" "}
          </p>
        )}
      />

      <div className="w-96 flex justify-center items-center">
        <button
          onClick={handleSubmit(onSubmit)}
          className="h-18 text-white p-3 bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Thêm mới
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}
