import React from "react";
function handleSubmit(test) {
  test.preventDefault();
}
function SearchBox(props) {
  return (
    <div className="  -mt-1 z-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 rounded-b ">
      <form
        className={
          "w-[312px] h-16 bg-zinc-500 bg-opacity-40 items-center flex justify-around rounded-b p-5" +
          props.inClass
        }
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id={props.id}
          placeholder="Enter City"
          className="h-9 w-40 rounded-md pl-2 focus:outline-none"
        />
        <div className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-1 rounded ">
          <input
            type="submit"
            onClick={props.action}
            value={"submit"}
            className=" w-15  text-red-800 bg-gradient-to-tl 
             from-green-300 via-blue-500 to-purple-600 p-2 rounded hover:text-red-200 "
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
