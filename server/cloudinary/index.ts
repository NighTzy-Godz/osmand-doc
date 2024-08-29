import { v2 as cloudinary, ConfigOptions } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY as string;
const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME as string;
const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET as string;

cloudinary.config({
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
  cloud_name: CLOUDINARY_NAME,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "mhic_territory",
    allowed_formats: ["jpeg", "jpg", "png"],
  } as any,
});

export { storage, cloudinary };
