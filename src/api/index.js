import axios from "axios";

const API = axios.create({
  baseURL: "http://41.128.217.181:10083/api/api",
  // baseURL: "http://41.128.217.181:10089/api", //41.128.217.182:10086/api",
  //41.128.217.182:10086/api",
  headers: {
    "Content-type": "application/json",
  },
});

// Homepage

// Home News
export const fetchHomeNews = () =>
  API.get("/NewsAPI/GetHomePageNews?requiredItems=5");
// Home Events
export const fetchHomeEvents = (month) =>
  API.get(
    `/EventAPI/GetHomePageEvents?monthNumber=${parseInt(month)}&rquiredItems=3`
  );
// Home Document Libaray
export const fetchHomeDocumentLibaray = () =>
  API.get("/DocumentLibraryAPI/GetHomePageLatestRealeses");
// Home Training
export const fetchHomeTraining = () =>
  API.get("/TrainingCourseAPI/GetHomePageTraings?requiredItems=3");

export const fetchHomeStatisticNumbers = () =>
  API.get("/StatisticNumbersAPI/StatisticNumbers");

export const fetchHomeInfographs = () =>
  API.get("/DocumentLibraryAPI/GetHomePageInfographs?requiredItems=4");

export const fetchHomePhotoAlbum = () =>
  API.get("/MediaAPI/GetHomePagePhotos?requiredItem=8");

export const fetchHomeVideoLibrary = () =>
  API.get("/MediaAPI/GetHomePageAllVedios?requiredItem=5");

export const fetchHomePartner = () =>
  API.get("/BusinessPartnersAPI/GetHomePagePartners?requiredItems=20");

export const addComment = (data) => API.post("/CommentAPI/AddComment", data);

// Medai corner
// News
export const fetchNews = (pageNumber, keywords, pageSize) =>
  API.post(`/NewsAPI/Search/${pageNumber}/${pageSize}`, keywords);

export const newsResultCount = (keywords) =>
  API.post(`/NewsAPI/GetResultCount`, keywords);

export const fetchNewsItem = (id) => API.get(`/NewsAPI/GetById?id=${id}`);

// Photo Album
export const fetchPhotoAlbum = (pageNumber, keywords, pageSize) =>
  API.post(`/MediaAPI/SearchPhoto/${pageNumber}/${pageSize}`, keywords);

export const photoAlbumResultCount = (keywords) =>
  API.post(`/MediaAPI/GetResultCountPhoto`, keywords);

export const fetchPhotoAlbumItem = (id) =>
  API.get(`/MediaAPI/GetByIdPhoto?id=${id}`);

// Video Libreary
export const fetchVideoLibrary = (pageNumber, keywords, pageSize) =>
  API.post(`/MediaAPI/SearchVedio/${pageNumber}/${pageSize}`, keywords);

export const videoLibraryResultCount = (keywords) =>
  API.post(`/MediaAPI/GetResultCountVideo`, keywords);

export const fetchVideoLibraryItem = (id) =>
  API.get(`/MediaAPI/GetByIdVedio?id=${id}`);

// Events
export const fetchEvents = (pageNumber, keywords, pageSize) =>
  API.post(`/EventAPI/Search/${pageNumber}/${pageSize}`, keywords);

export const eventsResultCount = (keywords) =>
  API.post(`/EventAPI/GetResultCount`, keywords);

export const fetchEventItem = (id) => API.get(`/EventAPI/GetById?id=${id}`);

// Cousrses
export const fetchCourses = (pageNumber, keywords, pageSize) =>
  API.post(`/TrainingCourseAPI/Search/${pageNumber}/${pageSize}`, keywords);

export const coursesResultCount = (keywords) =>
  API.post(`/TrainingCourseAPI/GetResultCount`, keywords);

export const fetchCourseItem = (id) =>
  API.get(`/TrainingCourseAPI/GetById?id=${id}`);

// Document Library
export const fetchDocumentLibrary = (pageNumber, keywords, pageSize) =>
  API.post(`/DocumentLibraryAPI/Search/${pageNumber}/${pageSize}`, keywords);

export const documentLibraryResultCount = (keywords) =>
  API.post(`/DocumentLibraryAPI/GetResultCount`, keywords);

export const fetchDocumentLibraryItem = (id) =>
  API.get(`/DocumentLibraryAPI/GetById?id=${id}`);

// Static Content
export const fetchStaticContent = (id) => API.get(`/StaticContentAPI/${id}`);

// previous Managers
export const fetchPreviousManagers = (pageNumber, keywords, pageSize) =>
  API.post(
    `/MemberAPI/SearchPreviousManager/${pageNumber}/${pageSize}`,
    keywords
  );

export const previousManagersResultCount = (keywords) =>
  API.post(`/MemberAPI/GetResultCountPreviousManager`, keywords);

// Members
export const fetchMembers = (pageNumber, keywords, pageSize) =>
  API.post(`/MemberAPI/SearchMember/${pageNumber}/${pageSize}`, keywords);

export const membersResultCount = (keywords) =>
  API.post(`/MemberAPI/GetMemberResultCount`, keywords);

// Org Chart

export const fetchOrgChart = () =>
  API.get("/DepartmentAPI/GetDepartmentsHierarcy");
