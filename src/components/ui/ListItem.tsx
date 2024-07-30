import React from "react";

interface ListItemProps {
  title: string;
  href: string;
  logo?: React.ComponentType; // Utiliser `React.ComponentType` pour le type logo
  children?: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  href,
  logo: Logo,
  children,
}) => {
  console.log("Rendering ListItem for:", title, "with logo:", Logo);
  return (
    <li className="list-none">
      <a
        href={href}
        className="p-2 rounded hover:bg-gray-100 flex items-center"
      >
        {Logo && <Logo />}
        <div>
          <h3 className="font-normal text-sm text-stone-400">{title}</h3>
          <p>{children}</p>
        </div>
      </a>
    </li>
  );
};

export default ListItem;
