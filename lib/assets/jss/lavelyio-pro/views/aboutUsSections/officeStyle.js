import { title, description, mrAuto, mlAuto } from "assets/jss/lavelyio-pro.js";
import imagesStyles from "assets/jss/lavelyio-pro/imagesStyles.js";

const imgRaised = imagesStyles.imgRaised;
const rounded = imagesStyles.imgRounded;
const imgFluid = imagesStyles.imgFluid;

const servicesStyle = {
  title,
  description,
  mrAuto,
  mlAuto,
  textCenter: {
    textAlign: "center!important",
  },
  office: {
    "& img": {
      margin: "20px 0px",
    },
  },
  imgRaised,
  rounded,
  imgFluid,
};

export default servicesStyle;
