const Stats = () => {
  return (
    <div className="bg-gray-50  min-h-[350px] flex items-center justify-center font-sans py-4">
      <div className="bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-12 gap-32 rounded-3xl  p-10 mt-6">
        <div className="text-center">
          <h3 className="text-gray-800 text-4xl font-sans font-extrabold">
            100<span className="text-orange-500">+</span>
          </h3>
          <p className="text-gray-500 text-base font-semibold mt-3">
            Total Users
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-gray-800 text-4xl font-sans font-extrabold">
            $5<span className="text-orange-500">K</span>
          </h3>
          <p className="text-gray-500 text-base font-semibold mt-3">Revenue</p>
        </div>
        <div className="text-center">
          <h3 className="text-gray-800 text-4xl font-sans font-extrabold">
            100<span className="text-orange-500">+</span>
          </h3>
          <p className="text-gray-500 text-base font-semibold mt-3">
            Engagement
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-gray-800 text-4xl font-sans font-extrabold">
            99.9<span className="text-orange-500">%</span>
          </h3>
          <p className="text-gray-500 text-base font-semibold mt-3">
            Server Uptime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
