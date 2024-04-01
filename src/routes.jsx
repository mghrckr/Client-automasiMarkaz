import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "FAQ",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Daftar Layanan",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Cek Transaksi",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
