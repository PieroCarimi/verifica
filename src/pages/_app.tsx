import { PostsProvider } from "@/ContextProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostsProvider>
      <Component {...pageProps} />
    </PostsProvider>
  );
}
