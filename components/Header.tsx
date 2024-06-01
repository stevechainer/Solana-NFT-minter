import React from 'react'
import Image from 'next/image'
import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Header() {
  return (
    <motion.div
      className="text-white p-2 flex justify-between items-center bg-[#191621]"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <h1 className="text-3xl font-mono font-extrabold md:pl-10">
        Solana NFT Minter
      </h1>

      {/* Nav Links */}
      <div className="hidden md:block">
        <nav aria-label="Site Nav">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link
                className="text-white text-[16px] transition hover:text-black/75"
                href="/"
              >
                Minter
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-[16px] transition hover:text-black/75"
                href="/collection"
              >
                Collection
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex justify-end md:justify-between items-center">
        {/* Wallet */}
        <WalletMultiButton />
        <div className="block md:hidden">
          <button className="rounded p-2 text-white transition hover:text-black/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Header
