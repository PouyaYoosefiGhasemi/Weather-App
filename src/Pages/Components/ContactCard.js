import React from "react";

function ContactCard(props) {
  return (
    <div className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 my-8 mx-4 p-1 rounded">
      <div className="w-64  h-52 flex flex-col items-center justify-around bg-blue-100 px-1.5 rounded">
        <div className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 pt-0.5  -mt-10 rounded-full">
          <img
            src={props.logo}
            alt={props.alt}
            className="w-16   bg-blue-100 rounded-full  "
          />
        </div>
        <p className="text-center">{props.children}</p>

        <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-0.5 rounded  active:p-1">
          <a
            href={props.link}
            className=" border-2 p-1 bg-blue-100 hover:bg-blue-200 rounded"
          >
            {props.linkExplaination}
          </a>
        </div>
      </div>
    </div>
  );
}
export default ContactCard;
