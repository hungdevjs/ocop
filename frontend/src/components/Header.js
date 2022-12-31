import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Box, Link, Typography, Paper, IconButton } from "@mui/material";
import { MenuList, MenuItem, ListItemText, InputBase } from "@mui/material";

import Images from "../assets/Images";

const navigations = [
  { name: "TRANG CHỦ", path: "/" },
  {
    name: "SẢN PHẨM",
    path: "/products",
    groups: [
      { text: "THỰC PHẨM", path: "/" },
      { text: "ĐỒ UỐNG", path: "/" },
      { text: "THẢO DƯỢC", path: "/" },
    ],
  },
];

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (path) =>
    pathname === path || (path !== "/" && pathname.includes(path));

  const [contactOn, setContactOn] = useState(false);
  const [searchingOn, setSearchingOn] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [accountOn, setAccountOn] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="center"
      padding="8px 14%"
      sx={{ borderBottom: "1px solid #ccc" }}
    >
      <Box width="100%" display="flex" flexWrap="wrap" gap="10px">
        <Box
          width="100%"
          display="flex"
          justifyContent="flex-end"
          gap="3px"
          sx={{ "& img": { cursor: "pointer" } }}
        >
          <img width={30} src={Images.englishIcon} alt="Language" />
          <img width={30} src={Images.vietnameseIcon} alt="Language" />
        </Box>
        <Box width="100%" display="flex" alignItems="center">
          <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            <img src={Images.brand} alt="Brand" width={250} />
          </Box>
          <Box display="flex" padding="0 50px">
            {navigations.map((child) => (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                position="relative"
                sx={{
                  "&:hover > div": {
                    display: "block !important",
                  },
                }}
                onClick={() => navigate(child.path)}
              >
                <Typography
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={14}
                  fontWeight="bold"
                  p={2}
                  sx={{
                    color: isActive(child.path) ? "#f68b1f" : "#629919",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#f68b1f",
                      transition: "all ease .3s",
                    },
                  }}
                >
                  {child.name}{" "}
                  {child.groups ? <ArrowDropDownIcon fontSize="small" /> : null}
                </Typography>
                {child.groups ? (
                  <Paper
                    sx={{
                      position: "absolute",
                      top: "50px",
                      left: "0",
                      borderRadius: "1px",
                      display: "none",
                    }}
                  >
                    <MenuList
                      dense
                      sx={{
                        padding: "0 !important",
                      }}
                    >
                      <Box
                        position="absolute"
                        top="-20px"
                        left="2px"
                        zIndex={1}
                        color="#629919"
                      >
                        <ArrowDropUpIcon fontSize="large" />
                      </Box>
                      {child.groups.map((group) => (
                        <MenuItem
                          sx={{
                            padding: "8px 15px",
                            background: "#629919",
                            color: "#fff",
                            "&:hover": {
                              background: "#f68b1f",
                            },
                          }}
                        >
                          <ListItemText>{group.text}</ListItemText>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Paper>
                ) : null}
              </Box>
            ))}
          </Box>
          <Box
            p={1}
            display="flex"
            alignItems="center"
            flexGrow="2"
            justifyContent="flex-end"
            gap={2}
            sx={{
              "& svg": {
                cursor: "pointer",
              },
              "& > div": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              },
              "& > div > div": {
                minWidth: "150px",
                position: "absolute",
                top: "50px",
                right: "0",
                borderRadius: "1px",
              },
            }}
          >
            <Box>
              <IconButton onClick={() => setContactOn(!contactOn)}>
                <MoreVertIcon />
              </IconButton>
              <Paper sx={{ display: contactOn ? "block" : "none" }}>
                <MenuList dense sx={{ padding: "0" }}>
                  <MenuItem>
                    <ListItemText>Liên hệ</ListItemText>
                  </MenuItem>
                </MenuList>
              </Paper>
            </Box>
            <Box color="#629919">
              <IconButton onClick={() => setSearchingOn(!searchingOn)}>
                <SearchIcon />
              </IconButton>
              <Paper
                sx={{
                  display: searchingOn ? "block" : "none",
                  right: "-15px !important",
                }}
              >
                <MenuList dense sx={{ padding: "0" }}>
                  <MenuItem>
                    <InputBase
                      sx={{ minWidth: "150px" }}
                      placeholder="Tìm kiếm"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <IconButton type="button" sx={{ p: "2px" }}>
                      <SearchIcon />
                    </IconButton>
                  </MenuItem>
                </MenuList>
              </Paper>
            </Box>
            <Box color="#629919">
              <IconButton onClick={() => setAccountOn(!accountOn)}>
                <AccountCircleIcon />
              </IconButton>
              <Paper sx={{ display: accountOn ? "block" : "none" }}>
                <MenuList dense sx={{ padding: "0" }}>
                  <MenuItem>
                    <ListItemText>Đăng nhập</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Đăng kí</ListItemText>
                  </MenuItem>
                </MenuList>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
