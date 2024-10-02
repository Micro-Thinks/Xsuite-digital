import React from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

const Team = () => {

const profiles = [
    {
      imgSrc: "https://readymadeui.com/team-1.webp",
      name: "John Doe",
      position: "Software Engineer",
      description: "Eiusmod commodo aliquip laboris qui anim non voluptate consectetur."
    },
    {
      imgSrc: "https://readymadeui.com/team-2.webp",
      name: "Mark Adair",
      position: "Software Engineer",
      description: "Eiusmod commodo aliquip laboris qui anim non voluptate consectetur."
    },
    {
      imgSrc: "https://readymadeui.com/team-3.webp",
      name: "Simon Konecki",
      position: "Web Designer",
      description: "Eiusmod commodo aliquip laboris qui anim non voluptate consectetur."
    }
  ]
    return (
    <div className="font-[sans-serif] my-4">
      <div className="max-w-5xl max-lg:max-w-2xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-gray-800 text-4xl font-extrabold">Meet our team</h2>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center mt-12">
          {profiles.map((teamMember, index) => (
            <AnimatePresence mode='wait'>
                
            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
              key={index} 
              className="group border rounded-md overflow-hidden max-md:max-w-[300px] relative"
              whileHover={{ scale: 1.05 }}>

              {/* Image */}
              <img 
                src={teamMember.imgSrc} 
                alt={teamMember.name} 
                className="w-full h-60 object-contain object-top bg-gray-200" 
              />

              {/* Hover icons */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex space-x-4">
                  <Link>
                    <Icon
                      icon="uit:facebook-f"
                      className="text-white h-8 w-8 rounded-full p-1 hover:text-orange-500"
                    />
                  </Link>
                  <Link to="https://www.linkedin.com/company/xsuite-digital/about/" target="_blank">
                    <Icon
                      icon="basil:linkedin-outline"
                      className="text-white h-8 w-8 rounded-full p-1 hover:text-orange-500"
                    />
                  </Link>
                  <Link to="https://www.instagram.com/xsuite.digital/" target="_blank">
                    <Icon
                      icon="proicons:instagram"
                      className="text-white h-8 w-8 rounded-full p-1 hover:text-orange-500"
                    />
                  </Link>
                </div>
              </div>

              {/* Text */}
              <div className="p-4">
                <h4 className="text-gray-800 text-base font-bold">{teamMember.name}</h4>
                <p className="text-gray-600 text-xs mt-1">{teamMember.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed mt-4">{teamMember.description}</p>
              </div>
            </motion.div>
            </AnimatePresence>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;