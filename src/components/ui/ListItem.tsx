import React from "react";

interface ListItemProps {
  title: string;
  href: string;
  children: React.ReactNode; // Utilisez React.ReactNode pour les enfants
}

const ListItem: React.FC<ListItemProps> = ({ title, href, children }) => (
  <li className="list-none">
    <a href={href} className="block p-2 border rounded hover:bg-gray-100">
      <h3 className="font-semibold">{title}</h3>
      <p>{children}</p>
    </a>
  </li>
);

export default ListItem;
