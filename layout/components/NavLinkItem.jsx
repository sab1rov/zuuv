import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavLinkItem({ item, closeMenu }) {
  const router = useRouter();
  const { link } = item;
  const active = router.asPath == link;

  return (
    <li className="menu__item" onClick={closeMenu}>
      <Link className={`nav_link ${active && "active"}`} href={item?.link}>
        {item?.title}
      </Link>
    </li>
  );
}

export default NavLinkItem;
