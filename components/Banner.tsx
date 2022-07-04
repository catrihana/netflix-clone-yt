import Image from "next/image";

function Banner() {
  return (
    <div>
      <div>
        <Image
          src="/images/banner.jpg"
          alt="banner"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}

export default Banner;
