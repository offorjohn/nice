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

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: "rgba(0, 0, 0, 0.85)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    color: "#40a9ff",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#1890ff",
    fontWeight: theme.typography.fontWeightMedium,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#fff",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

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
  }, [loading, currentIndex]); // Add currentIndex as a dependency

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
                              <img
                                src={item.mediaSrc}
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
                  From critical skills to technical topics, We support your
                  professional development.
                </h1>
              </div>

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
                    bgcolor: "#fff",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on larger screens
                    flexWrap: "wrap", // Ensures wrapping on smaller screens
                    gap: 2, // Adds spacing between elements
                  }}
                >
                  {/* Tab 1 */}
                  <Box sx={{ flex: 1 }}>
                    <AntTabs
                      sx={{
                        textAlign: "center",
                      }}
                      onClick={() => handleTabClick(0)} // Toggle visibility of Tab 1
                    >
                      <AntTab label="Tab 1" />
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
                          <SvgIcon sx={{ fontSize: 24, color: "black" }}>
                            <path d="M7 10l5 5 5-5z" />
                          </SvgIcon>
                        </Box>
                      )}
                    </AntTabs>
                    <Box
                      sx={{
                        width: "10%", // Full width of the container
                        height: "2px", // Thickness of the line
                        marginTop: "4px", // Space between the tab and the line
                      }}
                    />

                    {value === 0 && isTabOpen && (
                      <Box sx={{ bgcolor: "#f5f5f5", p: 3 }}>
                        Content for Tab 1
                      </Box>
                    )}
                  </Box>

                  {/* Tab 2 */}
                  <Box sx={{ flex: 1 }}>
                    <AntTabs
                      sx={{
                        textAlign: "center",
                      }}
                      onClick={() => handleTabClick(1)} // Toggle visibility of Tab 1
                    >
                      <AntTab label="Tab 2" />
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
                          <SvgIcon sx={{ fontSize: 24, color: "black" }}>
                            <path d="M7 10l5 5 5-5z" />
                          </SvgIcon>
                        </Box>
                      )}
                    </AntTabs>


                    {value === 1 && isTabOpen && (
                      <Box sx={{ bgcolor: "#f5f5f5", p: 3 }}>
                        Content for Tab 2
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Carousel>
            testing
          </div>
        )}
        footer 1
      </div>
      footer 2
    </>
  );
};

export default HomePage;
