import Avatar from "./Avatar";
import Drawer from "./Drawer";
import Note from "./Note";
const Navbar = () => {
  return (
    <nav className=" text-white bg-inherit flex items-center justify-between p-4 md:px-8">
      <Drawer />
      <h1 className="text-2xl  font-medium">L&nbsp;I&nbsp;A&nbsp;R</h1>
      <div className="flex  gap-8">
        <Note />
        <Avatar />
      </div>
    </nav>
  );
};

export default Navbar;
