import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hello everyone! My name is Dan Magro and I am a Blockchain Developer
          </h1>
          <p>
            This website is built with Next.js and TailwindCSS. It also uses a library called next-mdx.
            It allows you to write Markdown and focus on the content of your
            portfolio. For anyone who is new to blogging, wants to develop their own site for the blog using next.js and tailwindcss, and does not want to print another WordPress site, this template is a great happy medium.
          </p>

          <p>Deploy your own in a few minutes.</p>

          <div className="mt-10">
            <Image
              src="/coins.jpeg"
              alt="crypto coins"
              width={1920 / 2}
              height={1280 / 2}
            /> {/* Make sure this tag is self-closed */}
          </div>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
