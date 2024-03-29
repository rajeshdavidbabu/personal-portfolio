import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";

import type { Theme } from "~/utils/theme-provider";
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
} from "~/utils/theme-provider";
import { getThemeSession } from "./utils/theme.server";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

import stylesheet from "~/styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "icon", type: "image/png", sizes: "196x196", href: "/favicon.png" },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Raj's Personal Website",
  "og:title": "Raj's Personal Website",
  "og:description":
    "A Personal Portfolio Rajesh Babu, where you can read his blog-posts and find his social links.",
  "og:url": "https://rajeshdavibbabu.com",
  "twitter:card":
    "https://res.cloudinary.com/dtshavwni/image/upload/v1680013098/home-illustration-small_wdsuej.webp",
  "og:image":
    "https://res.cloudinary.com/dtshavwni/image/upload/w_1200,h_630,c_scale/v1680013101/home-illustration_vfanz6.webp",
  viewport: "width=device-width,initial-scale=1",
});

export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};

function App() {
  const data = useLoaderData<LoaderData>();

  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>
      <body className="bg-background text-text-primary dark:bg-d-background dark:text-d-text-primary">
        <Analytics />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="relative mx-auto my-0 box-border flex w-full max-w-7xl flex-[1] flex-grow flex-col py-[1em] px-[2em]">
            <Outlet />
          </main>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
