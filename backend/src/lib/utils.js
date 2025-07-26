import jwt from "jsonwebtoken"

export const generatetoken = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET,{
		expiresIn:"7d",  // after 7d it will going to expire and user need to login
	});

	res.cookie("jwt",token,{
		maxAge : 7*24*60*60*1000, //d ->MS
		httpOnly: true, //prevent XSS attacks cross-site scripting
		sameSite:"strict", //CSRF attackd cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});

	return token;
}
