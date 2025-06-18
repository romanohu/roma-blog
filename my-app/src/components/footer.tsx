export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-4 mt-auto shadow-inner">
      <div className="container mx-auto text-center text-sm text-gray-600 px-4">
        &copy; {new Date().getFullYear()} Roma.Log(/・・)/ All rights reserved.
      </div>
    </footer>
  );
}