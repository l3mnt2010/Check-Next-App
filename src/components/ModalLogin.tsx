import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInPut {
  name: string;
  age: number;
}
const style = {
  backgroundColor: "#afc",
};

function LogIn() {
  const { register, handleSubmit } = useForm<IFormInPut>();
  const OnSubmit: SubmitHandler<IFormInPut> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white opacity- fixed top-5 left-0 right-0 w-screen h-screen pt-52">
      <form
        onSubmit={handleSubmit(OnSubmit)}
        className="w-3/6 mx-auto p-5 flex flex-col gap-10  "
        style={style}
      >
        <label className="font-bold text-white">Name</label>
        <input
          className="rounded-sm"
          {...(register("name"), { minLength: 0, maxLength: 30 })}
        />
        <label className="font-bold text-white">Age</label>
        <input className="rounded-sm" {...(register("age"), { min: 18 })} />
        <input
          className="h-10 w-1/6 mx-auto rounded-md bg-pink-500"
          type="submit"
        />
      </form>
    </div>
  );
}
export default LogIn;
