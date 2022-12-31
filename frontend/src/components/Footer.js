import { Box, Typography, IconButton, Link } from "@mui/material";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import Images from "../assets/Images";

const Footer = () => {
  return (
    <Box borderTop="2px solid #629919">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        padding="15px"
        gap="30px"
      >
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="400px"
          gap="10px"
          sx={{
            "& > div": {
              display: "flex",
              gap: "3px",
              fontSize: "14px",
            },
            "& > div > span": {
              fontWeight: "bold",
              textAlign: "center",
            },
            "& p": {
              fontSize: "14px",
            },
          }}
        >
          <Typography
            variant="h5"
            fontSize={16}
            display="flex"
            flexWrap="wrap"
            color="#629919"
            fontWeight="bold"
          >
            BAN CHỈ ĐẠO TRUNG ƯƠNG CHƯƠNG TRÌNH MỤC TIÊU QUỐC GIA XÂY DỰNG NÔNG
            THÔN MỚI GIAI ĐOẠN 2016-2020
          </Typography>
          <Typography
            variant="h6"
            fontSize={14}
            color="#629919"
            fontWeight="bold"
          >
            VĂN PHÒNG ĐIỀU PHỐI NÔNG THÔN MỚI TRUNG ƯƠNG
          </Typography>
          <Box>
            <Typography variant="span">Địa chỉ:</Typography>
            <Typography>Số 2, Ngọc Hà, Ba Đình, Hà Nội</Typography>
          </Box>
          <Box>
            <Typography variant="span">Số Điện thoại:</Typography>
            <Typography>(84-24) 38438617</Typography>
          </Box>
          <Box>
            <Typography variant="span">Fax:</Typography>
            <Typography>(84-24) 37343597</Typography>
          </Box>
          <Box>
            <Typography variant="span">Website:</Typography>
            <Typography>
              http://nongthonmoi.gov.vn, http://ocop.gov.vn
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ "& img": { height: "70px" } }}
          pl={5}
          display="flex"
          flexDirection="column"
          gap="10px"
        >
          <img src={Images.brand} alt="Brand" />
          <Box
            sx={{
              "& button": {
                padding: "10px",
                color: "#fff",
                background: "#629919",
                border: "1px solid #629919",
              },
              "& button:hover": {
                color: "#629919",
              },
            }}
            display="flex"
            justifyContent="flex-end"
            gap="5px"
          >
            <Link href="https://www.facebook.com">
              <IconButton>
                <FacebookOutlinedIcon />
              </IconButton>
            </Link>
            <Link href="https://www.twitter.com">
              <IconButton>
                <TwitterIcon />
              </IconButton>
            </Link>
            <Link href="https://www.youtube.com/">
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </Link>
            <Link href="https://www.instagram.com/">
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            "& iframe": {
              height: "250px",
            },
          }}
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.857661248065!2d105.82843501540245!3d21.038380592824648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba73533d959%3A0xcd1d5f2dd782bb55!2zMiBOZ-G7jWMgSMOgLCBOZ-G7jWMgSOG7kywgQmEgxJDDrG5oLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1623983250964!5m2!1svi!2s"></iframe>
        </Box>
      </Box>
      <Box
        padding="20px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#629919"
      >
        <Typography fontSize={14} fontWeight={600} color="#fff">
          Based on Master BCSI
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
