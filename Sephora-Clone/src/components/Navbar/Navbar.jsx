import { AnnouncementBanner } from "./AnnouncementBanner/AnnouncementBanner";
import { Box } from "@chakra-ui/react";
import { MainNavbar } from "./MainNavbar/MainNavbar";
import { SecondaryNavbar } from "./SecondaryNavbar/SecondaryNavbar";

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
