"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export function Header({ isAuthenticated = false, onLogout }: HeaderProps) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            aria-label="TaskApp home"
          >
            <div className="text-2xl" role="img" aria-label="Clipboard emoji">
              📋
            </div>
            <h1 className="text-xl font-bold text-gray-900">TaskApp</h1>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-4" role="navigation">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Public Tasks
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  href="/admin"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/admin")
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  aria-current={isActive("/admin") ? "page" : undefined}
                >
                  My Tasks
                </Link>
                <button
                  onClick={onLogout}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/login")
                    ? "bg-indigo-700 text-white"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
                aria-current={isActive("/login") ? "page" : undefined}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}