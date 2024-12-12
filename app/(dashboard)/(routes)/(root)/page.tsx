"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Skeleton for loading placeholders
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"; // Carousel components for sliding content
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";
import { NavbarRoutes } from "@/components/NavbarRoutes";
import { Card, CardContent } from "@/components/ui/card"; // Card components for styling carousel items
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for carousel navigation
import Typography from "@mui/material/Typography/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const AntTabs = styled(Tabs)({
  position: "relative", // Ensure proper positioning for pseudo-element
  "&::after": {
    content: '""', // Add a pseudo-element for the gradient border
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "2px", // Thickness of the bottom border
    background: "linear-gradient(to right, #7c3aed, #ec4899, #ef4444)", // Gradient
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff", // Active indicator
  },
});



const HomePage = () => {
  const [loading, setLoading] = React.useState(true); // State to manage loading status
  const [currentIndex, setCurrentIndex] = React.useState(0); // State to track the current carousel item
  const [value, setValue] = React.useState(0);
  const [isTabOpen, setIsTabOpen] = React.useState(true); // Tracks whether the content is visible

  // State to track if the screen is mobile-sized
  const [isMobile, setIsMobile] = React.useState(false);

  const handleTabClick = (tabIndex: React.SetStateAction<number>) => {
    if (value === tabIndex && isTabOpen) {
      // If the same tab is clicked again, toggle visibility off
      setIsTabOpen(false);
      setValue(0);
    } else {
      // If a new tab is clicked, toggle visibility on and set active tab
      setIsTabOpen(true);
      setValue(tabIndex);
    }
  };

  const carouselItems = [
    {
      mediaSrc: "/video.mp4",

      type: "video", // Type of media (video or image)
      title: "Master the Art of Video Editing",
      description: "Learn how to edit videos like a pro.",
    },
    {
      mediaSrc: "/one.png", 
    

      type: "image", // Type of media (video or image)
      title: "Learn Web Development",
      description: "Learn Web Development",
    },
    {
      mediaSrc: "/tree.png",

      type: "image", // Type of media (video or image)

      title: "Create Stunning Graphics",
      description: "Create Stunning Graphics",
    },
    {
      mediaSrc: "/two.jpg",

      type: "image", // Type of media (video or image)
      title: "Photography Essentials",
      description: "Capture beautiful moments with your camera.",
    },
    {
      mediaSrc: "/ds.png",

      type: "image", // Type of media (video or image)
      title: "Learn Game Developement",
      description: "Learn Game Developement",
    },
  ];

  React.useEffect(() => {
    const loadingTimeout = setTimeout(() => setLoading(false), 2000); // Simulate data loading
    return () => clearTimeout(loadingTimeout); // Cleanup timeout
  }, []);

  React.useEffect(() => {
    if (!loading) {
      const interval = setInterval(
        () => {
          setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % carouselItems.length;
            return nextIndex;
          });
        },
        currentIndex === 0 ? 11000 : 5000
      ); // 11 seconds for the first carousel, 5 seconds for subsequent items

      return () => clearInterval(interval);
    }
  }, [loading, currentIndex, carouselItems.length]); // Add currentIndex as a dependency

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  // Check screen size when the component mounts or when the window resizes
  React.useEffect(() => {
    const handleResize = () => {
      // Set isMobile to true if screen width is 600px or less (smaller screens)
      setIsMobile(window.innerWidth <= 600);
    };

    // Initial check when component mounts
    handleResize();

    // Attach event listener to resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-yellow-350">
        <NavbarRoutes />
      </div>
      <div className="flex flex-col items-center    text-center">
        {/* Sticky Header */}
        {loading ? (
          <div className="space-y-6">
            {/* Hero Section */}
            <div className="relative flex flex-col md:flex-row md:space-x-20 space-y-1 md:space-y-5">
              {/* First Skeleton with Text */}
              <div className="relative flex flex-col md:flex-row md:space-x-20 space-y-1 md:space-y-5">
                {/* First Skeleton with Text */}
                <div className="relative mt-5">
                  {" "}
                  {/* Adjust the value as needed */}
                  <div className="space-y-5">
                    {" "}
                    {/* Wrap the whole section to add spacing */}
                    {/* First Skeleton */}
                    <Skeleton className="h-[230px] w-full md:w-[500px] rounded-lg" />
                    {/* Second Skeletons with Text */}
                    <div className="space-y-4">
                      {" "}
                      {/* Adjust the space-y to 4 or higher for better spacing */}
                      <Skeleton className="h-4 w-[350px]" />
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                  <span className="absolute inset-0 flex justify-center items-center text-white font-bold translate-y-[-20%]">
                    Just Live
                  </span>
                </div>
              </div>

              {/* Second Skeleton with Text */}
              <div className="  md:space-x-20relative">
                <Skeleton className="h-[350px] w-full md:w-[500px] rounded-lg" />
                <span className="absolute inset-0 flex justify-center items-center text-white font-bold">
                  Just Live
                </span>
              </div>
            </div>

            {/* Featured Courses */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Featured Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-[200px] w-full rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Additional Section */}
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>

            {/* Recommended Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Recommended for You</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-[200px] w-full rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-full max-w-[90%] md:max-w-[80%] min-h-screen overflow-hidden">
            {/* Carousel Section */}
            <Carousel className="relative w-full h-[900px] overflow-hidden ">
              <CarouselContent
                style={{
                  display: "flex",
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: "transform 0.5s ease",
                }}
              >
                {" "}
                {carouselItems.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="flex-shrink-0 w-full h-full relative "
                  >
                    {/* Slide Content */}
                    <div className="p-4 h-full">
                      <Card className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
                        <CardContent className="flex h-full items-center justify-center p-6">
                          {/* Image Section */}
                          {/* Conditional Rendering */}
                          {/* Conditional Rendering */}
                          {item.type === "video" ? (
                            <div className="relative w-full md:w-4/5 lg:w-3/4 h-[200px] md:h-[300px] lg:h-[350px] mx-auto">
                              <video
                                src={item.mediaSrc}
                                autoPlay
                                loop
                                muted
                                className="w-full h-full object-cover rounded-lg"
                              ></video>
                            </div>
                          ) : (
                            <div className="relative w-full md:w-4/5 lg:w-3/4 h-[200px] md:h-[300px] lg:h-[350px] mx-auto">
                              <Image
                                src={item.mediaSrc}

                                width={800} // Replace with desired width

                               height={500} // Replace with desired height
                                alt={item.title}
                                className="w-full h-full  rounded-lg"
                              />
                            </div>
                          )}
                          <h2 className="hidden md:block text-lg sm:text-xl md:text-2xl font-semibold p-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mt-9 mb-1 transform -translate-y-3">
                            {item.title}
                          </h2>
                        </CardContent>
                      </Card>
                    </div>

                    <span className="block lg:hidden left-5  text-lg sm:text-xl md:text-2xl font-semibold p-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg italic tracking-wide">
                      {item.description}
                    </span>

                    {/* Navigation Buttons */}
                    {index === currentIndex && (
                      <div className="absolute inset-0 flex items-center justify-between px-4">
                        <button
                          onClick={handlePrevious}
                          className="bg-gray-800 text-white p-3 rounded-full cursor-pointer hover:bg-gray-700 flex items-center justify-center"
                        >
                          <FaChevronLeft size={20} />
                        </button>
                        <button
                          onClick={handleNext}
                          className="bg-gray-800 text-white p-3 rounded-full cursor-pointer hover:bg-gray-700 flex items-center justify-center"
                        >
                          <FaChevronRight size={20} />
                        </button>
                      </div>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex flex-col lg:items-start lg:pl-12">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text p-4 rounded-lg mt-6 mb-4 tracking-wide shadow-lg italic">
                  Consolidate all the skills you need in one comprehensive
                  platform
                </h1>
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text p-4 rounded-lg mt-6 mb-4 tracking-wide shadow-lg italic">
                  From critical skills to technical topics, We really support your
                  professional developement.
                </h1>
              </div>

              {/* Tab 1 */}

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", md: "column" }, // Layout remains vertical for both cases
                }}
              >
                {/* Tab Navigation */}
                <Box
                  sx={{
                    bgcolor: "transparent",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on larger screens
                    flexWrap: "wrap", // Ensures wrapping on smaller screens
                    gap: 2, // Adds spacing between elements
                  }}
                >
                  <AntTabs
                    sx={{ textAlign: "center" }}
                    onClick={() => handleTabClick(0)}
                  >
                    <Tab
                      label="Tab 1.1"
                      sx={{ fontWeight: 900, color: "gray" }}
                    />

                    {/* Conditional render: Show the icon only on mobile */}
                    {isMobile && (
                      <Box
                        sx={{
                          position: "absolute",
                          right: 0,
                          top: "50%",
                          transform: "translateY(-50%)",
                          paddingRight: 2,
                        }}
                      >
                        <SvgIcon sx={{ fontSize: 24 }}>
                          <defs>
                            <linearGradient
                              id="gradient1"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                style={{ stopColor: "#a855f7", stopOpacity: 1 }}
                              />
                              <stop
                                offset="50%"
                                style={{ stopColor: "#ec4899", stopOpacity: 1 }}
                              />
                              <stop
                                offset="100%"
                                style={{ stopColor: "#f43f5e", stopOpacity: 1 }}
                              />
                            </linearGradient>
                          </defs>
                          <path d="M7 10l5 5 5-5z" fill="url(#gradient1)" />
                        </SvgIcon>
                      </Box>
                    )}
                  </AntTabs>
                  
              <Box
                sx={{
                  width: "100%", // Full width of the container
                  overflow: "hidden", // Ensure content doesn't overflow
                  display: {
                    xs: "block", // Visible on smaller screens
                    sm: "none", // Visible on smaller and medium screens
                    md: "none", // Hidden on larger screens
                  },
                }}
              >
                {/* Conditionally render content */}
                {value === 0 && isTabOpen && (
                  <Swiper
                    spaceBetween={10} // Space between slides
                    slidesPerView={2} // Number of slides visible at a time
                    breakpoints={{
                      640: {
                        slidesPerView: 1, // Single column on smaller screens
                        spaceBetween: 10,
                      },
                      1024: {
                        slidesPerView: 2, // Two slides visible on larger screens
                        spaceBetween: 10,
                      },
                    }}
                    style={{
                      width: "100%", // Full width of the container
                      display: "flex", // Use flex for arranging items
                    }}
                  >
                    {/* Box 1 */}
                    <SwiperSlide>
                      {/* Box 1 */}
                      <Box
                        sx={{
                          width: {
                          xs: "100%", // Full width for smaller screens
                          sm: "80%", // Reduced width for larger screens
                          md: "50%", // Even smaller width for medium and larger screens
                        },
                          mt: "7%",
                          padding: "0.5rem", // Consistent padding to ensure background wraps the content
                          borderRadius: "9.6rem", // Rounded shape
                          display: {
                            xs: "block", // Visible on smaller screens
                            sm: "none", // Visible on smaller and medium screens
                            md: "none", // Hidden on larger screens
                          },
                          backgroundColor: "#f5f5f5", // Background color
                        }}
                      >
                        <Typography
                          component="strong"
                          sx={{
                            display: "block", // Ensure it is on its own line
                            fontWeight: "bold", // Bold text
                            mt: {
                              xs: "4%", // Margin-top for smaller screens
                              sm: "1%", // Slightly smaller margin-top for larger screens
                            },
                            fontSize: "1.2rem", // Adjust font size as needed
                          }}
                        >
                          Content for
                        </Typography>

                        {/* Text underneath */}
                        <Typography
                          sx={{
                            display: "block", // Place this text on a new line
                            fontSize: "1rem", // Adjust font size for the text
                            mt: 0.5, // Add a small gap between "Content for" and this text
                            color: "gray", // Optional: text color
                          }}
                        >
                          This is the text underneath.
                        </Typography>
                      </Box>
                    </SwiperSlide>

                    {/* Box 2 */}
                    <SwiperSlide>
                      <Box
                        sx={{
                          
                          width: {
                          xs: "100%", // Full width for smaller screens
                          sm: "80%", // Reduced width for larger screens
                          md: "50%", // Even smaller width for medium and larger screens
                        },
                          mt: "7%",
                          padding: "0.5rem", // Consistent padding to ensure background wraps the content
                          borderRadius: "9.6rem", // Rounded shape
                          backgroundColor: "#f5f5f5", // Background color
                        }}
                      >
                        <Typography
                          component="strong"
                          sx={{
                            display: "block", // Ensure it is on its own line
                            fontWeight: "bold", // Bold text
                            mt: {
                              xs: "4%", // Margin-top for smaller screens
                              sm: "1%", // Slightly smaller margin-top for larger screens
                            },
                            fontSize: "1.2rem", // Adjust font size as needed
                          }}
                        >
                          Content for
                        </Typography>

                        {/* Text underneath */}
                        <Typography
                          sx={{
                            display: "block", // Place this text on a new line
                            fontSize: "1rem", // Adjust font size for the text
                            mt: 0.5, // Add a small gap between "Content for" and this text
                            color: "gray", // Optional: text color
                          }}
                        >
                          This is the text underneath.
                        </Typography>
                      </Box>
                    </SwiperSlide>

                    {/* Box 3 */}
                    <SwiperSlide>
                      <Box
                        sx={{
                          width: {
                          xs: "100%", // Full width for smaller screens
                          sm: "80%", // Reduced width for larger screens
                          md: "50%", // Even smaller width for medium and larger screens
                        },
                          mt: "7%",
                          padding: "0.5rem", // Consistent padding to ensure background wraps the content
                          borderRadius: "9.6rem", // Rounded shape
                          backgroundColor: "#f5f5f5", // Background color
                        }}
                      >
                        <Typography
                          component="strong"
                          sx={{
                            display: "block", // Ensure it is on its own line
                            fontWeight: "bold", // Bold text
                            mt: "4%",
                            fontSize: "1.2rem", // Adjust font size as needed
                          }}
                        >
                          Content for
                        </Typography>

                        {/* Text underneath */}
                        <Typography
                          sx={{
                            display: "block", // Place this text on a new line
                            fontSize: "1rem", // Adjust font size for the text
                            mt: 0.5, // Add a small gap between "Content for" and this text
                            color: "gray", // Optional: text color
                          }}
                        >
                          This is the text underneath.
                        </Typography>
                      </Box>
                    </SwiperSlide>
                  </Swiper>
                )}
              </Box>

                  <AntTabs
                    sx={{ textAlign: "center" }}
                    onClick={() => handleTabClick(1)}
                  >
                    <Tab
                      label="Tab 2.1"
                      sx={{ fontWeight: 900, color: "gray" }}
                    />

                    {/* Conditional render: Show the icon only on mobile */}
                    {isMobile && (
                      <Box
                        sx={{
                          position: "absolute",
                          right: 0,
                          top: "50%",
                          transform: "translateY(-50%)",
                          paddingRight: 2,
                        }}
                      >
                        <SvgIcon sx={{ fontSize: 24 }}>
                          <defs>
                            <linearGradient
                              id="gradient1"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                style={{ stopColor: "#a855f7", stopOpacity: 1 }}
                              />
                              <stop
                                offset="50%"
                                style={{ stopColor: "#ec4899", stopOpacity: 1 }}
                              />
                              <stop
                                offset="100%"
                                style={{ stopColor: "#f43f5e", stopOpacity: 1 }}
                              />
                            </linearGradient>
                          </defs>
                          <path d="M7 10l5 5 5-5z" fill="url(#gradient1)" />
                        </SvgIcon>
                      </Box>
                    )}
                  </AntTabs>
                </Box>

              </Box>

              <Box
                sx={{
                  width: "100%", // Full width of the container
                  overflow: "hidden", // Ensure content doesn't overflow
                }}
              >
                {/* Conditionally render content */}
                {value === 0 && isTabOpen && (
                  <Swiper
                    spaceBetween={10} // Space between slides
                    slidesPerView={2} // Number of slides visible at a time
                    breakpoints={{
                      640: {
                        slidesPerView: 1, // Single column on smaller screens
                        spaceBetween: 10,
                      },
                      1024: {
                        slidesPerView: 2, // Two slides visible on larger screens
                        spaceBetween: 10,
                      },
                    }}
                    style={{
                      width: "100%", // Full width of the container
                      display: "flex", // Use flex for arranging items
                    }}
                  >
                    {/* Box 1 */}
                    <SwiperSlide>
                      {/* Box 1 */}
                     
                    </SwiperSlide>

                    {/* Box 2 */}
                    <SwiperSlide>
                      <Box
                        sx={{
                          
                          width: {
                          xs: "100%", // Full width for smaller screens
                          sm: "80%", // Reduced width for larger screens
                          md: "50%", // Even smaller width for medium and larger screens
                        },
                          mt: "7%",
                          padding: "0.5rem", // Consistent padding to ensure background wraps the content
                          borderRadius: "9.6rem", // Rounded shape
                          backgroundColor: "#f5f5f5", // Background color
                        }}
                      >
                        <Typography
                          component="strong"
                          sx={{
                            display: "block", // Ensure it is on its own line
                            fontWeight: "bold", // Bold text
                            mt: {
                              xs: "4%", // Margin-top for smaller screens
                              sm: "1%", // Slightly smaller margin-top for larger screens
                            },
                            fontSize: "1.2rem", // Adjust font size as needed
                          }}
                        >
                          Content for
                        </Typography>

                        {/* Text underneath */}
                        <Typography
                          sx={{
                            display: "block", // Place this text on a new line
                            fontSize: "1rem", // Adjust font size for the text
                            mt: 0.5, // Add a small gap between "Content for" and this text
                            color: "gray", // Optional: text color
                          }}
                        >
                          This is the text underneath.
                        </Typography>
                      </Box>
                    </SwiperSlide>

                    {/* Box 3 */}
                    <SwiperSlide>
                      <Box
                        sx={{
                          width: {
                          xs: "100%", // Full width for smaller screens
                          sm: "80%", // Reduced width for larger screens
                          md: "50%", // Even smaller width for medium and larger screens
                        },
                          mt: "7%",
                          padding: "0.5rem", // Consistent padding to ensure background wraps the content
                          borderRadius: "9.6rem", // Rounded shape
                          backgroundColor: "#f5f5f5", // Background color
                        }}
                      >
                        <Typography
                          component="strong"
                          sx={{
                            display: "block", // Ensure it is on its own line
                            fontWeight: "bold", // Bold text
                            mt: "4%",
                            fontSize: "1.2rem", // Adjust font size as needed
                          }}
                        >
                          Content for
                        </Typography>

                        {/* Text underneath */}
                        <Typography
                          sx={{
                            display: "block", // Place this text on a new line
                            fontSize: "1rem", // Adjust font size for the text
                            mt: 0.5, // Add a small gap between "Content for" and this text
                            color: "gray", // Optional: text color
                          }}
                        >
                          This is the text underneath.
                        </Typography>
                      </Box>
                    </SwiperSlide>
                  </Swiper>
                )}
              </Box>

              {/* Tab 2 */}

              <Box
                sx={{
                  width: "100%", // Full width of the container
                  overflow: "hidden", // Ensure content doesn't overflow
                }}
              >
                {/* Conditionally render content */}
                {value === 1 && isTabOpen && (
                  <Swiper
                    spaceBetween={10} // Space between slides
                    slidesPerView={2} // Number of slides visible at a time
                    breakpoints={{
                      640: {
                        slidesPerView: 1, // Single column on smaller screens
                        spaceBetween: 10,
                      },
                      1024: {
                        slidesPerView: 2, // Two slides visible on larger screens
                        spaceBetween: 20,
                      },
                    }}
                    style={{
                      width: "100%", // Full width of the container
                      display: "flex", // Use flex for arranging items
                    }}
                  >
                    {/* Box 1 */}
                    <SwiperSlide>
                      {/* Box 1 */}
                      <Box
                        sx={{
                          width: {
                          xs: "100%", // Full width for smaller screens
                          sm: "80%", // Reduced width for larger screens
                          md: "50%", // Even smaller width for medium and larger screens
                        },
                          mt: "7%",
                          padding: "0.5rem", // Consistent padding to ensure background wraps the content
                          borderRadius: "9.6rem", // Rounded shape
                          backgroundColor: "#f5f5f5", // Background color
                        }}
                      >
                        <Typography
                          component="strong"
                          sx={{
                            display: "block", // Ensure it is on its own line
                            fontWeight: "bold", // Bold text
                            mt: "4%",
                            fontSize: "1.2rem", // Adjust font size as needed
                          }}
                        >
                          Content
                        </Typography>

                        {/* Text underneath */}
                        <Typography
                          sx={{
                            display: "block", // Place this text on a new line
                            fontSize: "1rem", // Adjust font size for the text
                            mt: 0.5, // Add a small gap between "Content for" and this text
                            color: "gray", // Optional: text color
                          }}
                        >
                          This is the
                        </Typography>
                      </Box>
                    </SwiperSlide>

                    {/* Box 2 */}
                    <SwiperSlide>
                      <Box
                        sx={{
                          width: {
                          xs: "100%", // Full width for smaller screens
                          sm: "80%", // Reduced width for larger screens
                          md: "50%", // Even smaller width for medium and larger screens
                        },
                          mt: "7%",
                          padding: "0.5rem", // Consistent padding to ensure background wraps the content
                          borderRadius: "9.6rem", // Rounded shape
                          backgroundColor: "#f5f5f5", // Background color
                        }}
                      >
                        <Typography
                          component="strong"
                          sx={{
                            display: "block", // Ensure it is on its own line
                            fontWeight: "bold", // Bold text
                            mt: "4%",
                            fontSize: "1.2rem", // Adjust font size as needed
                          }}
                        >
                          Content for
                        </Typography>

                        {/* Text underneath */}
                        <Typography
                          sx={{
                            display: "block", // Place this text on a new line
                            fontSize: "1rem", // Adjust font size for the text
                            mt: 0.5, // Add a small gap between "Content for" and this text
                            color: "gray", // Optional: text color
                          }}
                        >
                          This is the text underneath
                        </Typography>
                      </Box>
                    </SwiperSlide>

                    {/* Box 3 */}
                    <SwiperSlide>
                      <Box
                        sx={{
                          width: {
                          xs: "100%", // Full width for smaller screens
                          sm: "80%", // Reduced width for larger screens
                          md: "50%", // Even smaller width for medium and larger screens
                        },
                          mt: "7%",
                          padding: "0.5rem", // Consistent padding to ensure background wraps the content
                          borderRadius: "9.6rem", // Rounded shape
                          backgroundColor: "#f5f5f5", // Background color
                        }}
                      >
                        <Typography
                          component="strong"
                          sx={{
                            display: "block", // Ensure it is on its own line
                            fontWeight: "bold", // Bold text
                            mt: "4%",
                            fontSize: "1.2rem", // Adjust font size as needed
                          }}
                        >
                          Content for
                        </Typography>

                        {/* Text underneath */}
                        <Typography
                          sx={{
                            display: "block", // Place this text on a new line
                            fontSize: "1rem", // Adjust font size for the text
                            mt: 0.5, // Add a small gap between "Content for" and this text
                            color: "gray", // Optional: text color
                          }}
                        >
                          This is the text underneath.
                        </Typography>
                      </Box>
                    </SwiperSlide>
                  </Swiper>
                )}
              </Box>

              
            </Carousel>
            testing
          </div>
        )}
        @Copyrig.. Offor...
      </div>
    </>
  );
};

export default HomePage;