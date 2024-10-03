import { AnnouncementBanner } from "./navbarComponent/AnnouncementBanner";
import { Box } from "@chakra-ui/react";
import { MainNavbar } from "./navbarComponent/MainNavbar";

export const Navbar = () => {
  return (
    <Box>
      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Main Navbar */}
      <MainNavbar />
    </Box>
  );
};
