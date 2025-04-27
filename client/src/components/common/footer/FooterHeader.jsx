import React from "react";
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils"; // Import cn nếu dùng

const FooterHeader = () => {
  return (
    // Sử dụng màu nền tiêu chuẩn, giữ logic ẩn/hiện
    <div className={cn(
        "footer-header",
        "hidden lg:flex justify-center items-center", // Chỉ hiện trên lg+
        "bg-gray-100 dark:bg-gray-800" // Màu nền tiêu chuẩn
    )}>
      {/* Sử dụng container để căn giữa và padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-14"> {/* Chiều cao cố định h-14 */}
        {/* Kiểm soát khoảng cách bằng gap thay vì justify-between */}
        <div className="flex flex-row items-center gap-12 w-full"> {/* Thêm gap */}
          <h2 className="uppercase text-lg font-bold text-gray-700 dark:text-gray-300 whitespace-nowrap"> {/* Thêm màu chữ, không xuống dòng */}
            Top Sellings
          </h2>
          <div className="flex space-x-4 text-gray-600 dark:text-gray-400"> {/* Thêm màu cho icon */}
            <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter size={20} /></a>
            <a href="#" aria-label="Youtube" className="hover:text-primary"><Youtube size={20} /></a>
            <a href="#" aria-label="Linkedin" className="hover:text-primary"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHeader;