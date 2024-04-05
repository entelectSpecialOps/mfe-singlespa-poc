/** @type {import('next').NextConfig} */
const nextConfig = {
  entry: {
    app: ["./src/components/Heading.tsx"],
  },
  output: {
    path: path.resolve(__dirname, "../dist/heading"),
    publicPath: `${JSON.stringify(config.get("server.publicHost"))}/heading`, // looks like http://localhost:3000/greeting when running locally
    filename: "client.js",
  },
};

export default nextConfig;
