import React from "react";

const singleTemplatePage = async ({ params }: { params: { slug: string } }) => {
  let template;
  try {
    const res = await fetch(`http://localhost:5000/templates/${params.slug}`, {
      cache: "no-cache",
    });
    template = await res.json();
  } catch (err) {
    console.log("error oscurred during fetch", err);
  }
  return (
    <section className="py-16 w-[90%] mx-auto max-w-[1200px]">
      {template ? (
        <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-xl p-5">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-3">
            {template.name}
          </h1>
          <p className="text-2xl font-bold">{template.slug}</p>
          <p className="line-clamp-[10]">
            lorem ipsum zipsum ieel sliw asop as as lorem text Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ratione voluptas, odio nisi
            qui repudiandae pariatur expedita et excepturi? Voluptatum nostrum
            corporis nam temporibus totam ut. Cum, ea officia. Numquam eius,
            voluptate deserunt excepturi veniam tenetur eveniet impedit officia
            soluta doloribus voluptatum ullam iste sed rem vel animi ducimus
            iure quos dolorem quam nemo, quis fugiat laborum. Perferendis
            incidunt eius sapiente possimus doloremque alias? Doloribus
            molestiae eligendi at labore fuga. Veritatis deserunt consequatur
            sunt labore ipsum nisi ipsam quis pariatur temporibus voluptatibus
            culpa, nemo, voluptas iure architecto quasi quibusdam quidem
            distinctio ex. Quisquam magni obcaecati aliquid dolorum molestiae
            reprehenderit cumque quaerat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis, sequi! Dolor impedit sunt aspernatur
            deserunt, nulla quis! Quaerat quas quidem accusamus rerum, saepe eum
            ratione repellendus itaque et odio neque libero esse fuga ullam
            nobis? Est quod commodi nobis, consequatur similique at. Quas, quod
            dolorum ad at omnis voluptate suscipit.
          </p>
        </div>
      ) : (
        <h1 className="text-3xl font-bold">Oops!Something is wrong</h1>
      )}
    </section>
  );
};

export default singleTemplatePage;
