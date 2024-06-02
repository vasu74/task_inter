const Services = () => {
  return (
    <>
      <div className="w-full bg-[#FAFAFA] p-16 ">
        {/* sizing div  */}
        <div className="max-w-7xl mx-auto flex justify-center flex-col items-center gap-16">
          <div id="service_content flex-col gap-16">
            <h4 className="text-[#FF3147] uppercase lg:text-lg text-md">
              What we do
            </h4>
            <div className="flex gap-16">
              <h2 className="uppercase font-bold lg:text-4xl text-2xl w-2/3 ">
                Services Provide For you
              </h2>
              <p className="">
                Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
                lacus nec risus finibus feugiat et fermentum finibus feugiat et
                fermentum nibh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
