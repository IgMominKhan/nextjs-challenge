import { ITemplate } from "@/types/ITemplate.Interface";
import React from "react";

const templatesPage = async () => {
  const res = await fetch("http://localhost:5000/templates", {
    cache: "force-cache",
  });
  const templates = await res.json();

  return (
    <section className="py-16 w-[90%] mx-auto max-w-[1200px]">
      <div className="flex align-center justify-between gap-5 mb-16">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Templates
        </h1>
        <div className="inline">
          <input
            type="text"
            className="px-3 py-1 text-black mr-2 bg-gray-400 rounded"
          />
          <button className=" px-3 py-1 bg-white font-semibold bg-gradient-to-r from-green-400 to-blue-500">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
        {templates.map((template: ITemplate) => (
          <a
            key={template.id}
            href={`/templates/${template.id}`}
            className="bg-gradient-to-r from-green-400 to-blue-400 rounded-xl p-5"
          >
            <h2 className="text-2xl uppercase mb-3 font-bold">
              {template.name}
            </h2>
            <p>{template.slug}</p>
            <p className="truncate">
              lorem ipsum zipsum ieel sliw asop as as lorem text{" "}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default templatesPage;
