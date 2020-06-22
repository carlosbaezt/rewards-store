import axios from "axios";

const instance = axios.create({
	baseURL: "https://aerolab-challenge.now.sh/",
});

instance.defaults.headers.common["Authorization"] =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjOWIxNmU0OTYwMDAwNjBkMDBhNjgiLCJpYXQiOjE1MTA3NzU1NzR9.3RXwYx0ehfQKYZfZ2XRcDr-jbSwmZI50T1l921fbU4E";

export default instance;
