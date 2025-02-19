export const LOGO = 'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const USER_AVATAR = '';

export const API_OPTIONS = {
    method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API}`
  }
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

export const BG_IMAGE_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg"

export const SUPPORTED_LANGUAGES =[
  {identifier:"en",name:'English'},
  {identifier:"hindi",name:'Hindi'},
  {identifier:"spanish",name:'Spanish'},
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY