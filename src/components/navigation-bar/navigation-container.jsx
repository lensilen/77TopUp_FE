import React from "react";
import { InputSearch } from "./input-search";
import { DropdownLink } from "./dropdown-link";
import { Link, useLocation } from "react-router";
import { FaClipboardList, FaEdit, FaHome } from "react-icons/fa";

export const Navbar = () => {
  const location = useLocation();
  const isHomeActive = location.pathname === "/";
  const isCekTransaksiActive = location.pathname === "/transaksi";

  const isAdminEditActive = location.pathname === "/admin/edit";

  const isRoleUser = false;

  // List halaman yang tidak akan muncul
  const hiddenPaths = ["/"];

  return (
    <div className="navbar bg-white/80 backdrop-blur-md shadow-sm border-b border-base-300 pb-2 pt-2 pl-5 pr-5 stickyz-10">
      {/* Logo + search bar */}
      <div className="flex flex-1 items-center gap-20">
        {/* <Link to="/" className="btn btn-ghost text-2xl">77Topup</Link> */}
        <Link to="/">
          <img
            alt="77TopUp Logo"
            src="/77topup_logo_1b.png"
            className="min-w-52 w-52 hover:drop-shadow-sm active:translate-y-[0.5px]"
          />
        </Link>
        {!hiddenPaths.includes(location.pathname) && (
          <div className="flex-1">
            <InputSearch />
          </div>
        )}
      </div>

      {/* Nav bagian kanan */}
      <div className="flex gap-6">
        <Link
          to="/"
          className={
            "flex gap-2 rounded-md items-center select-none pr-4 pl-4 text-base font-semibold hover:drop-shadow-sm active:translate-y-[0.5px]" +
            (isHomeActive ? " text-red-700" : "")
          }
        >
          <FaHome size={20}></FaHome>
          <span>Beranda</span>
        </Link>

        {isRoleUser ? (
          <Link
            to="/transaksi"
            className={
              "flex gap-2 rounded-md items-center select-none pr-4 pl-4 text-base font-semibold hover:drop-shadow-sm active:translate-y-[0.5px]" +
              (isCekTransaksiActive ? " text-red-700" : "")
            }
          >
            <FaClipboardList size={20} />
            <span>Cek Transaksi</span>
          </Link>
        ) : (
          <Link
            to="/admin/edit"
            className={
              "flex gap-2 rounded-md items-center select-none pr-4 pl-4 text-base font-semibold hover:drop-shadow-sm active:translate-y-[0.5px]" +
              (isAdminEditActive ? " text-red-700" : "")
            }
          >
            <FaEdit size={20} />
            <span>Edit Game</span>
          </Link>
        )}

        <Link to="/auth/login" className="btn btn-secondary text-base">
          Masuk
        </Link>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <DropdownLink />
          </ul>
        </div>
      </div>
    </div>
  );
};
