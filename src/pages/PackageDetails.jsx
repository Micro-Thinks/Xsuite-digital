import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FAQs from "../components/main/FAQs";
import { motion } from "framer-motion"; // Importing framer-motion

const PackageDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packagesData = [
    {
      name: "Basic Package",
      description: "Kickstart Your Digital Journey",
      prices: {
        quarterly: 50,
        semiAnnual: 120,
        annual: 400,
      },
      features: [
        "1-Page Website",
        "Basic SEO & Google Analytics Setup",
        "Ignite Your Social Presence with 1 Platform",
        "Clean Logo & Essential Graphic Design",
        "On-Demand Support",
      ],
    },
    {
      name: "Standard Package",
      description: "Elevate Your Brand to New Heights",
      prices: {
        quarterly: 100,
        semiAnnual: 260,
        annual: 850,
      },
      features: [
        "Up to 5 Pages of Mobile-Friendly Website",
        "Comprehensive ON Page & OFF Page SEO",
        "Manage 2 Social Media Platforms with Engaging Posts",
        "Targeted Google Ads Setup",
        "Advanced Analytics & Strategy Sessions",
        "Design Upgrades with Creative Freedom",
      ],
    },
    {
      name: "Premium Package",
      description: "Dominate the Digital Space",
      prices: {
        quarterly: 200,
        semiAnnual: 520,
        annual: 1800,
      },
      features: [
        "Custom-Built, Fully Optimized Website with Advanced Features",
        "Comprehensive SEO Strategy for Top Rankings",
        "Social Media Mastery with Premium Content & Ads",
        "Full Google Ads Management with Strategic Retargeting",
        "Complete Brand Makeover",
        "24/7 Support with Your Dedicated Account Manager",
      ],
    },
  ];

  const [timeframe, setTimeframe] = useState("quarterly");

  // Handle timeframe change
  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <div className="my-auto">
      {/* Welcome wrapper */}
      <div className="bg-black text-white py-16 lg:py-44 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-5xl text-center font-bold">
              Explore Our Packages
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>

      <div className="w-full h-[30vh]">
        <div className="flex justify-center">
          <p className="w-[50vw] font-semibold text-xl leading-snug mt-4">
            At Xsuite Digital, we offer a range of carefully curated packages
            designed to meet your unique needs and preferences. Whether
            you&apos;re looking for comprehensive solutions or targeted
            services, we have something for everyone. Here&apos;s a brief
            overview of our offerings:
          </p>
        </div>
      </div>

      {/* Timeframe selection */}
      <div className="flex justify-center items-center mb-8">
        <label htmlFor="timeframe" className="mr-3 text-lg font-semibold">
          Select Timeframe:
        </label>
        <select
          id="timeframe"
          value={timeframe}
          onChange={handleTimeframeChange}
          className="p-2 border border-gray-300 rounded focus:outline-none"
        >
          <option value="quarterly">Quarterly</option>
          <option value="semiAnnual">Semi-Annual</option>
          <option value="annual">Annual</option>
        </select>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 px-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {packagesData.map((pkg, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl  rounded-lg p-6 flex flex-col items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">{pkg.name}</h2>
              <p className="mb-4">{pkg.description}</p>

              {pkg.features && (
                <ul className="text-left list-disc list-outside mt-4 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <motion.div
              className="mt-auto"
              key={timeframe} // key ensures re-rendering on timeframe change
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-3xl font-bold text-orange-500 mb-4">
                ${pkg.prices[timeframe]}
              </p>
              <p className="text-sm text-gray-500">Billed {timeframe}</p>

              <div className="mt-6">
                <Link
                  to="/Contact"
                  className="hover:bg-orange-500 hover:text-black text-white py-2 px-4 rounded bg-[#373737] transition ease-in duration-200"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <FAQs />
    </div>
  );
};

export default PackageDetails;
