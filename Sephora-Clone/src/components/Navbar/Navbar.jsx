import { AnnouncementBanner } from "./navbarComponent/AnnouncementBanner";
import { Box } from "@chakra-ui/react";
import { MainNavbar } from "./navbarComponent/MainNavbar";
import { SecondaryNavbar } from "./navbarComponent/SecondaryNavbar";

export const Navbar = () => {
  return (
    <Box>
      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Main Navbar */}
      <MainNavbar />

      {/* Secondary Navbar */}
      <SecondaryNavbar />
    </Box>
  );
};
