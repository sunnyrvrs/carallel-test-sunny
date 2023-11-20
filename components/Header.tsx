import { getServerSession } from "next-auth";
import Logo from "./Logo"
import UserButton from "./UserButton"
import { authOptions } from "@/auth";

async function Header() {
  // Get user login session from NextAuth
  const session = await getServerSession(authOptions);
  
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
        <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
            {/* Logo */}
            <Logo />

            <div className="flex-1 flex items-center justify-end space-x-4">
              
              <UserButton session={session}/>
            
            </div>
        </nav>
    </header>
  )
}

export default Header