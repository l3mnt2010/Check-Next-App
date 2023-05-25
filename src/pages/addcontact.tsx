import { useForm, SubmitHandler } from "react-hook-form";
import { UserState } from "@/redux/contact.slice";
import { useAppDispatch, RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { ErrorMessage } from "@hookform/error-message";
import { addContact } from "@/redux/contact.slice";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const defaultValue: UserState = {
  createDate: "",
  nameCamp: "",
  currentReview: "",
  beginReview: "",
  targetReview: "",
  status: "",
  campType: "meo meo meo meo",
  content: "",
  linkChiendich: "",
  id: "",
  currentLike: "",
};

export default function AddContact() {
  const data = useSelector((state: RootState) => state.blog.user);
  const isEdit = useSelector((state: RootState) => state.blog.isEdit);
  console.log(isEdit);
  const router = useRouter();
  console.log(data);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<UserState>({
    defaultValues: data,
  });
  const onSubmit: SubmitHandler<UserState> = (data) => {
    console.log(data);
    dispatch(addContact(data));
    router.push("/");
  };
  useEffect(() => {
    if (isEdit === true) {
      for (const [key, value] of Object.entries(data)) {
        console.log(`${key} ---- ${value}`);
      }
    }
  }, [data]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col py-16 mx-96"
    >
      <h1 className="mb-4 text-2xl font-bold text-orange-600">
        {isEdit
          ? `Bạn đang thao tác với người dùng có id là ${data.id}`
          : `Bạn đang thêm mới Reviewer`}
      </h1>
      <label className="block mb-2 text-sm font-medium text-white">
        createDate
      </label>
      <input
        className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="mời nhập ngày tạo"
        type="text"
        {...register("createDate", {
          required: true,
          minLength: 5,
          maxLength: 20,
        })}
      />
      <ErrorMessage
        errors={errors}
        name="createDate"
        render={({ message }) => (
          <p className="text-red-500">Vui lòng nhập thông tin Date</p>
        )}
      />
      <label className="block mb-2 text-sm font-medium text-white">
        nameCamp
      </label>
      <input
        className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="mời nhập nơi truy cập"
        type="text"
        {...register("nameCamp", {
          required: true,
          maxLength: 30,
          minLength: 7,
        })}
      />
      <ErrorMessage
        errors={errors}
        name="nameCamp"
        render={({ message }) => (
          <p className="text-red-500">
            Vui lòng nhập lại yêu cầu độ dài lớn hơn 7 và tối đa la 30{" "}
          </p>
        )}
      />
      <label className="block mb-2 text-sm font-medium text-white ">
        {" "}
        currentReview
      </label>
      <input
        className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="mời nhập số người ghé thăm"
        type="text"
        {...register("currentReview", { min: 0 })}
      />
      <ErrorMessage
        errors={errors}
        name="currentReview"
        render={({ message }) => (
          <p className="text-red-500">Vui lòng nhập số người ghé thăm </p>
        )}
      />
      <label className="block mb-2 text-sm font-medium text-white">
        beginReview
      </label>
      <input
        className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="mời nhập số người quay lại"
        type="text"
        {...register("beginReview", { min: 0, max: 1000000000000 })}
      />
      <ErrorMessage
        errors={errors}
        name="beginReview"
        render={({ message }) => (
          <p className="text-red-500">
            Vui lòng nhập lại số yêu cầu lớn hơn 5{" "}
          </p>
        )}
      />
      <label className="block mb-2 text-sm font-medium text-white">
        targetReview
      </label>
      <input
        className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="mời nhập số điểm đánh giá"
        type="text"
        {...register("targetReview", { min: 0, max: 100 })}
      />
      <ErrorMessage
        errors={errors}
        name="targetReview"
        render={({ message }) => (
          <p className="text-red-500">
            Vui lòng nhập lại số điểm từ 0 đến 100{" "}
          </p>
        )}
      />
      <label className="block mb-2 text-sm font-medium text-white">
        status
      </label>
      <input
        className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="mời nhập trạng thái"
        {...register("status", { required: true, minLength: 2, maxLength: 20 })}
      />
      <ErrorMessage
        errors={errors}
        name="status"
        render={({ message }) => (
          <p className="text-red-500">
            Vui lòng nhập cảm xúc tối thiểu 2 và tối đa 20 kí tự{" "}
          </p>
        )}
      />
      <label className="block mb-2 text-sm font-medium text-white">
        campType
      </label>
      <input
        className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="mời nhập vị trí "
        {...register("campType", {
          required: true,
          minLength: 1,
          maxLength: 20,
        })}
      />
      <ErrorMessage
        errors={errors}
        name="campType"
        render={({ message }) => (
          <p className="text-red-500">
            Vui lòng nhập lại yêu cầu độ dài lớn hơn 1 và nhỏ hơn 20{" "}
          </p>
        )}
      />
      <label className="block mb-2 text-sm font-medium text-white">
        content
      </label>
      <input
        className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="mời nhập content"
        {...register("content", {
          required: true,
          minLength: 1,
          maxLength: 20,
        })}
      />
      <ErrorMessage
        errors={errors}
        name="content"
        render={({ message }) => (
          <p className="text-red-500">
            Vui lòng nhập lại yêu cầu độ dài lớn hơn 5{" "}
          </p>
        )}
      />
      <label className="block mb-2 text-sm font-medium text-white">
        linkChiendich
      </label>
      <input
        className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="mời nhập link truy cập"
        type="url"
        {...register("linkChiendich", {
          required: true,
          minLength: 1,
          maxLength: 100,
        })}
      />

      <ErrorMessage
        errors={errors}
        name="linkChiendich"
        render={({ message }) => (
          <p className="text-red-500">
            Vui lòng nhập lại yêu cầu độ dài từ 1 đến 100{" "}
          </p>
        )}
      />
      <label className="block mb-2 text-sm font-medium text-white">
        currentLike
      </label>
      <input
        className=" bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="mời nhập số like"
        type="text"
        {...register("currentLike", { min: 0, max: 100000000 })}
      />
      <ErrorMessage
        errors={errors}
        name="currentLike"
        render={({ message }) => (
          <p className="text-red-500">Vui lòng nhập số like </p>
        )}
      />
      <div className="flex w-96">
        <button
          type="submit"
          className=" h-18 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1 mt-8 ml-10 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Thêm mới
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}
