import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog Pessoal Alberto | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a href="http://www.linkedin.com/in/alberto-janeiro">
              <LinkedinLogoIcon size={48} weight="bold" />
            </a>
            <a href="http://www.instagram.com">
              <InstagramLogoIcon size={48} weight="bold" />
            </a>
            <a href="http://www.facebook.com">
              <FacebookLogoIcon size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
