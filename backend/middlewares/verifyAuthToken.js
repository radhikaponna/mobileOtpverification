const admin = require("../config/firebaseAdmin");

// Token verification middleware
const verifyAuthToken = async (req, res, next) => {
  const idToken = req.headers.authorization?.split("Bearer ")[1];

  if (!idToken) {
    return res.status(401).json({ message: "No token provided." });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // Attach user data from the decoded token to the request
    next(); // Continue with the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: "Unauthorized access." });
  }
};

module.exports = { verifyAuthToken };
