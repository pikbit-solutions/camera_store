import { initializeApp } from 'firebase/app';
import { getStorage, ref} from 'firebase/storage';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FB_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FB_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_FB_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FB_STG_BUCK}`,
  messagingSenderId: `${process.env.REACT_APP_FB_MSG_SEND_ID}`,
  appId: `${process.env.REACT_APP_FB_APP_ID}`
};

const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);

export const productImageRef = ref(storage, 'product_images');
export const reviewsRef = ref(storage, 'reviews');
export const galleryRef = ref(storage, 'gallery');

