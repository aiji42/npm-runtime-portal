import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  ignoredRoutes: ["/", "/search"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
};
