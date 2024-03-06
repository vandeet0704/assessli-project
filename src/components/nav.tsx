// NavMenu component. Responsive for all screen sizes.

// Theme toggle component.
import { ModeToggle } from "./mode-toggle";

// Hambuger menu icon from radix-ui.
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

// UI components from ShadCN.
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";

export function NavMenu() {
  return (
    <div className="flex flex-columns items-center justify-between mx-0 my-0 py-4 px-8">
      <div className="flex items-start">
        <Label className="text-xl font-semibold font-sans">assessli</Label>
      </div>
      <div className="flex items-end space-x-4">
        <Button variant="ghost" className="sm:block hidden">Contact</Button>
        <Button variant="ghost" className="sm:block hidden">About</Button>
        <ModeToggle />
        <Button variant="default" className="sm:block hidden">Sign In</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="sm:hidden">
              <HamburgerMenuIcon className="h-6 w-6"/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Button variant="ghost" className="sm:hidden w-full">Contact</Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="ghost" className="sm:hidden w-full">About</Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Button variant="default" className="sm:hidden w-full">Sign In</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
